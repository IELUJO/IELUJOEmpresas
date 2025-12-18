import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface Client {
  name: string;
}