"use client";

import React, { useState } from "react";
import DragBox from "./DragBox";
import PDFDocument from "./PDFDocument";

export default function Container() {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [numPages, setNumPages] = useState(0);

    const handleFileLoad = (file: File) => {
        setPdfFile(file);
    };

    const handleLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const handleRemove = () => {
        setPdfFile(null);
    };

    return (
        <div className="container mx-auto">
            {/* 上传框 */}
            <DragBox onLoadSuccess={handleFileLoad} />

            {/* PDF 预览 */}
            {pdfFile && (
                <PDFDocument pdfFile={pdfFile} onLoadSuccess={handleLoadSuccess} numPages={numPages} onRemove={handleRemove} />
            )}
        </div>
    );
}