import teteDesktop from '@/pages/Tete/assets/tete-a-tete.webp';
import userReseach from '@/assets/userResearch/user_research_main_page.png';
import likertScaleDesktop from '@/assets/likertScale/likertScale_desktop_main_page.png';
import likertScaleMobile from '@/assets/likertScale/likertScale_mobile_main_page.png';
import { ROUTES } from '@/navigation/routes';

export const intro = {
  title: 'Hi, I’m Daria!',
  statement:
    'I am a Boston based UX/UI designer with a passion for understanding people’s needs.',
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
    link: ROUTES.userResearch,
    desktop: userReseach
  },
  {
    title: 'Likert Scale Group UX',
    info: [
      'Designed a solution that provides more focused experience, allows users to easily validate their answers by scanning through the page and requires minimum scrolling.',
      'Saved 50% of development and QA time for the company as the same component solves the problems for both mobile and desktop screen sizes. '
    ],
    desktop: likertScaleDesktop,
    mobile: likertScaleMobile,
    link: ROUTES.likertScale
  },

  {
    title: 'Tete-a-Tete salon Website Redesign',
    info: [
      'Created new responsive design that allows users to learn more about the salon using mobile phones and tablets.',
      'The redesigned website offers more digestible price lists as well as user-oriented information.'
    ],
    link: ROUTES.tete,
    desktop: teteDesktop,
    mobile: likertScaleMobile
  }
];

export const links = {
  gmail: 'https://www.linkedin.com/in/daria-in-ux/',
  linkedIn: 'mailto:hudechka22@gmail.com?subject=portfolio',
  resume: ''
};
