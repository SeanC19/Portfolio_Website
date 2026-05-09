'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-navy border-b-[3px] border-red">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-8 h-[52px]">

        {/* Left — wordmark */}
        <div>
          <Link
            href="#hero"
            className="font-cond text-base font-black tracking-[0.1em] uppercase text-cream no-underline"
          >
            Sean Conley
          </Link>
        </div>

        {/* Center — period pips */}
        <div className="flex flex-col items-center px-8 border-l border-r border-white/10">
          <div className="flex gap-[5px] mb-[2px]">
            <span className="w-[7px] h-[7px] rounded-full bg-red2" />
            <span className="w-[7px] h-[7px] rounded-full bg-red2" />
            <span className="w-[7px] h-[7px] rounded-full bg-red2" />
          </div>
          <span className="font-mono text-[9px] text-white/35 tracking-[0.1em] uppercase">
            Junior · GMU
          </span>
        </div>

        {/* Right — nav links */}
        <div className="flex justify-end">
          <ul className="flex list-none">
            {[
              { label: 'About',    href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Timeline', href: '#timeline' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-cond text-xs font-bold tracking-[0.1em] uppercase text-white/45 no-underline px-[14px] h-[52px] flex items-center border-l border-white/[0.06] hover:text-white/90 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                className="font-cond text-xs font-bold tracking-[0.1em] uppercase text-cream no-underline px-[18px] h-[52px] flex items-center bg-red hover:bg-red2 transition-colors ml-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
