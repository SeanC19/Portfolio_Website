export default function About() {
  return (
    <div id="about">
      {/* Section header bar */}
      <div className="bg-navy border-b-[3px] border-red">
        <div className="max-w-[1200px] mx-auto px-16 h-10 flex items-center justify-between">
          <span className="font-cond text-xs font-black tracking-[0.18em] uppercase text-cream">
            About
          </span>
          <span className="font-mono text-[10px] text-white/30 tracking-[0.08em]">
            George Mason University · B.S. Computer Science · Junior
          </span>
        </div>
      </div>

      {/* Section body */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-16 py-16">
          <div className="fade-in grid grid-cols-[1.2fr_1fr] gap-20 items-start">

            {/* Bio */}
            <div className="flex flex-col gap-4 font-light leading-[1.8]">
              <p className="text-[15px] text-navy">
                I&apos;m a junior at George Mason University pursuing a B.S. in
                Computer Science with a focus on software engineering and
                cybersecurity. I hold the CompTIA Security+ certification and
                recently completed Palantir Foundry &amp; AIP Builder training
                — building data pipelines, designing ontologies, and creating
                AI-driven workflows from the ground up.
              </p>
              <p className="text-[15px] text-muted">
                My project work spans systems programming in C, full-stack web
                development, Android mobile, enterprise data pipelines, and
                reverse engineering — a broader foundation than most CS juniors
                bring to the table.
              </p>
              <p className="text-[15px] text-muted">
                Outside of code: Eagle Scout, President of GMU&apos;s club
                hockey team, Dean&apos;s List honoree, and incoming Director of
                Computer Science at TIC Summer Camp. I bring the same
                discipline and leadership instincts to engineering that
                I&apos;ve built in those roles.
              </p>
            </div>

            {/* Looking for */}
            <div className="border border-[var(--border)] bg-cream2">
              <div className="px-4 py-[10px] border-b border-[var(--border)] bg-navy">
                <span className="font-cond text-[11px] font-bold tracking-[0.12em] uppercase text-cream/50">
                  Currently Looking For
                </span>
              </div>
              <div className="p-4 flex flex-col gap-[10px]">
                {[
                  {
                    title: 'Software Engineering Internship',
                    sub: 'Summer 2026 · Full-time preferred',
                  },
                  {
                    title: 'Cybersecurity / Security Engineering',
                    sub: 'Leverage Security+ foundation in a real environment',
                  },
                  {
                    title: 'Enterprise Data / Government Tech',
                    sub: 'Palantir ecosystem · Defense-adjacent',
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