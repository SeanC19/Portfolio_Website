export default function About() {
  return (
    <div id="about">
      {/* Header bar */}
      <div className="bg-navy border-b-[3px] border-red">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 h-10 flex items-center justify-between">
          <span className="font-cond text-xs font-black tracking-[0.18em] uppercase text-cream">
            About
          </span>
          <span className="font-mono text-[10px] text-white/60 tracking-[0.08em] hidden md:block">
            George Mason University · B.S. Computer Science · Senior
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <div className="fade-in grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-start">

            {/* Bio */}
            <div className="flex flex-col gap-4 font-light leading-[1.8]">
              <p className="text-[15px] text-navy">
                I&apos;m a Computer Science student at George Mason University, graduating
                in May 2027, with a focus on software engineering and cybersecurity. I hold
                the CompTIA Security+ certification and am a Certified Palantir Foundry
                Aware Professional, with hands-on experience in enterprise data pipelines,
                AI-driven workflows, and application development on the Foundry platform.
              </p>

              <p className="text-[15px] text-navy">
                Outside of academics, I serve as President of my club hockey team, managing
                a $75,000 budget and a roster of 20+ athletes and staff. I am also an Eagle
                Scout, a distinction that reflects my commitment to leadership, community
                service, and personal accountability.
              </p>

              <p className="text-[15px] text-navy">
                Actively seeking internships in software engineering, cybersecurity, or 
                enterprise data roles in the Northern Virginia and D.C. area.
              </p>
            </div>

            {/* Looking For */}
            <div className="border border-[var(--border)] bg-cream2">
              <div className="px-4 py-[10px] border-b border-[var(--border)] bg-navy">
                <span className="font-cond text-[11px] font-bold tracking-[0.12em] uppercase text-cream/50">
                  Currently Looking For Opportunities In
                </span>
              </div>

              <div className="p-4 flex flex-col gap-[10px]">
                {[
                  {
                    title: 'Software Engineering',
                    sub: 'Full-stack · Systems · Cloud',
                  },
                  {
                    title: 'Cybersecurity & Security Engineering',
                    sub: 'CompTIA Security+ certified · Risk & secure systems',
                  },
                  {
                    title: 'Palantir Foundry Development',
                    sub: 'Palantir Foundry · Enterprise data pipelines & AI workflows',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-[10px] items-start">
                    <div className="w-[6px] h-[6px] rounded-full bg-red flex-shrink-0 mt-[5px]" />
                    <div>
                      <div className="font-cond text-[13px] font-bold uppercase tracking-[0.04em] text-navy">
                        {item.title}
                      </div>
                      <div className="text-[12px] text-muted mt-[1px]">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
