import { Globe, Github, Linkedin, Twitter, Instagram, Facebook, Bot } from 'lucide-react';
import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Jairo Capua",
  role: "Automation Expert",
  isVerified: true,
  location: "Manila, Philippines",
  email: "jairocapua.dev@gmail.com",
  bio: "Bridging the gap between manual work and AI. Specializing in n8n, GoHighLevel, and custom systems that help businesses run on autopilot.",
  avatarUrl: "https://raw.githubusercontent.com/jairocapua/jairocapua.github.io/refs/heads/main/assets/images/enhanced%20jairo-pfp-light-nowatermark.jpg",
  avatarUrlDark: "https://raw.githubusercontent.com/jairocapua/jairocapua.github.io/refs/heads/main/assets/images/enhanced-jairo-pfp-dark-nowatermark.jpg",
  links: [
    {
      id: '1',
      label: 'View Automation Portfolio',
      url: '#',
      icon: Globe,
      featured: true,
      type: 'primary'
    },
    {
      id: '2',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jairocapua/',
      icon: Linkedin,
      type: 'secondary'
    },
    {
      id: '3',
      label: 'GitHub',
      url: 'https://github.com/jairocapua',
      icon: Github,
      type: 'secondary'
    },
    {
      id: '4',
      label: 'X / Twitter',
      url: '#',
      icon: Twitter,
      type: 'social'
    },
    {
      id: '5',
      label: 'Instagram',
      url: 'https://www.instagram.com/jaironc19/',
      icon: Instagram,
      type: 'social'
    },
    {
      id: '6',
      label: 'Facebook',
      url: 'https://www.facebook.com/jairo.n.capua/',
      icon: Facebook,
      type: 'social'
    },
  ]
};