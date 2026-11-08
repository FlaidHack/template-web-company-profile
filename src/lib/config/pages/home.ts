import { images } from '../images';
export const home = {
  title: 'Home',
  hero: {
    title: 'Spaces Shaped\nWith Intention',
    text: 'Forma is an architecture and interior studio. We design homes, offices and hotels that feel calm and work hard.',
    image: images.hero,
    stat: { label: 'Projects completed', value: '120+', text: 'Homes, offices and hotels delivered across Kalimantan.' }
  },
  index: {
    title: 'Explore\nForma',
    text: 'Four pages: who we are, what we design, who does the work, and how to reach us.',
    items: [
      { title: 'About Forma', text: 'Our story and the demand we design for.', href: '/about' },
      { title: 'Services', text: 'Design packages for homes and businesses.', href: '/services' },
      { title: 'Our Team', text: 'The architects and designers behind each project.', href: '/team' },
      { title: 'Contact', text: 'Book a consultation or send us a brief.', href: '/contact' }
    ]
  }
};
