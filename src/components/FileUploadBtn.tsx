"use client";
import { useRef } from "react";
import { Paperclip } from "lucide-react";

export default function FileUploadBtn({
  onFileSelect,
}: {
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  return (
    <div className="inline-flex">
      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf,.doc,.docx,.txt"
        style={{ display: "none" }}
        onChange={onFileSelect}
      />

      <button
        type="button"
        onClick={handleClick}
        className={`flex gap-2 items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors bg-[#F3F3F1] hover:bg-[#F0ECE7] p-2 rounded-full`}
      >
        <Paperclip className="w-5 h-5" />
      </button>
    </div>
  );
}
