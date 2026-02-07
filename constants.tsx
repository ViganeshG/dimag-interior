
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  // Architecture Projects
  {
    id: '1',
    title: 'Gangadhar',
    category: 'Architecture',
    image: '/images/portfolio/Architecture/Gangadhar/Gangadhar Picture 01.jpg',
    description: 'A modern residential architecture project featuring contemporary design elements and optimal space utilization.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Gangadhar'
  },
  {
    id: '2',
    title: 'Lavanya',
    category: 'Architecture',
    image: '/images/portfolio/Architecture/Lavanya/1.jpg',
    description: 'Spacious residential design with emphasis on natural lighting and ventilation, creating a harmonious living environment.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Lavanya'
  },
  {
    id: '3',
    title: 'Vasudeva',
    category: 'Architecture',
    image: '/images/portfolio/Architecture/Vasudeva/2.jpeg',
    description: 'Elegant residential architecture combining traditional elements with modern functionality.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Vasudeva'
  },
  {
    id: '4',
    title: 'Vasudevan',
    category: 'Architecture',
    image: '/images/portfolio/Architecture/Vasudevan/Lift.jpg',
    description: 'Contemporary residential design with clean lines and sustainable building practices.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Vasudevan'
  },
  {
    id: '5',
    title: 'Lilly Apartment',
    category: 'Architecture',
    image: '/images/portfolio/Architecture/Lilly Apartment/2.jpg',
    description: 'Modern apartment complex design with thoughtful space planning and contemporary aesthetics.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Lilly Apartment'
  },
  {
    id: '6',
    title: 'Sunflower Apartment',
    category: 'Architecture',
    image: '/images/portfolio/Architecture/Sunflower Apartment/1.jpg',
    description: 'Elegant apartment architecture featuring premium finishes and functional design.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Sunflower Apartment'
  },
  // Interiors Projects
  {
    id: '7',
    title: 'Mr. Vasudevan',
    category: 'Interiors',
    image: '/images/portfolio/Interiors/Vasudevan/Kitchen.jpg',
    description: 'Complete interior transformation with premium finishes and custom-designed furniture pieces.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Mr. Vasudevan'
  },
  {
    id: '8',
    title: 'Mr. Palanisamy',
    category: 'Interiors',
    image: '/images/portfolio/Interiors/Palanisamy/IMG_0057.jpg',
    description: 'Modern interior design featuring minimalist aesthetics and functional space planning.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Mr. Palanisamy'
  },
  {
    id: '9',
    title: 'Miss Preeti',
    category: 'Interiors',
    image: '/images/portfolio/Interiors/Preethi/20140509_092600.jpg',
    description: 'Elegant interior styling with attention to detail and premium material selection.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Miss Preeti'
  },
  {
    id: '10',
    title: 'Office Spaces',
    category: 'Interiors',
    image: '/images/portfolio/Interiors/Office Space/1.jpeg',
    description: 'Professional office space design creating a productive and inspiring work environment.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Office Spaces'
  },
  // Construction Projects
  {
    id: '11',
    title: 'Arvind',
    category: 'Construction',
    image: '/images/portfolio/Construction/Arvind/1.jpeg',
    description: 'Complete construction project from foundation to finishing, ensuring quality and timely delivery.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Arvind'
  },
  {
    id: '12',
    title: 'Lavanya',
    category: 'Construction',
    image: '/images/portfolio/Construction/Lavanya/1.jpeg',
    description: 'Full-scale construction with modern building techniques and premium materials.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Lavanya'
  },
  // Remodelling Projects
  {
    id: '13',
    title: 'Mr. Bharadwaj',
    category: 'Remodelling',
    image: '/images/portfolio/Remodelling/Bharadwaj/1.jpg',
    description: 'Complete home remodelling transforming the existing space into a modern, functional living environment.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Mr. Bharadwaj'
  },
  {
    id: '14',
    title: 'Mr. Durga Prasad',
    category: 'Remodelling',
    image: '/images/portfolio/Remodelling/Durga Prasad/1.jpeg',
    description: 'Extensive remodelling project enhancing both aesthetics and functionality of the space.',
    year: '2024',
    location: 'Bangalore',
    clientName: 'Mr. Durga Prasad'
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
