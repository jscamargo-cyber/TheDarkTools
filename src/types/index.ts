export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  rating: number;
  tags: string[];
  isPremium: boolean;
}
