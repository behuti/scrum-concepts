const topics = [
  {
    id: 1,
    title: "Scrum",
    category: "framework",
    summary: "Lightweight agile framework for managing complex projects.",
    description: "Scrum is a lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems. It is based on empiricism and lean thinking. Its pillars are transparency, inspection, and adaptation.",
    keywords: ["agile", "framework", "empiricism", "iterative", "incremental"]
  },
  {
    id: 2,
    title: "Sprint",
    category: "event",
    summary: "Fixed-length iteration (1-4 weeks) where a valuable increment is created.",
    description: "The Sprint is the heart of Scrum. It is a fixed-length timebox (typically 1 to 4 weeks) during which a potentially releasable product Increment is created. All Scrum events (Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective) occur inside the Sprint. A new Sprint starts immediately after the conclusion of the previous one.",
    keywords: ["iteration", "timebox", "increment", "cycle", "sprint"]
  },
  {
    id: 3,
    title: "Sprint Planning",
    category: "event",
    summary: "Meeting at the start of the Sprint to define what and how work will be done.",
    description: "Sprint Planning initiates the Sprint by establishing the work to be performed. The team collaborates to answer two fundamental questions: What can be delivered this Sprint? and How will the work get done? The output is the Sprint Backlog and the Sprint Goal. It has a maximum timebox of 8 hours for 4-week Sprints.",
    keywords: ["planning", "sprint backlog", "sprint goal", "commitment", "scope"]
  },
  {
    id: 4,
    title: "Daily Scrum (Daily Standup)",
    category: "event",
    summary: "Daily 15-minute meeting to inspect progress toward the Sprint Goal.",
    description: "The Daily Scrum is a 15-minute daily event where Developers inspect progress toward the Sprint Goal and adapt the Sprint Backlog as needed. It focuses on: What did I do yesterday? What will I do today? Are there any impediments? It improves communication, removes obstacles, and promotes rapid decision-making.",
    keywords: ["daily", "standup", "synchronization", "impediments", "inspection"]
  },
  {
    id: 5,
    title: "Sprint Review",
    category: "event",
    summary: "Meeting at the end of the Sprint to inspect the Increment and adapt the Product Backlog.",
    description: "The Sprint Review is held at the end of the Sprint to inspect the Increment and adapt the Product Backlog if needed. The team presents the Sprint results to stakeholders and discusses progress toward the product goal. It is a collaborative working session, not a simple presentation. Maximum timebox of 4 hours for 4-week Sprints.",
    keywords: ["review", "demo", "stakeholders", "feedback", "increment"]
  },
  {
    id: 6,
    title: "Sprint Retrospective",
    category: "event",
    summary: "Meeting to inspect the team's process and plan improvements.",
    description: "The Sprint Retrospective is the Scrum team's opportunity to inspect itself and create a plan for improvements to be enacted during the next Sprint. It focuses on: What went well? What went wrong? What can we improve? It is fundamental to the team's continuous improvement. Maximum timebox of 3 hours for 4-week Sprints.",
    keywords: ["retro", "continuous improvement", "kaizen", "inspection", "adaptation"]
  },
  {
    id: 7,
    title: "Product Backlog",
    category: "artifact",
    summary: "Ordered list of everything needed to improve the product.",
    description: "The Product Backlog is an emergent, ordered list of everything needed to improve the product. It is the single source of work for the Scrum team. Product Backlog Items (PBIs) can be features, improvements, bug fixes, technical requirements, etc. The Product Owner is responsible for managing and prioritizing it.",
    keywords: ["backlog", "pbi", "requirements", "prioritization", "refinement"]
  },
  {
    id: 8,
    title: "Sprint Backlog",
    category: "artifact",
    summary: "The team's plan for the Sprint including the Sprint Goal and selected work.",
    description: "The Sprint Backlog is the set of Product Backlog items selected for the Sprint, plus a plan for delivering them. It is a real-time representation of the work the Developers plan to accomplish during the Sprint to achieve the Sprint Goal. Only the Developers can modify the Sprint Backlog during the Sprint.",
    keywords: ["plan", "commitment", "selection", "sprint goal", "tasks"]
  },
  {
    id: 9,
    title: "Increment",
    category: "artifact",
    summary: "Tangible Sprint outcome that adds value to the product.",
    description: "The Increment is the sum of all Product Backlog items completed during a Sprint, combined with the Increments of all previous Sprints. It must be in usable condition and meet the Definition of Done. Each Increment is a step toward the product goal and must be potentially releasable.",
    keywords: ["increment", "deliverable", "value", "done", "product"]
  },
  {
    id: 10,
    title: "Definition of Done (DoD)",
    category: "artifact",
    summary: "Formal agreement on what it means for work to be complete.",
    description: "The Definition of Done (DoD) is a formal agreement among the Scrum team that defines when a Product Backlog item is truly 'complete'. It provides transparency and ensures everyone understands what 'done' means. If a PBI does not meet the DoD, it cannot be considered completed nor presented at the Sprint Review.",
    keywords: ["dod", "completion", "quality", "criteria", "agreement"]
  },
  {
    id: 11,
    title: "Product Owner (PO)",
    category: "role",
    summary: "Responsible for maximizing product value by managing the Product Backlog.",
    description: "The Product Owner is one of the three accountabilities in the Scrum team. They are responsible for maximizing the value the development team produces. Their main duties include: managing and prioritizing the Product Backlog, communicating the product vision, defining acceptance criteria, and being the voice of the customer. It is a single person, not a committee.",
    keywords: ["po", "product owner", "vision", "prioritization", "stakeholder"]
  },
  {
    id: 12,
    title: "Scrum Master",
    category: "role",
    summary: "Facilitator who ensures Scrum is understood and applied correctly.",
    description: "The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They help everyone understand Scrum theory, practices, rules, and values. They act as a servant-leader for the Scrum team and the organization. They remove impediments, facilitate events, and protect the team from external distractions.",
    keywords: ["facilitator", "coach", "servant leader", "impediments", "agile"]
  },
  {
    id: 13,
    title: "Developers",
    category: "role",
    summary: "Professionals who do the work of delivering a usable Increment each Sprint.",
    description: "Developers are the people on the Scrum team who commit to creating the Increment each Sprint. They are self-managing and cross-functional, meaning they collectively decide how to do the work and possess all necessary skills. There are no sub-teams or specialized titles among Developers.",
    keywords: ["developers", "devs", "self-management", "cross-functional", "team"]
  },
  {
    id: 14,
    title: "Sprint Goal",
    category: "concept",
    summary: "The single objective for the Sprint that guides the team and provides focus.",
    description: "The Sprint Goal is the single objective set for the Sprint. It provides coherence and focus to the team, creating flexibility regarding the Sprint Backlog items. If the work turns out to be different than expected, the team collaborates with the Product Owner to negotiate the Sprint Backlog scope without affecting the Sprint Goal.",
    keywords: ["objective", "goal", "focus", "commitment", "purpose"]
  },
  {
    id: 15,
    title: "User Story",
    category: "concept",
    summary: "Short description of a feature from the user's perspective.",
    description: "A User Story is a simple, concise description of a feature from the end user's perspective. It follows the format: 'As a [user type], I want [action] so that [benefit]'. User stories are a common technique for managing Product Backlog items, but they are not a Scrum requirement. They should be INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.",
    keywords: ["story", "format", "invest", "acceptance criteria", "user"]
  },
  {
    id: 16,
    title: "Scrum Values",
    category: "concept",
    summary: "The five core values that guide Scrum team behavior.",
    description: "Scrum is founded on five values: Commitment (the team commits to achieving goals), Courage (having the courage to do the right thing), Focus (concentrating on the Sprint work), Openness (being transparent about work and challenges), and Respect (respecting each other as capable, independent professionals). These values guide team decisions and behavior.",
    keywords: ["commitment", "courage", "focus", "openness", "respect"]
  },
  {
    id: 17,
    title: "Product Backlog Refinement",
    category: "practice",
    summary: "Ongoing activity to break down and detail Product Backlog items.",
    description: "Product Backlog Refinement (or grooming) is the activity of adding detail, estimates, and order to Product Backlog items. It is not a formal Scrum event, but it is a recommended practice. The team and Product Owner collaborate to break down large PBIs into smaller ones, estimate them, and prioritize them. It generally takes no more than 10% of the team's time.",
    keywords: ["refinement", "grooming", "breakdown", "estimation", "prioritization"]
  },
  {
    id: 18,
    title: "Velocity",
    category: "metric",
    summary: "Measure of how much work the team completes in a Sprint.",
    description: "Velocity is a metric that indicates the amount of work a Scrum team completes in a Sprint. It is primarily used for planning and forecasting. It is important to remember that velocity should not be used to compare teams, but rather as an internal planning tool. It is measured in story points or ideal hours.",
    keywords: ["velocity", "metric", "story points", "planning", "forecast"]
  },
  {
    id: 19,
    title: "Burndown Chart",
    category: "metric",
    summary: "Chart showing remaining work over time within a Sprint.",
    description: "The Burndown Chart is a graphical representation of work remaining over time. It shows how much work is left in the Sprint day by day. The ideal line shows what progress would look like if work were completed linearly. Comparing the actual line to the ideal helps the team understand if they are on track to meet the Sprint Goal.",
    keywords: ["chart", "progress", "tracking", "trend", "sprint"]
  },
  {
    id: 20,
    title: "Timeboxing",
    category: "practice",
    summary: "Technique that assigns a fixed time limit to each activity or event.",
    description: "Timeboxing is a fundamental Scrum technique that assigns a fixed maximum duration to each event. It helps avoid unnecessary perfectionism, improves productivity, and ensures the team invests the right amount of time in each activity. All Scrum events have a defined timebox: Daily Scrum (15 min), Sprint Planning (8 hours), Sprint Review (4 hours), and Sprint Retrospective (3 hours).",
    keywords: ["timebox", "limit", "duration", "events", "productivity"]
  }
];

module.exports = topics;
