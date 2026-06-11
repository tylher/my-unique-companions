import { MdError } from "react-icons/md";

export default function Field({ label, required, optional, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-[#191c1e]">
          {label}
        </label>

        {required && <span className="text-[11px] text-[#fd7137]">*</span>}

        {optional && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-container-low text-[#767681]">
            Optional
          </span>
        )}
      </div>

      {children}

      {error && (
        <p className="flex items-center gap-1 text-[11px] text-[#ba1a1a]">
          <MdError className="text-xs" />
          {error}
        </p>
      )}
    </div>
  );
}
