export const aiCaseStudyTitles = {
  title: 'Designing AI-Powered Workflows',
  tableOfContent: {
    intro: 'Intro',
    generativeAI: 'Generative AI',
    supportChat: 'Support Chat',
    aiSummary: 'AI Summary',
    voice: 'Voice & Natural Language',
    value: 'The Value of AI in My Process',
    outcomes: 'Outcomes'
  }
};

export const aiCaseStudyContent = {
  overview: 'As AI continues to reshape how people interact with software, UX designers have an opportunity to rethink traditional workflows and create more efficient, intelligent experiences. This case study explores how we can thoughtfully integrate AI-powered features into software to reduce repetitive tasks, simplify complex workflows, surface relevant insights, and help users accomplish their goals faster. By staying current with emerging AI capabilities and applying them through a user-centered design approach, we can enhance productivity while creating experiences that feel intuitive, useful, and purposeful.',
  genai: [
    'A common problem with analytics dashboards is that having the data isn’t the same as knowing what to do with it. Users can see every metric, but turning that into a decision still falls on them. The AI Assistant closes that gap. Instead of tucking AI away as a side feature, it’s placed front and center above the metrics it’s built from turning trend data into one clear recommendation: an outreach cadence of 13–20 messages over 30 days, with a projected 5.67% lift in open rate. That shifts the user’s job from analyzing the data to simply validating a suggestion, which cuts down time-to-insight and takes pressure off users who don’t have time to parse multi-series charts every time they log in.',
    'It’s also careful not to overstep. The dismiss and pagination controls make clear this is guidance, not automation, so the user stays in control. It’s a small design decision with a real payoff: the dashboard stops being a place you go to read data, and becomes a tool that helps you act on it.'
  ],
  support: [
    'For students juggling registration deadlines, financial aid reviews, and advisor meetings, the biggest stressor often isn’t the tasks themselves, it’s not knowing what to do next or who to ask. The AI Support Chat solves this by meeting students right where they are, on the portal home page, alongside the checklist it’s there to help with. Instead of sending Maria to a help desk or FAQ page, the Chat Assistant opens with suggested prompts tailored to her situation (e.g. pay my balance, check my Fall registration date) turning a blank “how can I help” moment into a guided interaction.',
    'Paired with the AI Summary above it, which proactively flags her next deadline, the chat feels less like a search tool and more like a guide that anticipates questions before students have to ask them. For students often navigating college processes for the first time, that shift from hunting for answers to being offered them meaningfully reduces the friction between students and the requirements they need to stay on track.'
  ],
  aisummary: [
    'Application review is as much a time problem as it is an information problem. A file like Joseph’s spans six separate tabs and reviewers often need to evaluate dozens of candidates in one sitting, making it impractical to piece together a full picture from scratch every time. The AI Summary panel solves this by condensing the entire application into a structured, scannable narrative, organized under the same categories reviewers already know. That means a reviewer can grasp who this candidate is in seconds rather than minutes. It also improves consistency, since every reviewer starts from the same synthesized summary rather than whichever section they happened to open first.',
    'Features like “Regenerate” and the generation timestamp add transparency, letting faculty treat the summary as a trusted starting point while still being able to verify it against the source data. In a high-volume review process, that turns a time-intensive reading task into a fast, confident first pass freeing reviewers to focus on judgment rather than data assembly.'
  ],
  voice: [
    'Building calculated properties has traditionally required knowing a formula syntax which is a real barrier for non-technical admins. This flow removes that barrier by letting users simply describe the calculation in plain English, even via voice input, rather than learning a query language.',
    'A prompt like “calculate the number of days between the application date and today” is enough for the AI to generate a working expression, which then moves through a guided preview-test-review flow so the user can validate the logic before committing it. This matters most for fields like “Days Since Application,” where the underlying calculation is conceptually simple but easy to get wrong if written by hand. By handling the translation from intent to expression, the AI lets admins focus on defining what they need rather than how to code it, making an otherwise developer-adjacent task accessible to anyone configuring the system.'
  ],
  valueIntro: 'AI has also become a valuable tool for me as a designer and a way to close the gap between having an idea and knowing whether it’s right. Across ideation, validation, and handoff, I’ve built AI into the moments where process used to slow me down, so more of my time goes toward the decisions that actually require a human eye.',
  ideation: 'When I’m exploring a new concept, I use AI to move straight from idea to something clickable turning written requirements into a working prototype in an hour instead of a day. On the Data Exporting project, that meant testing three different directions instead of committing early to the first one that seemed workable.',
  feedback: 'Before an idea reaches a real user, I use AI to pressure-test it surfacing edge cases and simulating feedback from personas like System Admin, Application Reviewer or Program Director. On the Reporting Dashboard project, this caught a requirements gap before it ever reached testing, saving a full round of iteration.',
  handoff: 'I documented our reusable design patterns and used AI to convert that documentation into structured MD files engineers could reference directly. This kept code (including AI-generated code) consistent with our design system, reducing inconsistent component usage and handoff back-and-forth by 40%.',
  valueClose: 'These shifts changed what “design” looks like in my day-to-day work. Less time goes into producing artifacts like prototypes, specs, documentation and more into the judgment calls that actually need a designer’s eye: weighing trade-offs, catching what a pattern library can’t anticipate, and making sure the details hold up under real use. That’s the real value AI has added – not speed for its own sake, but space to focus on the parts of the job that still require a human.',
  keyTakeaways: 'AI creates the most value when it reduces repetitive work without removing user control. Across analytics, support, application review, and workflow configuration, the strongest concepts pair useful automation with transparency, preview, and human verification. For designers, the benefit is not speed alone, it is more time to explore alternatives, identify gaps, strengthen handoff, and focus judgment on edge cases and real user outcomes.',
  nextSteps: [
    'Validate AI recommendations through controlled tests and real outcome metrics.',
    'Test support chat and summaries for usability, accuracy, bias, and trust.',
    'Evaluate voice and natural-language workflows with nontechnical administrators.',
    'Standardize transparency safeguards: sources, timestamps, regeneration, and human review.',
    'Track adoption, time saved, correction rates, support deflection, and user satisfaction.'
  ]
};
