"use client";
import { useRef } from "react";
import { MdCheckCircle, MdClose, MdError, MdInsertDriveFile, MdUpload } from "react-icons/md";

export default function UploadZone({
  label,
  hint,
  accept,
  name,
  required = false,
  optional = false,
  file,
  onChange,
  uploadProgress,
  uploadError,
}) {
  const inputRef = useRef(null);
  const hasFile = !!file;

  const handleChange = (e) => {
    if (e.target.files?.[0]) onChange(e.target.files[0]);
  };

  function formatSize(bytes) {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  }

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) onChange(dropped);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <label
      className={`
        group relative flex cursor-pointer flex-col items-center justify-center
        rounded-2xl border-[1.5px] border-dashed p-8 transition-all duration-300
        ${
          uploadError
            ? "border-solid border-red-300 bg-red-50"
            : hasFile
              ? "border-solid border-[#25306b] bg-[#f7f9fb]"
              : "border-[#c6c5d1] bg-white hover:border-[#fd7137] hover:bg-[#fff8f5]"
        }
      `}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Icon ring */}
      <div
        className={`
          mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300
          ${
            uploadError
              ? "bg-red-100"
              : hasFile
                ? "bg-[#dee0ff]"
                : "bg-[#dee0ff] group-hover:bg-[#ffdbcf]"
          }
        `}
      >
        {uploadError ? (
          <MdError className="text-2xl text-red-500" />
        ) : hasFile ? (
          <MdInsertDriveFile className="text-2xl text-[#25306b]" />
        ) : (
          <MdUpload className="text-2xl text-[#25306b] transition-colors duration-300 group-hover:text-[#a83900]" />
        )}
      </div>

      {/* Title */}
      <p
        className={`mb-1 text-sm font-semibold ${uploadError ? "text-red-600" : "text-[#0d1955]"}`}
      >
        {uploadError ? "Upload failed" : label}
      </p>

      {/* Hint / error message */}
      <p className="mb-2 text-center text-xs text-[#767681] leading-relaxed">
        {uploadError ? uploadError : hint}
      </p>

      {/* Badge */}
      {!hasFile &&
        !uploadError &&
        (optional ? (
          <span className="rounded-full bg-[#fff8f5] border border-[#ffdbcf] px-3 py-0.5 text-[11px] font-medium text-[#a83900]">
            Optional
          </span>
        ) : (
          <span className="rounded-full bg-[#f2f4f6] border border-[#e0e3e5] px-3 py-0.5 text-[11px] font-medium text-[#454650]">
            PDF · DOC · DOCX · Max 5MB
          </span>
        ))}

      {/* File confirmation row */}
      {hasFile && !uploadError && (
        <div className="mt-3 flex w-full items-center gap-2 rounded-xl border border-[#e0e3e5] bg-white px-3 py-2.5">
          <MdInsertDriveFile className="flex-shrink-0 text-base text-[#25306b]" />
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold text-[#0d1955]">
            {file.name}
          </span>
          <span className="flex-shrink-0 text-[11px] text-[#767681]">
            {formatSize(file.size)}
          </span>
          <button
            onClick={handleRemove}
            className="ml-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#ffdad6] transition-colors hover:bg-[#ffb4ab]"
            aria-label={`Remove ${file.name}`}
            type="button"
          >
            <MdClose className="text-xs text-[#ba1a1a]" />
          </button>
        </div>
      )}

      {/* Upload progress bar */}
      {uploadProgress !== null && uploadProgress < 100 && (
        <div className="mt-3 w-full">
          <div className="mb-1 flex justify-between">
            <span className="text-[11px] text-[#454650] font-medium">
              Uploading...
            </span>
            <span className="text-[11px] text-[#25306b] font-semibold">
              {uploadProgress}%
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#dee0ff]">
            <div
              className="h-full rounded-full bg-[#25306b] transition-all duration-200"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Upload complete indicator */}
      {uploadProgress === 100 && (
        <div className="mt-3 flex w-full items-center gap-2 rounded-xl bg-[#e1f5ee] px-3 py-2 border border-[#9fe1cb]">
          <MdCheckCircle className="text-sm text-[#0f6e56] flex-shrink-0" />
          <span className="text-[11px] font-semibold text-[#0f6e56]">
            Uploaded successfully
          </span>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        required={required && !hasFile}
        onChange={handleChange}
        className="hidden"
      />
    </label>
  );
}
