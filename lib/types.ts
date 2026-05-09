export type BadgeType =
  | 'work'
  | 'cert'
  | 'education'
  | 'honor'
  | 'leadership'
  | 'upcoming';

export interface TimelineEntry {
  type: BadgeType;
  title: string;
  org: string;
  date: string;
  desc: string;
  muted?: boolean;
}

export interface TimelineYear {
  year: string;
  entries: TimelineEntry[];
}

export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  category: string;
  live?: boolean;
  link?: string;
  siteUrl?: string;
}

export interface Cert {
  name: string;
  sub: string;
  href?: string;
  status: 'verified' | 'pending';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  badge: string;
  name: string;
  handle: string;
  href: string;
}