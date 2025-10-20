export const likertScaleTitles = {
  title: 'Likert Scale Group',
  tableOfContent: {
    problem: 'Problem',
    define: 'Define',
    research: 'Research',
    ideate: 'Ideate & Prototype',
    iterate: 'Get Feedback & Iterate',
    outcomes: 'Outcomes'
  }
};

export const likertScaleContent = {
  problem:
    'The SAAS product that I was working on has both business facing and client interfaces. Business facing (admin) view of the product has a form builder that allows users to create forms that will be used on client interfaces. The likert scale group question type is an essential part of any evaluation form in education area and is widely used by our users. Yet it is the question type that everyone was struggling with. Even on larger screens likert scale tables often looked broken, on mobile devices they were unusable. Taking into account that our products are web applications, having horizontal scroll for the form question on mobile views caused a lot of friction.',
  define1:
    'Our work started with identifying the problem and understanding clients’ needs. Product team provided the examples of the scale group questions created by the clients so I can examine the issues with the layout and get a better understanding of how this question type is used. After looking at the examples I made the following observations:',
  defineList: [
    'Schools tend to use long questions in evaluation/review forms which caused inconsistency of rows’ height and made tables look broken.',
    'Scale often have 5-7 points, sometimes even 10 points.',
    'The same forms appear in the several places and in different types of UI elements: content area, side panels and modals.',
    'The likert scale question type had horizontal scrolling whenever the table did not fit in the form that happened very often.'
  ],
  define2:
    'In addition to that, we had a knowledge gained from previous projects such as understanding user personas and having statistics of what devices are mostly used for specific tasks.',
  define3:
    'As a result, our goal was not only making the scale group question responsive and user-friendly on all devices, but also accommodating large amount of texts.',
  research1:
    'As soon as the problem was defined, I decided to conduct competitive analysis and explore the mechanisms used by some of the leading form creation platforms like Survey Monkey, Google Forms and JotForms. I was very surprised to learn that none of these products came up with the good solution for the likert scale question type.'
};
