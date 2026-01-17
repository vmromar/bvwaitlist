
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  category: 'Outerwear' | 'Headwear' | 'Bottoms' | 'Tops';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum AppState {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED'
}
