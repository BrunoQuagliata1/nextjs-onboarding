export interface ProductType {
  id: number;
  name: string;
  description: string | null;
  calification: string | null;
  personalize: string[];
  price: number;
  restaurant: string | null;
  imageUrl?: string | null;
}

export interface GiftCardProps {
  id: number;
  name: string;
  description?: string;
  calification?: string;
  personalize?: string[] | string;
  price: number;
  restaurant?: string;
  imageUrl?: string;
}
