export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Solution {
  title: string;
  description: string;
  tag: string;
}

export interface Industry {
  name: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  value: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}
