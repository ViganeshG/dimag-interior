
export type Category = 'All' | 'Living Room' | 'Kitchen' | 'Bedroom' | 'Office' | 'Bathroom' | 'Outdoor';

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  year: string;
  location: string;
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
