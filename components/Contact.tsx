import { socialLinks } from '@/lib/data';

export default function Contact() {
  return (
    <div id="contact">
      {/* Section header bar */}
      <div className="bg-navy border-b-[3px] border-red">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 h-10 flex items-center justify-between">
          <span className="font-cond text-xs font-black tracking-[0.18em] uppercase text-cream">
            Contact
          </span>
          <span className="font-mono text-[10px] text-white/60 tracking-[0.08em] hidden md:block">
            Open to internships · co-ops · Summer 2026
          </span>
        </div>
      </div>

      {/* Section body */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <div className="fade-in grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-start">

            {/* Left */}
            <div>
              <h2 className="font-cond font-black text-[clamp(2.5rem,8vw,4.5rem)] uppercase leading-[0.88] tracking-[0.01em] text-navy mb-6">
                Let&apos;s build
                <em className="block not-italic text-red">something.</em>
              </h2>

              <p className="text-[14px] text-muted leading-[1.75] mb-8 max-w-[380px] font-light">
                Actively seeking internships in software engineering, cybersecurity, or 
                enterprise data roles in the Northern Virginia and D.C. area.
              </p>

              {/* Details */}
              <div className="flex flex-col border border-[var(--border)] mb-8">
                {[
                  { key: 'Location',  val: 'Fairfax, VA', highlight: false },
                  { key: 'Available', val: 'Fall 2026/Spring 2027', highlight: true },
                  { key: 'Focus',     val: 'SWE · CyberSecurity · Enterprise Data', highlight: false },
                ].map((row) => (
                  <div
                    key={row.key}
                    className="flex items-center px-[14px] py-[9px] border-b border-[var(--border)] last:border-b-0 bg-cream"
                  >
                    <span className="font-mono text-[10px] text-muted tracking-[0.06em] w-[90px] flex-shrink-0">
                      {row.key}
                    </span>
                    <span
                      className={`text-[13px] ${
                        row.highlight ? 'text-red font-medium' : 'text-navy'
                      }`}
                    >
                      {row.val}
                    </span>
                  </div>
                ))}

                {/* Resume row */}
                <div className="flex items-center px-[14px] py-[9px] bg-cream">
                  <span className="font-mono text-[10px] text-muted tracking-[0.06em] w-[90px] flex-shrink-0">
                    Resume
                  </span>
                  <a
                    href="/website-files/Sean_Conley_Resume.pdf" 
                    download="Sean_Conley_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-red no-underline hover:underline"
                  >
                    ↗ Download PDF
                  </a>
                </div>
              </div>

              {/* LinkedIn button */}
              <a
                href="https://www.linkedin.com/in/sean-conley-235558250/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-cond text-[13px] font-bold tracking-[0.1em] uppercase px-6 py-[11px] bg-red text-cream border-2 border-red hover:bg-red2 hover:border-red2 transition-colors no-underline inline-flex items-center gap-[6px]"
              >
                Connect on LinkedIn ↗
              </a>
            </div>

            {/* Right — social links */}
            <div className="mt-2 md:mt-0">
              <div className="font-cond text-[11px] font-bold tracking-[0.14em] uppercase text-muted mb-5 flex items-center gap-[10px]">
                Profiles
                <span className="flex-1 max-w-[40px] h-px bg-[var(--border2)]" />
              </div>

              <div className="flex flex-col gap-px bg-[var(--border)] border border-[var(--border)]">
                {socialLinks.map((link) => (
                  <a
                    key={link.badge}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-[14px] py-[11px] bg-cream hover:bg-cream2 transition-colors no-underline"
                  >
                    <div className="font-cond text-[11px] font-black tracking-[0.06em] w-[34px] h-[34px] bg-navy text-cream flex items-center justify-center flex-shrink-0">
                      {link.badge}
                    </div>
                    <div>
                      <div className="font-cond text-[13px] font-bold uppercase tracking-[0.04em] text-navy">
                        {link.name}
                      </div>
                      <div className="font-mono text-[10px] text-muted mt-[1px]">
                        {link.handle}
                      </div>
                    </div>
                    <span className="ml-auto text-muted text-[13px]">↗</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
