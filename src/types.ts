export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  features: string[];
  schedule: string;
  iconName: string;
}

export interface Team {
  id: string;
  name: string;
  category: string; // U11, U13, U15, U17, Senior Men, Senior Women
  coach: string;
  playersCount: number;
  badge: string;
  achievements: string[];
}

export interface Fixture {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  venue: string;
  status: 'upcoming' | 'completed' | 'live';
  division: string;
}

export interface LeagueStanding {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
  goalDifference: number;
}

export interface PlayerSpotlight {
  id: string;
  name: string;
  age: number;
  role: string;
  team: string;
  joinedYear: number;
  bio: string;
  academicGoal: string;
  imageUrl: string;
  stats: {
    matches: number;
    goals?: number;
    assists?: number;
    attendanceRate: string;
  };
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: 'Match Update' | 'Mentorship' | 'Community' | 'Education';
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
}

export interface OngoingActivity {
  id: string;
  title: string;
  category: 'Matches & League' | 'Mentorship & Education' | 'Girls Empowerment' | 'Community & Pitch' | 'Peace & Cohesion';
  schedule: string;
  location: string;
  statusBadge: 'LIVE THIS WEEKEND' | 'ONGOING WEEKLY' | 'UPCOMING PROJECT' | 'REGISTRATION OPEN';
  statusColor: 'green' | 'blue' | 'yellow' | 'orange' | 'purple';
  description: string;
  keyHighlights: string[];
  imageUrl: string;
  coordinator: string;
  contactInfo: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Matches' | 'Training' | 'Mentorship' | 'Community' | 'Events';
  imageUrl: string;
  caption: string;
  date?: string;
  photographer?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface SponsorTier {
  id: string;
  title: string;
  amount: number;
  period: string;
  description: string;
  benefits: string[];
  impactText: string;
}

export interface JoinFormData {
  fullName: string;
  parentName?: string;
  dateOfBirth: string;
  gender: string;
  category: string;
  phone: string;
  email?: string;
  locationInKakuma: string;
  positionPreference: string;
  notes: string;
}
