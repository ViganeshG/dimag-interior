
export type Category = 'All' | 'Architecture' | 'Interiors' | 'Construction' | 'Remodelling';

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  year: string;
  location: string;
  clientName: string;
  builtupArea?: number; // in square feet
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
