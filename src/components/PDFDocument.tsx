"use client";

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PDFDocumentProps {
    pdfFile: File;
    numPages: number;
    onLoadSuccess: (pdf: { numPages: number }) => void;
    onRemove: () => void;
}

export default function PDFDocument({ pdfFile, onLoadSuccess, numPages, onRemove }: PDFDocumentProps) {
    const [rotation, setRotation] = useState(0);

    const rotatePDF = () => {
        setRotation((prevRotation) => (prevRotation + 90) % 360);
    };

    return (
        <div className="pdf-container mt-10 flex flex-col items-center">
            {/* 控制按钮 */}
            <div className="mb-4 flex gap-4">
                <button
                    onClick={rotatePDF}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Rotate PDF
                </button>
                <button
                    onClick={onRemove}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Remove PDF
                </button>
            </div>

            {/* PDF 渲染 */}
            <Document
                file={URL.createObjectURL(pdfFile)}
                onLoadSuccess={onLoadSuccess}
                className="flex flex-wrap gap-4 justify-center"
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        className="shadow-lg"
                        width={window.innerWidth > 640 ? 600 : window.innerWidth - 40} // 自适应小屏幕
                        rotate={rotation} // 应用旋转角度
                    />
                ))}
            </Document>
        </div>
    );
}