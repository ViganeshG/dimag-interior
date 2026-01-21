
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Minimalist Sanctuary',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    description: 'A serene living space focusing on natural light and textural depth. We used custom oak furniture and soft linen upholstery to create a warm, inviting atmosphere.',
    year: '2023',
    location: 'Beverly Hills, CA'
  },
  {
    id: '2',
    title: 'The Chef\'s Atelier',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200',
    description: 'Modern functionality meets classic luxury. Featuring Carrara marble countertops and gold-finished fixtures.',
    year: '2023',
    location: 'Chelsea, NY'
  },
  {
    id: '3',
    title: 'Cloud Suite',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1200',
    description: 'An ethereal bedroom design utilizing a palette of whites and greys with velvet accents.',
    year: '2024',
    location: 'London, UK'
  },
  {
    id: '4',
    title: 'Executive Focus',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    description: 'A sophisticated workspace designed to boost productivity while maintaining an elegant aesthetic.',
    year: '2023',
    location: 'Singapore'
  },
  {
    id: '5',
    title: 'Modern Heritage',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    description: 'Mixing mid-century modern elements with contemporary comforts.',
    year: '2024',
    location: 'Paris, FR'
  },
  {
    id: '6',
    title: 'Urban Loft',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200',
    description: 'Industrial chic kitchen with exposed brick and high-end stainless appliances.',
    year: '2022',
    location: 'Chicago, IL'
  },
  {
    id: '7',
    title: 'Zen Spa Retreat',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    description: 'A tranquil bathroom sanctuary featuring natural stone, a floating vanity, and a freestanding soaking tub.',
    year: '2024',
    location: 'Kyoto, JP'
  },
  {
    id: '8',
    title: 'Skyline Terrace',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=1200',
    description: 'Luxury rooftop lounge area with weatherproof bespoke seating and fire pit.',
    year: '2023',
    location: 'Dubai, UAE'
  },
  {
    id: '9',
    title: 'Velvet Midnight',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200',
    description: 'Moody, dramatic bedroom design with deep blue velvet walls and brass lighting.',
    year: '2023',
    location: 'Melbourne, AU'
  },
  {
    id: '10',
    title: 'The Glass Pavilion',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    description: 'Floor-to-ceiling windows meet minimal furniture to let the landscape do the talking.',
    year: '2024',
    location: 'Aspen, CO'
  },
  {
    id: '11',
    title: 'Marble & Monolith',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1620626011761-9963d7521476?auto=format&fit=crop&q=80&w=1200',
    description: 'Seamless marble surfaces create a monolithic, ultra-luxurious aesthetic.',
    year: '2024',
    location: 'Milan, IT'
  },
  {
    id: '12',
    title: 'Sun-Drenched Atrium',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Mediterranean-inspired courtyard with olive trees and hand-crafted tiles.',
    year: '2023',
    location: 'Santorini, GR'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Residential Design',
    description: 'Comprehensive interior design for your home, from conceptual sketches to final installation.',
    icon: 'Home'
  },
  {
    id: 's2',
    title: 'Commercial Spaces',
    description: 'Elevating brands through thoughtful spatial design and premium material selection.',
    icon: 'Briefcase'
  },
  {
    id: 's3',
    title: 'Space Planning',
    description: 'Expert architectural flow analysis to maximize the utility and aesthetic of every square foot.',
    icon: 'Maximize'
  },
  {
    id: 's4',
    title: 'Custom Furniture',
    description: 'Bespoke furniture pieces crafted by local artisans to fit your unique style and dimensions.',
    icon: 'Hammer'
  },
  {
    id: 's5',
    title: 'Lighting Design',
    description: 'Scientific and artistic approach to illumination, setting the perfect mood for every hour.',
    icon: 'Sun'
  },
  {
    id: 's6',
    title: 'Art Curation',
    description: 'Expert sourcing and placement of fine art to complement your interior architecture.',
    icon: 'Palette'
  },
  {
    id: 's7',
    title: 'Sustainable Design',
    description: 'Eco-conscious interiors utilizing non-toxic materials and ethically sourced craftsmanship.',
    icon: 'Leaf'
  },
  {
    id: 's8',
    title: 'Virtual Staging',
    description: 'High-end 3D visualization for properties before construction or for luxury real estate listing.',
    icon: 'Monitor'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    role: 'Homeowner',
    content: 'AURA transformed our dark, cluttered living room into a light-filled sanctuary. Their attention to detail is unparalleled.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Julian Thorne',
    role: 'CEO, Nexus Corp',
    content: 'Our new headquarters perfectly captures our brand identity. Professional, creative, and strictly on schedule.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Sophia Rossi',
    role: 'Art Collector',
    content: 'The way they integrated my collection into the home design was masterful. Truly artists in their own right.',
    rating: 5
  }
];

export const LOGOS = [
  'VOGUE', 'AD', 'ELLE DECOR', 'DWELL', 'HOUSE BEAUTIFUL'
];

export const FAQS = [
  {
    question: 'How long does a typical project take?',
    answer: 'Timeline varies by scope. A single room design usually takes 4-8 weeks, while full home renovations can span 4-10 months.'
  },
  {
    question: 'Do you work internationally?',
    answer: 'Yes, we provide luxury design services worldwide. We have successfully completed projects in Europe, Asia, and North America.'
  },
  {
    question: 'What is your design style?',
    answer: 'While we specialize in luxury minimalism, our core philosophy is centered on the client\'s vision. We create "Aura" - a unique atmosphere tailored to you.'
  }
];
