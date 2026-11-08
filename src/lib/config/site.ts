import { images } from './images';
export const site = {
  name: 'Forma',
  tagline: 'Architecture & Interior',
  description: 'Forma is an architecture and interior studio shaping calm, lasting spaces.',
  meta: { label: 'Studio Profile', date: '07 Nov 2026' },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' }
  ],
  contact: { email: 'hello@forma.studio', phone: '+62 812 0000 0000', address: 'Jl. Pelabuhan No. 12, Samarinda' },
  footer: '© 2026 Forma Studio. All rights reserved.',
  // Section penutup, dipakai di Home & Team
  cta: {
    title: "Let's Shape Your\nNext Space",
    text: 'Tell us about the site, the budget and the timeline. We reply within two working days.',
    image: images.cta,
    card: { text: 'Book a free 30-minute consultation with our design team.', label: 'Book a consultation', href: '/contact' }
  }
};
