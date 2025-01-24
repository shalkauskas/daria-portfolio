import nassanDesktop from '@/assets/nassans/nassans.webp';
import teteDesktop from '@/assets/tete/tete-a-tete.webp';
import userReseach from '@/assets/userResearch/user_research_main_page.png';
import likertScaleDesktop from '@/assets/likertScale/likertScale_desktop_main_page.png';
import likertScaleMobile from '@/assets/likertScale/likertScale_mobile_main_page.png';

export const intro = {
  title: 'Hi, I’m Daria!',
  statement: ' I am a Boston based UX/UI designer with a passion for understanding people’s needs.',
  description:
    'Meeting like-minded professionals, brainstorming new features and getting “Aha” moments together that’s what I love about my work. Let me share my latest projects with you.'
};

export const workProjects = [
  {
    title: 'User Research',
    info: [
      'Gathered quantitative and qualitative data on the metrics like usage of features, difficulty of features and overall customer satisfaction with the product.',
      'Deep dived into the weeds of each problem and collected details via user interviews.',
      'Synthesized the data and put together the prioritized list of must-have changes and nice-to-have enhancements.'
    ],
    link: '',
    desktop: userReseach
  },
  {
    title: 'Likert Scale Group UX',
    info: [
      'Designed a solution that provides more focused experience, allows users to easily validate their answers by scanning through the page and requires minimum scrolling.',
      'Saved 50% of development and QA time for the company as the same component solves the problems for both mobile and desktop screen sizes. '
    ],
    desktop: likertScaleDesktop,
    mobile: likertScaleMobile
  },
  {
    title: 'Nassan’s Place Website redesign',
    info: [
      'Improved site architecture based on user needs.',
      'Enhanced usability and accessibility.',
      'Added more prominent CTA button that boosts user’s engagement.',
      'Reorganized resources to help users easier to scan and find information relevant to their needs.'
    ],
    desktop: nassanDesktop,
    mobile: likertScaleMobile,
    link: ''
  },
  {
    title: 'Tete-a-Tete salon Website Redesign',
    info: [
      'Created new responsive design that allows users to learn more about the salon using mobile phones and tablets.',
      'The redesigned website offers more digestible price lists as well as user-oriented information.'
    ],
    link: '',
    desktop: teteDesktop,
    mobile: likertScaleMobile
  }
];

export const links = {
  gmail: 'https://www.linkedin.com/in/daria-in-ux/',
  linkedIn: 'mailto:hudechka22@gmail.com?subject=portfolio',
  resume: ''
};
