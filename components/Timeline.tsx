import { timeline } from '@/lib/data';
import { BadgeType, TimelineEntry } from '@/lib/types';

const badgeStyles: Record<BadgeType, string> = {
  work:       'bg-navy/10 text-navy border-[var(--border2)]',
  cert:       'bg-red/10 text-red border-red/20',
  education:  'bg-navy/[0.06] text-navy border-[var(--border2)]',
  honor:      'bg-yellow-900/10 text-yellow-800 border-yellow-700/25',
  leadership: 'bg-red/[0.06] text-red border-red/15',
  upcoming:   'bg-muted/10 text-muted border-[var(--border2)]',
};

const badgeLabels: Record<BadgeType, string> = {
  work:       'Work',
  cert:       'Cert',
  education:  'Education',
  honor:      'Honor',
  leadership: 'Leadership',
  upcoming:   'Upcoming',
};

function TimelineEntryRow({ entry }: { entry: TimelineEntry }) {
  return (
    <div
      className={`flex gap-6 px-6 py-3 border-b border-[var(--border)] last:border-b-0 items-start relative ${
        entry.muted ? 'opacity-60' : ''
      }`}
    >
      {/* Dot on spine */}
      <div
        className={`absolute left-[-5px] top-[18px] w-[9px] h-[9px] rounded-full border-2 border-cream shadow-[0_0_0_1px_var(--border2)] flex-shrink-0 ${
          entry.muted ? 'bg-muted' : 'bg-red'
        }`}
      />

      {/* Badge */}
      <span
        className={`font-mono text-[9px] font-medium tracking-[0.08em] uppercase px-2 py-[2px] flex-shrink-0 mt-[3px] border min-w-[90px] text-center ${
          badgeStyles[entry.type]
        }`}
      >
        {badgeLabels[entry.type]}
      </span>

      {/* Content */}
      <div className="flex-1">
        <div
          className={`font-cond text-[14px] font-bold uppercase tracking-[0.03em] mb-[2px] leading-[1.2] ${
            entry.muted ? 'text-muted' : 'text-navy'
          }`}
        >
          {entry.title}
        </div>
        <div className="font-mono text-[10px] text-muted tracking-[0.04em] mb-1">
          {entry.org}
        </div>
        <div className="text-[12px] text-muted leading-[1.65] font-light">
          {entry.desc}
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div id="timeline">
      {/* Section header bar */}
      <div className="bg-navy border-b-[3px] border-red">
        <div className="max-w-[1200px] mx-auto px-16 h-10 flex items-center justify-between">
          <span className="font-cond text-xs font-black tracking-[0.18em] uppercase text-cream">
            Timeline
          </span>
          <span className="font-mono text-[10px] text-white/30 tracking-[0.08em]">
            Work · Education · Certifications · Honors
          </span>
        </div>
      </div>

      {/* Section body */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-16 py-16">
          <div className="fade-in relative">

            {/* Vertical spine */}
            <div className="absolute left-[110px] top-0 bottom-0 w-px bg-[var(--border2)]" />

            {timeline.map((yearGroup) => (
              <div key={yearGroup.year} className="mb-0">
                <div className="grid grid-cols-[110px_1fr] gap-6">

                  {/* Year label */}
                  <div className="font-cond text-[11px] font-black tracking-[0.1em] uppercase text-muted text-right pt-[14px]">
                    {yearGroup.year}
                  </div>

                  {/* Entries */}
                  <div className="pl-0">
                    {yearGroup.entries.map((entry, i) => (
                      <TimelineEntryRow
                        key={`${yearGroup.year}-${i}`}
                        entry={entry}
                      />
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Resume download */}
          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <a
              href="https://seanconley.dev/website-files/Resume (Spring 2026) -Sean Conley.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cond text-[13px] font-bold tracking-[0.1em] uppercase px-6 py-[11px] bg-red text-cream border-2 border-red hover:bg-red2 hover:border-red2 transition-colors no-underline inline-flex items-center gap-[6px]"
            >
              Download Full Resume ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
