import { MdError } from "react-icons/md";

export default function Field({ label, required, optional, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <label className="text-xs font-600 uppercase tracking-wide text-[#191c1e]">
          {label}
        </label>
        {required && <span className="text-[11px] text-[#fd7137]">*</span>}
        {optional && (
          <span className="rounded-full bg-surface-container-low px-2 py-0.5 text-[10px] font-medium text-[#767681]">
            Optional
          </span>
        )}
      </div>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[11px] text-[#ba1a1a]">
          <MdError className="text-xs" /> {error}
        </p>
      )}
    </div>
  );
}
