import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
  featured?: boolean;
  type?: 'primary' | 'secondary' | 'social';
}

export interface ProfileData {
  name: string;
  isVerified: boolean;
  role: string;
  location: string;
  email: string;
  bio: string;
  avatarUrl: string;
  avatarUrlDark?: string;
  links: LinkItem[];
}