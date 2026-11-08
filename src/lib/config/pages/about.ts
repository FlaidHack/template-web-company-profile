import { images } from '../images';
export const about = {
  title: 'About',
  intro: {
    title: 'Introducing\nForma',
    image: images.intro,
    year: { label: 'Founded in', value: '2018', text: 'Started as a two-person studio in Samarinda.' },
    paragraphs: [
      'We design buildings and interiors as one piece, so structure, light and material are decided together.',
      'Every project begins on site, with the people who will use the space.'
    ]
  },
  market: {
    eyebrow: 'Expanding Reach',
    stat: { label: 'Demand growth', value: '156%', text: 'Growth in design enquiries over the last three years.' },
    audience: {
      label: 'Who we work with',
      items: [
        { title: 'Homeowners', text: 'Families building or renovating a home they plan to keep.' },
        { title: 'Businesses', text: 'Offices, cafés and hotels that people want to return to.' }
      ]
    },
    small: 'Market\nOpportunity',
    title: 'Rising Demand'
  }
};
