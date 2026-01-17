
import React from 'react';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'THE ZERO DEGREE PACK',
    price: '2299.00DH',
    description: 'The definitive 6-piece technical bundle: Core Hoodie, Tactical Cargos, Strike Balaclava, Block-01 Puffer, Raw Graphic Tee, and Thermal Long Sleeve. Engineered for extreme thermal regulation.',
    imageUrl: 'https://files.catbox.moe/rbtm4r.png',
    category: 'Outerwear'
  }
];

export const VALID_PASSCODES = [
  'BURV2005', 'BURV2024', 'ZERO2025', 'FROST01', 'NORTH26', 
  'ICE99', 'STRIKE02', 'ZONE00', 'VOID25', 'TECH88', 
  'BLAST22', 'NOVA15', 'CORE21', 'PEAK33', 'GLIDE07'
];

export const LOCK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);
