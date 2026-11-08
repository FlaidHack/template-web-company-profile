import { images } from '../images';
export const services = {
  title: 'Services',
  product: {
    title: 'Our\nServices',
    image: images.product,
    label: 'What we design',
    items: [
      { title: 'Residential design', text: 'Houses and villas, from first sketch to handover.' },
      { title: 'Commercial interiors', text: 'Offices, cafés and hotels fitted out to open on schedule.' }
    ]
  },
  strategy: {
    title: 'How We\nWork',
    intro: { label: 'From brief to handover', text: 'Three phases keep every project clear, on budget and on schedule.' },
    cards: [
      { title: 'Concept', text: 'We study the site and your brief, then present two clear design directions.', tone: 'soft' },
      { title: 'Development', text: 'Drawings, materials and budget are fixed together before anything is built.', tone: 'soft' },
      { title: 'Delivery', text: 'We supervise construction and hand over a finished space.', tone: 'accent' }
    ]
  }
};
