import { certs, skillCategories } from '@/lib/data';
import { Cert } from '@/lib/types';

function CertRow({ cert }: { cert: Cert }) {
  const content = (
    <div className="bg-cream flex items-center gap-3 px-[14px] py-[10px] hover:bg-cream2 transition-colors">
      <div
        className={`w-2 h-2 rounded-full flex-shrink-0 ${
          cert.status === 'verified' ? 'bg-red' : 'bg-muted'
        }`}
      />
      <div className="flex-1">
        <div className="font-cond text-[13px] font-bold tracking-[0.02em] text-navy uppercase">
          {cert.name}
        </div>
        <div className="font-mono text-[10px] text-muted mt-[1px]">
          {cert.sub}
        </div>
      </div>
      <span
        className={`font-mono text-[9px] tracking-[0.06em] px-[7px] py-[2px] flex-shrink-0 border ${
          cert.status === 'verified'
            ? 'bg-red/10 text-red border-red/20'
            : 'bg-muted/10 text-muted border-muted/30'
        }`}
      >
        {cert.status === 'verified' ? 'Verified' : 'In Progress'}
      </span>
    </div>
  );

  if (cert.href) {
    return (
      <a
        href={cert.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        style={{ opacity: cert.status === 'pending' ? 0.55 : 1 }}
      >
        {content}
      </a>
    );
  }

  return (
    <div style={{ opacity: 0.55, cursor: 'default' }}>
      {content}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-[var(--border)] min-h-[calc(100vh-52px)] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] overflow-hidden"
    >
      {/* LEFT */}
      <div className="bg-navy px-6 md:px-12 py-16 md:py-20 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -right-[200px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-red/20 pointer-events-none hidden md:block" />

        <div className="font-mono text-[11px] text-white/40 tracking-[0.12em] uppercase mb-6 flex items-center gap-[10px]">
          <span className="w-6 h-px bg-red2 flex-shrink-0" />
          Computer Science · Fairfax, VA · Open to Opportunities
        </div>

        <h1 className="font-cond font-black text-[clamp(3.5rem,12vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-cream uppercase mb-8">
          Sean
          <em className="block not-italic text-cream/50">Conley</em>
        </h1>

        <p className="text-[15px] text-cream/55 leading-[1.75] max-w-[380px] mb-10 font-light">
          Senior CS student at George Mason University focused on software
          engineering and cybersecurity. CompTIA Security+ certified. Certified Palantir
          Foundry Aware Professional. Experience with full-stack development, secure system design, 
          and enterprise data workflows on the Foundry platform.
        </p>

        <div className="flex gap-[10px] flex-wrap">
          <a
            href="/website-files/Sean_Conley_Resume.pdf"
            download="Sean_Conley_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-cond text-[13px] font-bold tracking-[0.1em] uppercase px-6 py-[11px] bg-red text-cream border-2 border-red hover:bg-red2 hover:border-red2 transition-colors no-underline inline-flex items-center gap-[6px]"
          >
            Download Resume ↗
          </a>

          <a
            href="#projects"
            className="font-cond text-[13px] font-bold tracking-[0.1em] uppercase px-6 py-[11px] bg-transparent text-cream/50 border-2 border-cream/20 hover:border-cream/60 hover:text-cream transition-colors no-underline"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-cream px-6 md:px-14 py-12 md:py-20 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[var(--border)]">

        <div className="font-cond text-[11px] font-bold tracking-[0.14em] uppercase text-muted mb-5 flex items-center gap-[10px]">
          Credentials
          <span className="flex-1 max-w-[40px] h-px bg-[var(--border2)]" />
        </div>

        <div className="flex flex-col gap-px bg-[var(--border)] border border-[var(--border)] mb-8">
          {certs.map((cert) => (
            <CertRow key={cert.name} cert={cert} />
          ))}
        </div>

        <div className="font-cond text-[11px] font-bold tracking-[0.14em] uppercase text-muted mb-5 flex items-center gap-[10px]">
          Technical Skills
          <span className="flex-1 max-w-[40px] h-px bg-[var(--border2)]" />
        </div>

        <div className="flex flex-col gap-[6px]">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="flex items-baseline gap-[10px]">
              <span className="font-mono text-[10px] text-muted tracking-[0.06em] uppercase w-20 flex-shrink-0">
                {cat.name}
              </span>
              <div className="flex flex-wrap gap-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] px-2 py-[3px] bg-cream2 border border-[var(--border2)] text-navy"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
