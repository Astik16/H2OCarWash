import React from 'react';

export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
  icon?: React.ReactNode;
}

export interface Review {
  author: string;
  text: string;
  rating: number;
}