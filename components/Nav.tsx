'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy border-b-[3px] border-red">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-[52px] flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">

        {/* Left — wordmark */}
        <div>
          <Link
            href="#hero"
            className="font-cond text-base font-black tracking-[0.1em] uppercase text-cream no-underline"
          >
            Sean Conley
          </Link>
        </div>

        {/* Center — period pips (hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center px-8 border-l border-r border-white/10">
          <div className="flex gap-[5px] mb-[2px]">
            <span className="w-[7px] h-[7px] rounded-full bg-red2" />
            <span className="w-[7px] h-[7px] rounded-full bg-red2" />
            <span className="w-[7px] h-[7px] rounded-full bg-red2" />
          </div>
          <span className="font-mono text-[9px] text-white/60 tracking-[0.1em] uppercase">
            Senior · GMU
          </span>
        </div>

        {/* Right — nav links (hidden on mobile) */}
        <div className="hidden md:flex justify-end">
          <ul className="flex list-none">
            {[
              { label: 'About',    href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Timeline', href: '#timeline' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-cond text-xs font-bold tracking-[0.1em] uppercase text70 no-underline px-[14px] h-[52px] flex items-center border-l border-white/[0.06] hover:text-white/90 transition-colors"
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

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-cream transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-5 h-[2px] bg-cream transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-cream transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          {[
            { label: 'About',    href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Timeline', href: '#timeline' },
            { label: 'Contact',  href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-cond text-sm font-bold tracking-[0.1em] uppercase text-white/60 no-underline px-6 py-4 flex items-center border-b border-white/[0.06] hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
