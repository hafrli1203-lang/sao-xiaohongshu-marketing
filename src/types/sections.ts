export interface HeroData {
  company: string;
  title: string;
  subtitle: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface PlatformDetail {
  category: string;
  description: string;
}

export interface XiaohongshuIntroData {
  stats: StatItem[];
  platformDetails: PlatformDetail[];
}

export interface TrendCard {
  title: string;
  icon: string;
  points: string[];
}

export interface HashtagData {
  tag: string;
  highlighted: boolean;
}

export interface SearchBarData {
  label: string;
  value: number;
}

export interface SearchDataSection {
  headline: string;
  subheadline: string;
  barChart: SearchBarData[];
  hashtags: HashtagData[];
}

export interface ServiceDetail {
  category: string;
  value: string;
}

export interface ServiceDetailsData {
  serviceName: string;
  details: ServiceDetail[];
  tagline: string;
}

export interface ContentExample {
  id: number;
  image: string;
  alt: string;
}

export interface PricingPackage {
  name: string;
  description: string;
  influencerCount: string;
  contentType: string;
  duration: string;
  price: string;
  pricePerUnit?: string;
  notes?: string;
}

export interface PricingSection {
  title: string;
  packages: PricingPackage[];
  disclaimer?: string;
}

export interface PricingData {
  sections: PricingSection[];
  additionalInfo?: string | string[];
}

export interface ServicePackage {
  name: string;
  subtitle: string;
  description: string;
  includes: string[];
  cta: string;
  highlighted?: boolean;
}

export interface TargetIndustry {
  region: string;
  industries: string[];
}

export interface RoleItem {
  title: string;
  description: string;
}

export interface DeliverableItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  source: string;
}

export interface ContactInfo {
  email: string;
  kakaoId: string;
  qrCodeImage: string;
}
