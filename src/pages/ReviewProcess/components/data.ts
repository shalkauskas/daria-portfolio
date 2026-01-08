const persona1Bio = [
  {
    title: 'NAME',
    value: 'Dr. Emily Turner'
  },
  {
    title: 'AGE',
    value: '38'
  },
  {
    title: 'JOB',
    value: 'Residency Program Director'
  },
  {
    title: 'LOCATION',
    value: 'Boston, MA'
  },
  {
    title: 'YEARS OF EXPERIENCE',
    value: '10+ years in medical education'
  },
  {
    title: 'EDUCATION',
    value: 'M.D., Board Certified in Internal Medicine'
  },
  {
    title: 'WORKING ENVIRONMENT',
    value:
      'Hospital-based academic institution, working with a diverse team of faculty members'
  }
];

const persona2Bio = [
  {
    title: 'NAME',
    value: 'Dr. Jennifer Parker'
  },
  {
    title: 'AGE',
    value: '40'
  },
  {
    title: 'JOB',
    value: 'Residency Program Application Reviewer'
  },
  {
    title: 'LOCATION',
    value: 'Boston, MA'
  },
  {
    title: 'YEARS OF EXPERIENCE',
    value: '10+ years in medical education'
  },
  {
    title: 'EDUCATION',
    value: 'M.D., Board Certified in Internal Medicine'
  },
  {
    title: 'WORKING ENVIRONMENT',
    value: 'University Hospital, Department of Internal Medicine'
  }
];

const persona1Scenario =
  'Emily is reviewing applications for the upcoming residency cycle. She logs into Outcomes, goes to Applications and she is greeted by a dashboard that displays the number of applications currently under review, the average ratings given by faculty. She filters through the applications by academic performance and clinical experience, narrowing the pool to a manageable number. As she reads through personal statements, Emily makes notes about each applicant’s strengths and areas of concern. She shares these thoughts with her team through the comments, where faculty members can respond with their own insights. By the end of the week, Emily has a clearer picture of which candidates are ready for interviews.';

const persona2Scenario = `Dr. Parker is sitting at her desk on a Monday morning, reviewing applications for the internal medicine residency program. She has a batch of 50 applications to go through this week. Her goal is to filter out the applicants who don't meet the minimum qualifications before starting to look deeper into personal statements and recommendation letters. She’s working with a team of 5 other reviewers, and they will meet next week to discuss their rankings and make final decisions. She needs a system that allows her to leave notes for her colleagues, as well as an easy way to mark applications that stand out for interviews.`;

const persona1Goals = [
  'Evaluate Residency Applications Efficiently',
  'Ensure Fairness and Objectivity',
  'Collaborate with Faculty Members',
  'Reduce Administrative Overhead',
  'Track Candidates Effectively (she wants to maintain clear records of candidate status, feedback, and progress throughout the interview and selection phases.'
];

const persona2Goals = [
  'Efficiency: Jennifer aims to reduce the time spent reviewing each application.',
  'Fair Evaluation: She wants to make unbiased, objective decisions based on qualifications, not personal bias or first impressions.',
  'Collaborative Feedback: She seeks to share insights with her colleagues to ensure the best candidate selection.',
  'Clear Communication: Ensure that the review process is transparent'
];

const persona1PainPoints = [
  'Overwhelming Number of Applications',
  'Fragmented Information',
  'Subjective Bias in Evaluations',
  'Time Constraints',
  'Inefficient Communication'
];

const persona2PainPoints = [
  'Overwhelming Number of Applications',
  'Disorganized Information',
  'Time Constraints',
  'Unclear or Poorly Written Personal Statements'
];

const persona1TasksAndResponsibilities = [
  'Review Applications: Evaluate academic records, personal statements, recommendation letters, and other documents.',
  "Assess Fit for the Program: Determine how well an applicant's experience, background, and values align with the residency program's mission.",
  'Collaborate with Faculty: Discuss and gather feedback from other faculty members about applicants.',
  'Interview Selection: Coordinate interviews, prepare interview panels, and ensure smooth logistics.',
  'Track Progress: Keep a record of application statuses, interview results, and final decisions for each candidate.',
  'Report and Communication: Provide regular updates to the institution and communicate outcomes to applicants.'
];

const persona2TasksAndResponsibilities = [
  'Review Applications',
  "Evaluate applicants' qualifications, clinical experience, recommendation letters, personal statements, and research publications.",
  'Participate in interview decisions and ranking.',
  'Provide feedback to colleagues regarding strengths and weaknesses of candidates.',
  'Maintain confidentiality and ensure compliance with legal and ethical standards in selection.'
];

const persona1Needs = [
  'Centralized Platform: A single place where she can view all applications, track progress, and collaborate with faculty in real-time.',
  'Intuitive Interface: Tools that simplify data entry and offer easy-to-understand reports and summaries.',
  'Automated Workflows: Features like automated ranking or shortlisting based on predefined criteria to help streamline the decision-making process.',
  'Real-Time Collaboration: A way to easily share notes and feedback with faculty members and track ongoing discussions about each applicant.',
  'Improved Candidate Insights: Tools that offer data-driven insights or scoring rubrics to reduce subjectivity in the selection process.'
];

const persona2Needs = [
  'Streamlined Process: A more efficient digital platform that helps her prioritize and track applications.',
  'Automated Sorting/Filtering Tools: Tools that can quickly filter applicants based on basic qualifications (e.g., test scores, GPA) or previous clinical experiences.',
  'Annotation and Collaboration Features: Ability to make quick notes or highlights on applications and share these with other reviewers.',
  'Clear, Customizable Evaluation Criteria: A standardized rubric for evaluations that aligns with program goals but allows for flexibility to highlight individual strengths.',
  'Consistency and Fairness: An interface that helps to ensure no one application is overlooked or unfairly prioritized.'
];

export const persona1 = {
  bio: persona1Bio,
  scenario: persona1Scenario,
  goals: persona1Goals,
  painPoints: persona1PainPoints,
  tasksAndResponsibilities: persona1TasksAndResponsibilities,
  needs: persona1Needs
};

export const persona2 = {
  bio: persona2Bio,
  scenario: persona2Scenario,
  goals: persona2Goals,
  painPoints: persona2PainPoints,
  tasksAndResponsibilities: persona2TasksAndResponsibilities,
  needs: persona2Needs
};
