import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: number;
  image: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapUrl: string;
  instagram: string;
  tiktok: string;
}