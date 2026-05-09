import { projects } from '@/lib/data';
import { Project } from '@/lib/types';

function RosterRow({ project }: { project: Project }) {
  return (
    <div className="group grid grid-cols-[50px_1fr] md:grid-cols-[60px_1fr_180px] py-6 border-b border-[var(--border)] last:border-b-0 hover:bg-navy/[0.02] transition-colors items-start">
      {/* Number */}
      <div className="font-cond text-[2rem] font-black italic text-navy/[0.12] group-hover:text-red transition-colors pt-[2px] leading-none">
        {project.num}
      </div>

      {/* Main */}
      <div className="pr-0 md:pr-8">
        <div className="font-cond text-[1.1rem] md:text-[1.2rem] font-black tracking-[0.02em] uppercase text-navy mb-[6px] leading-[1.1]">
          {project.title}
        </div>

        <div className="text-[13px] text-muted leading-[1.7] mb-[10px] font-light">
          {project.desc}
        </div>

        <div className="flex flex-wrap gap-1 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-[7px] py-[2px] border border-[var(--border2)] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-red no-underline tracking-[0.04em] inline-flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View on GitHub ↗
          </a>
        )}
      </div>

      {/* Side — hidden on mobile */}
      <div className="hidden md:block pt-1">
        <div className="font-cond text-[11px] font-bold tracking-[0.08em] uppercase text-muted mb-[5px]">
          {project.category}
        </div>

        {project.live && (
          <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-cream bg-red px-[7px] py-[2px]">
            Live
          </span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div id="projects">
      {/* Section header bar */}
      <div className="bg-navy border-b-[3px] border-red">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 h-10 flex items-center justify-between">
          <span className="font-cond text-xs font-black tracking-[0.18em] uppercase text-cream">
            Projects
          </span>
          <span className="font-mono text-[10px] text-white/30 tracking-[0.08em]">
            {projects.length} on the roster
          </span>
        </div>
      </div>

      {/* Section body */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">

          {/* Roster header — hidden on mobile */}
          <div className="fade-in hidden md:grid grid-cols-[60px_1fr_180px] pb-[10px] border-b-2 border-navy mb-0">
            {['#', 'Project', 'Category'].map((h) => (
              <div
                key={h}
                className="font-cond text-[10px] font-bold tracking-[0.12em] uppercase text-muted"
              >
                {h}
              </div>
            ))}
          </div>

          {/* Roster rows */}
          <div className="fade-in" style={{ transitionDelay: '0.05s' }}>
            {projects.map((project) => (
              <RosterRow key={project.num} project={project} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
