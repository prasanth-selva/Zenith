/* ─── Shared Type Definitions ──────────────────────────── */

export interface EventRound {
  title: string;
  description: string;
}

export interface EventCoordinator {
  name: string;
  phone: string;
}

export interface ZenithEvent {
  id: string;
  title: string;
  category: 'technical' | 'non-technical' | 'fun';
  participants: number;
  format: string;
  description: string;
  fullDescription: string;
  rounds: EventRound[];
  rules: string[];
  coordinators: EventCoordinator[];
  image: string;
  poster: string;
  pdf: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  image: string;
}

export interface TeamGroup {
  title: string;
  members: TeamMember[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

export interface ContactCard {
  name: string;
  role: string;
  phone: string;
}
