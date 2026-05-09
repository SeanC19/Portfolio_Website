import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed, DM_Mono } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  title: 'Sean Conley — Software Engineer',
  description:
    'Junior CS student at George Mason University focused on software engineering and cybersecurity. CompTIA Security+ certified. Palantir Foundry trained.',
  keywords: [
    'Sean Conley',
    'Software Engineer',
    'George Mason University',
    'Computer Science',
    'Cybersecurity',
    'CompTIA Security+',
    'Palantir Foundry',
  ],
  authors: [{ name: 'Sean Conley' }],
  openGraph: {
    title: 'Sean Conley — Software Engineer',
    description:
      'Junior CS student at George Mason University focused on software engineering and cybersecurity.',
    url: 'https://seanconley.dev',
    siteName: 'Sean Conley',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}