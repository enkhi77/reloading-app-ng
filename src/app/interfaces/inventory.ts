export interface Brass {
  headstamp: string;
  rangeBrass: boolean;
}

export interface Bullet {
  caliber: string;
  datePurchased: Date;
  diameter: number;
  id: number;
  lot: string;
  manufacturer: string;
  price: number;
  weight: number;
}

export interface Powder {
  id: number;
  lot: string;
  manufacturer: string;
  name: string;
  price: number;
  vol: number;
  weight: number;
}

export interface Primer {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  type: string;
  datePurchased: Date;
}
