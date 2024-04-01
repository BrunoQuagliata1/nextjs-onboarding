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
