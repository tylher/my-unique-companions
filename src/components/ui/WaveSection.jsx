export default function WaveSection({ children }) {
  return (
    <section className="relative overflow-hidden bg-primary-container py-24 text-white ">
      <div className="absolute left-1/2 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-container/15 blur-[120px]" />

      {children}

      <div className="absolute bottom-0 left-0 w-full leading-none z-20 text-white ">
        <svg
          className="w-full h-20 block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,140 480,0 720,64 C960,128 1200,32 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="absolute -top-1 left-0 w-full leading-none z-20 pointer-events-none text-[#ffffff]">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C480,120 960,-40 1440,40 L1440,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
