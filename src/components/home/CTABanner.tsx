import { Link } from "react-router-dom"

export function CTABanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-yes">
        <div className="bg-near-black rounded-[var(--radius-section)] px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
          {/* Subtle aura effect */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: "var(--color-light-mint)" }} />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none" style={{ background: "rgba(5, 77, 40, 0.06)" }} />

          <div className="relative z-10">
            <h2
              className="text-[40px] md:text-[64px] lg:text-[80px] font-black leading-[0.85] text-white"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Ready to Build Your <span className="hook">Team</span> in Ethiopia?
            </h2>
            <p className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium" style={{ fontFeatureSettings: '"calt"' }}>
              One conversation. No commitment. We'll map your requirements to a clear plan.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/initialize"
                className="wise-btn inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-[var(--radius-pill)] border border-white/20 hover:border-white/40 hover:bg-white/[0.06]"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Schedule a Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <p className="mt-4 text-[13px] text-white/30 font-medium" style={{ fontFeatureSettings: '"calt"' }}>
              Or call us directly: <a href="tel:+251942070707" className="text-white/50 hover:text-white/70 transition-colors">+251 942 07 07 07</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
