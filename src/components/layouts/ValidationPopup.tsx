import React, { useState, DragEvent, ChangeEvent, FormEvent } from "react";
import { Upload } from "lucide-react";

interface FileUploadFormProps {
  onSubmit?: (file: File | null, details: string) => void;
  onClose: () => void; // Tambahkan prop onClose
  title: string;
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({
  onSubmit,
  onClose,
  title,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [details, setDetails] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(true); // State untuk mengontrol visibilitas popup

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(file, details);
    }
    console.log("File:", file);
    console.log("Details:", details);
    setIsPopupVisible(false); // Sembunyikan popup setelah submit
  };

  const handleClosePopup = () => {
    onClose(); // Panggil onClose untuk menutup popup
  };

  if (!isPopupVisible) return null; // Jangan render apa-apa jika popup tidak terlihat

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"></div>

      {/* Popup */}
      <div className="fixed inset-0 pl-[300px] flex items-center justify-center z-50">
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md relative">
          {/* Close Button */}
          <button
            onClick={handleClosePopup}
            className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
                ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}
                ${file ? "bg-gray-50" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileInput}
                accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" // Tambahkan sesuai tipe file yang diizinkan
              />

              <Upload className="mx-auto h-12 w-12 text-gray-400" />

              <div className="mt-2">
                {file ? (
                  <p className="text-sm text-gray-600">
                    File selected: {file.name}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">
                    Drag and Drop to Upload
                    <br />
                    or click to browse
                  </p>
                )}
              </div>
            </div>

            {/* Details Input */}
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Detail Barang:
              </label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Masukkan keterangan/deskripsi terkait barang yang diproyeksikan"
                className="w-full min-h-[100px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-fit bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-md transition-colors duration-200"
              >
                KIRIM
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FileUploadForm;
