"use client";

import React, { useState } from "react";

interface DragBoxProps {
    onLoadSuccess: (pdfFile: File) => void;
}

const DragBox: React.FC<DragBoxProps> = ({ onLoadSuccess }) => {
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            onLoadSuccess(file); // 将文件对象传递给上层组件
        }
    };

    return (
        <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`px-20 h-64 flex items-center justify-center border-4 rounded-md
                ${isDragOver ? "border-blue-500" : "border-dashed border-gray-300"}
                hover:border-blue-500 transition-colors duration-300`}
        >
            <p className="text-gray-500">drop pdf file here or click to upload</p>
        </div>
    );
};

export default DragBox;