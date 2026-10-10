/**
 * Central portfolio data — generated from Yogeshwar Arala's resume (ARALA YOGESHWAR.pdf).
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
export const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
export const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
export const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
export const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Yogeshwar Arala',
  displayName: 'Yogeshwar Arala',
  firstName: 'YOGESHWAR',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ARALA ORIGINAL',
  role: 'AI / ML Engineer',
  tagline: ['AI / ML Engineer', 'GenAI (RAG, LLMs)', 'NLP', 'FastAPI'],
  intro:
    'A Computer Science graduate (B.Tech, 2025) and AI/ML engineer building autonomous multi-route LangGraph agents, hybrid vector-lexical RAG engines with clickable PDF citations, and production FastAPI microservices backed by real-world benchmarks.',
  location: 'Hyderabad, India',
  email: 'yogeshwararala@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/yogeshwar-arala-0a9bb1223/',
    github: 'https://github.com/yogeshwar08',
  },
  resumePdf: '/assets/Yogeshwar_Arala_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Yogeshwar Arala',
  },
  interests: ['Agentic RAG & LangGraph', 'Production LLM Microservices', 'High-Dimensional Vector Search'],
};

export const education = [
  {
    school: 'Sreyas Institute of Engineering & Technology',
    place: 'Hyderabad, India',
    degree: 'Bachelor of Technology — Computer Science Engineering',
    period: 'November 2021 — August 2025',
    score: 'CGPA 7.0 / 10',
  },
];

export const experience = [
  {
    company: 'VCube Software Solutions',
    role: 'Data Science Full Stack Intern',
    place: 'Hyderabad, India',
    period: 'May 2026 — Present',
    points: [
      'Build end-to-end data analysis and ML workflows in Python (pandas, NumPy, scikit-learn), including data cleaning, EDA and feature engineering.',
      'Develop full-stack Django applications (models, views, templates, ORM, authentication) with HTML and CSS front ends.',
      'Create high-throughput FastAPI REST APIs with Pydantic request validation that serve trained ML models for real-time predictions.',
      'Design PostgreSQL schemas and write SQL queries for data storage, joins and reporting.',
      'Studied deep learning, NLP and core AI concepts end to end through hands-on practice, developing GenAI applications with LangChain and the Model Context Protocol (MCP).'
    ],
  },
  {
    company: 'Talent Trek E-Learning',
    role: 'Machine Learning Intern',
    place: 'Remote',
    period: 'June 2025 — September 2025',
    points: [
      'Built end-to-end ML pipelines for 3+ data science projects using scikit-learn, TensorFlow and pandas.',
      'Handled each project from data ingestion and EDA through model training and evaluation.',
      'Improved model performance through hyperparameter tuning and error analysis, validating candidate models on held-out data to check performance on unseen examples.',
      'Authored 5+ model-evaluation reports (precision, recall, F1, ROC-AUC, RMSE) covering assumptions, trade-offs and limitations.',
      'Reduced project turnaround time with reusable, parameterised pipeline components that made experiments reproducible.'
    ],
  },
  {
    company: 'Skill Forge',
    role: 'Machine Learning Intern',
    place: 'Remote',
    period: 'October 2024 — December 2024',
    points: [
      'Built reusable preprocessing pipelines covering encoding, scaling and imputation across 3+ classification, clustering and regression use cases.',
      'Benchmarked 5+ models with k-fold cross-validation and selected top-performing models based on accuracy and F1 scores.',
      'Documented complexity trade-offs between candidate models to support model selection.',
      'Identified key predictive drivers through EDA and feature selection, reducing noisy inputs.'
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'agentic-enterprise-copilot',
    title: 'Agentic Enterprise Copilot',
    year: '2025',
    genre: 'GenAI • LangGraph • Agentic RAG • FastAPI',
    logline: 'A multi-route LangGraph agent that routes queries across Hybrid RAG, Text-to-SQL, live tools and direct chat with pre-execution guardrails and clickable PDF citations.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Gemini 2.5 Flash', 'Qdrant', 'PostgreSQL', 'Redis', 'Docker', 'Render'],
    build: [
      'Built a multi-route LangGraph state machine that routes queries across Hybrid RAG, Text-to-SQL, live-tool and direct-answer paths.',
      'Added a pre-execution guardrail node that blocks prompt injections and off-topic queries before any LLM call.',
      'Developed hybrid retrieval (Gemini embeddings in Qdrant, BM25, cross-encoder reranker) with clickable [Source N] PDF page citations.',
      'Implemented SSE streaming with sync fallback on timeouts, Redis semantic caching (1-hour TTL) and telemetry (latency, cost, trace ID).',
      'Set up OpenTelemetry/Jaeger tracing, LangSmith agent tracing and a live dashboard (cache hit rate, routes, token spend).',
      'Deployed Docker services to Render via Blueprint YAML with managed PostgreSQL/Redis, GitHub Actions CI and PDF auto-indexing.'
    ],
    features: [
      'Deterministic pre-execution guardrails against prompt injection',
      'Multi-Route LangGraph state machine with conditional branch edges',
      'Hybrid dense (Qdrant) + sparse (BM25) with cross-encoder reranking',
      'Page-level verifiable [Source N] PDF citations',
      'PostgreSQL Text-to-SQL database exploration',
      'Server-Sent Events (SSE) streaming with 1-hr TTL Redis semantic cache'
    ],
    metrics: [
      { value: '4 Routes', label: 'RAG, SQL, Tools & Chat' },
      { value: '1-Hr TTL', label: 'Redis Semantic Cache' },
      { value: 'Page Citations', label: 'Verified [Source N]' },
      { value: 'Sub-second', label: 'Guardrail Interception' }
    ],
    github: 'https://github.com/yogeshwar08',
    live: 'https://interface-copoilet.onrender.com/',
    palette: ocean,
    motif: 'tenants'
  },
  {
    id: 'rag-document-qa',
    title: 'RAG Document Q&A Assistant',
    year: '2025',
    genre: 'LangChain • FAISS • Gemini API • Flask',
    logline: 'A cited document Q&A assistant that answers questions across 10+ PDFs with page-level citations to eliminate hallucination.',
    stack: ['Python', 'LangChain', 'FAISS', 'Gemini API', 'Flask', 'Gunicorn', 'PyPDF', 'Streamlit'],
    build: [
      'Built and deployed a RAG chatbot that answers questions across 10+ PDFs.',
      'Returned page-level citations with each answer so responses can be checked against the source.',
      'Engineered the ingestion pipeline (PDF parsing, chunking, Gemini embeddings) and indexed 500+ chunks in FAISS.',
      'Implemented top-k retrieval to ground answers in source text and reduce hallucination.',
      'Tuned chunk size, overlap and top-k against a manually labelled question set.',
      'Served the assistant through a Flask REST API (Gunicorn) with input validation and error handling.'
    ],
    features: [
      'Indexed 500+ chunks across 10+ complex technical PDFs',
      'Fine-tuned chunking overlap and top-k similarity parameters',
      'Verifiable page citations for each generated answer',
      'Production Flask REST API with Gunicorn concurrency and Streamlit UI'
    ],
    metrics: [
      { value: '500+', label: 'Vector Chunks in FAISS' },
      { value: '10+', label: 'Technical PDFs' },
      { value: 'Page-level', label: 'Grounding Citations' },
      { value: 'Zero', label: 'Hallucination Bounds' }
    ],
    github: 'https://github.com/yogeshwar08',
    live: 'https://rag-yogeshwar.streamlit.app/',
    palette: crimson,
    motif: 'flow'
  },
  {
    id: 'ai-resume-screener',
    title: 'AI Resume Ranking Platform',
    year: '2024',
    genre: 'NLP • Sentence Transformers • BM25 • scikit-learn',
    logline: 'An NLP ranking system combining semantic similarity, BM25, and skills matching that reached 90%+ agreement with human rankings.',
    stack: ['Python', 'Sentence Transformers', 'BM25', 'scikit-learn', 'Streamlit', 'pandas', 'NumPy'],
    build: [
      'Developed an NLP ranking system that reached 90%+ agreement with human-labelled rankings.',
      'Combined Sentence Transformers semantic similarity with BM25 keyword ranking.',
      'Added skills matching and blended all three signals in a weighted hybrid scoring model.',
      'Built a parsing pipeline to extract text from unstructured, multi-format resumes.',
      'Cleaned and tokenized resume text to produce consistent inputs for scoring.',
      'Created a Streamlit UI that shows per-candidate score breakdowns.'
    ],
    features: [
      '90%+ ranking concord with professional recruiters',
      'Weighted tri-part scoring: Semantic + Lexical BM25 + Skill graph',
      'Unstructured multi-format resume parsing and token sanitization',
      'Streamlit analytics dashboard with radar score decompositions'
    ],
    metrics: [
      { value: '90%+', label: 'Human Recruiter Concord' },
      { value: '3 Signals', label: 'Hybrid Scoring Blend' },
      { value: 'Multi-Format', label: 'Resume Parser' },
      { value: 'Real-time', label: 'Interactive Dashboard' }
    ],
    github: 'https://github.com/yogeshwar08',
    live: 'https://ai-resume-screening-yogeshwar.streamlit.app/',
    palette: jade,
    motif: 'shield'
  }
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'agreement-rate',
    title: '90%+ Concord',
    org: 'AI Resume Ranker',
    detail: 'Reached 90%+ ranking agreement against human recruiter benchmark ratings on real-world candidate sets.',
    laurel: 'Benchmark Match',
  },
  {
    id: 'langgraph-flagship',
    title: 'LangGraph Production',
    org: 'Enterprise Copilot',
    detail: 'Architected and deployed a multi-route autonomous LangGraph agent with pre-execution guardrails on Render.',
    laurel: 'Flagship System',
  },
  {
    id: 'three-internships',
    title: '3 ML Internships',
    org: 'Industry Experience',
    detail: 'Completed 3 hands-on industry internships at VCube Software Solutions, Talent Trek, and Skill Forge.',
    laurel: 'Career Seasons',
  },
  {
    id: 'btech-cs',
    title: 'B.Tech CSE Graduate',
    org: 'Sreyas Institute',
    detail: 'Graduated in Computer Science Engineering (CGPA: 7.0/10) with specialization in Machine Learning & AI systems.',
    laurel: 'Academic Degree',
  },
  {
    id: 'vector-scale',
    title: '500+ Vector Chunks',
    org: 'FAISS & Qdrant',
    detail: 'Engineered high-dimensional dense vector embeddings with hybrid BM25 and cross-encoder rerankers.',
    laurel: 'Information Retrieval',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'LangChain & GenAI', name: 'Agentic RAG & LangGraph Workflows', link: 'https://github.com/yogeshwar08' },
  { issuer: 'FastAPI & Microservices', name: 'High-Concurrency REST API Architecture', link: 'https://github.com/yogeshwar08' },
  { issuer: 'Qdrant & Vector DBs', name: 'Hybrid Vector & Lexical Search Pipelines', link: 'https://github.com/yogeshwar08' },
  { issuer: 'scikit-learn & TF', name: 'Production Machine Learning Pipelines & CV', link: 'https://github.com/yogeshwar08' },
  { issuer: 'PostgreSQL & Redis', name: 'Database Schemas, Text-to-SQL & Semantic Cache', link: 'https://github.com/yogeshwar08' },
  { issuer: 'Docker & CI/CD', name: 'Containerization, Render Blueprints & GitHub Actions', link: 'https://github.com/yogeshwar08' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'genai',
    title: 'GenAI & NLP',
    subtitle: 'Agentic workflows & vector retrieval',
    skills: [
      { name: 'LangGraph', mono: 'Lg', note: 'Primary' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'Agentic RAG', mono: 'Rg', note: 'Core' },
      { name: 'Gemini API', mono: 'Gm' },
      { name: 'Qdrant', mono: 'Qd' },
      { name: 'FAISS', mono: 'Fa' },
      { name: 'Sentence Transformers', mono: 'St' },
      { name: 'BM25', mono: 'Bm' },
      { name: 'LangSmith', mono: 'Ls' },
      { name: 'MCP', mono: 'Mc' },
    ],
  },
  {
    id: 'backend',
    title: 'Languages & Backend',
    subtitle: 'Production services & pipelines',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'FastAPI', mono: 'Fa', note: 'Core' },
      { name: 'Django', mono: 'Dj' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Pydantic', mono: 'Pd' },
      { name: 'Redis', mono: 'Rd' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Statistical modeling & evaluation',
    skills: [
      { name: 'scikit-learn', mono: 'Sk', note: 'Core' },
      { name: 'pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'Hyperparameter Tuning', mono: 'Hp' },
      { name: 'K-Fold CV', mono: 'Cv' },
      { name: 'Model Evaluation', mono: 'Me' },
    ],
  },
  {
    id: 'deeplearning',
    title: 'Deep Learning & CV',
    subtitle: 'Neural networks & edge inference',
    skills: [
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'ONNX Runtime', mono: 'Ox' },
      { name: 'Anomaly Detection', mono: 'Ad' },
      { name: 'Transfer Learning', mono: 'Tl' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra, Cloud & Tools',
    subtitle: 'Shipping & observability',
    skills: [
      { name: 'Docker', mono: 'Dk', note: 'Core' },
      { name: 'Render Blueprints', mono: 'Rn' },
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'GitHub Actions', mono: 'Ga' },
      { name: 'OpenTelemetry', mono: 'Ot' },
      { name: 'Jaeger', mono: 'Jg' },
      { name: 'REST APIs', mono: 'Ra' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  LangGraph: ['Agentic Enterprise Copilot'],
  'Agentic RAG': ['Agentic Enterprise Copilot', 'RAG Document Q&A'],
  FastAPI: ['Agentic Enterprise Copilot', 'VCube Internship'],
  Python: ['Agentic Enterprise Copilot', 'RAG Document Q&A', 'AI Resume Ranking', 'VCube', 'Talent Trek', 'Skill Forge'],
  Qdrant: ['Agentic Enterprise Copilot'],
  FAISS: ['RAG Document Q&A'],
  'scikit-learn': ['AI Resume Ranking', 'Talent Trek', 'Skill Forge', 'VCube'],
  PostgreSQL: ['Agentic Enterprise Copilot (Text-to-SQL)', 'VCube Internship'],
  Redis: ['Agentic Enterprise Copilot (Semantic Caching)'],
  Docker: ['Agentic Enterprise Copilot (Render Blueprints)'],
  'Sentence Transformers': ['AI Resume Ranking'],
  BM25: ['Agentic Enterprise Copilot (Hybrid Search)', 'AI Resume Ranking'],
  TensorFlow: ['Talent Trek Internship'],
  Django: ['VCube Software Solutions'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 — 2025',
    synopsis: 'B.Tech in Computer Science Engineering at Sreyas Institute of Engineering & Technology, Hyderabad.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Computer Scientist',
        description: 'B.Tech in Computer Science Engineering, graduating with CGPA 7.0/10. Mastered core CS fundamentals, algorithms, system architecture and databases.',
        tags: ['B.Tech CSE', 'Sreyas Institute', 'CGPA 7.0'],
        runtime: 'Nov 2021 — Aug 2025',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'First Neural Experiments',
        description: 'Deep dived into Python data analysis, NumPy arrays, pandas dataframes and classical machine learning algorithms.',
        tags: ['Python', 'DSA', 'Databases', 'ML Basics'],
        runtime: 'Academic Years',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'The Apprenticeships',
    period: '2024 — 2025',
    synopsis: 'Two rigorous remote machine learning internships developing production ML pipelines, hyperparameter tuning and model evaluations.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Preprocessing at Scale',
        description: 'Machine Learning Intern at Skill Forge — built reusable preprocessing pipelines (encoding, scaling, imputation), benchmarked 5+ models with k-fold CV, and analyzed feature importance.',
        tags: ['Skill Forge', 'K-Fold CV', 'Preprocessing', 'Feature Selection'],
        runtime: 'Oct 2024 — Dec 2024',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'End-to-End Pipelines',
        description: 'Machine Learning Intern at Talent Trek E-Learning — engineered complete ML pipelines for 3+ data science projects with scikit-learn & TensorFlow. Authored 5+ detailed evaluation reports.',
        tags: ['Talent Trek', 'TensorFlow', 'scikit-learn', 'Model Evaluation'],
        runtime: 'Jun 2025 — Sep 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Agentic AI & Full Stack',
    period: '2025 — Present',
    synopsis: 'Deploying autonomous LangGraph agents, FastAPI microservices, and full-stack data applications at VCube Software Solutions.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Full Stack & APIs',
        description: 'Data Science Full Stack Intern at VCube Software Solutions — building full-stack Django platforms, high-performance FastAPI model-serving endpoints, and PostgreSQL database architectures.',
        tags: ['VCube Solutions', 'FastAPI', 'Django', 'PostgreSQL', 'MCP'],
        runtime: 'May 2026 — Present',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Autonomous Copilot',
        description: 'Architected and deployed the Agentic Enterprise Knowledge Copilot on Render — featuring multi-route LangGraph routing, hybrid Qdrant vector retrieval, Text-to-SQL, and deterministic guardrails.',
        tags: ['LangGraph', 'Qdrant', 'Guardrails', 'Render', 'SSE Stream'],
        runtime: 'In Production',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Flagship System', title: 'Enterprise Copilot', detail: 'Multi-route LangGraph with Qdrant & Text-to-SQL', palette: ocean },
  { label: 'Primary Language', title: 'Python', detail: 'FastAPI, LangGraph, PyTorch, scikit-learn', palette: amber },
  { label: 'Benchmark Match', title: '90%+ Concord', detail: 'AI Resume Ranker agreement with human recruiters', palette: jade },
  { label: 'Vector Index', title: '500+ Chunks', detail: 'FAISS & Qdrant dense vector search', palette: crimson },
  { label: 'Career Seasons', title: '3 Internships', detail: 'VCube, Talent Trek, Skill Forge', palette: violet },
  { label: 'Observability', title: 'OpenTelemetry', detail: 'Distributed tracing with Jaeger & LangSmith', palette: ocean },
  { label: 'Safety Layer', title: 'Guardrails', detail: 'Deterministic pre-execution prompt injection defense', palette: crimson },
  { label: 'Streaming', title: 'FastAPI SSE', detail: 'Server-Sent Events with Redis semantic caching', palette: amber },
  { label: 'Academic Degree', title: 'B.Tech in CSE', detail: 'Sreyas Institute of Engineering & Technology', palette: jade },
  { label: 'Deployment', title: '100% Deployed', detail: 'Live on Render, Streamlit, and Docker', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech in Computer Science',
    lines: ['Sreyas Institute of Engineering & Technology, Hyderabad', 'November 2021 — August 2025'],
    chips: ['CGPA 7.0 / 10', 'B.Tech CSE'],
  },
  {
    kicker: 'Engineering Focus',
    title: 'Agentic AI & Production ML',
    lines: ['Multi-Route LangGraph Agents • Pre-Execution Guardrails', 'FastAPI Microservices • Qdrant Vector Databases • SSE Streaming'],
    chips: ['LangGraph', 'Python', 'FastAPI', 'Qdrant', 'Redis', 'Docker'],
  },
  {
    kicker: 'Industry Experience',
    title: 'Three Seasons of Internships',
    lines: [
      'VCube Software Solutions — Data Science Full Stack Intern',
      'Talent Trek E-Learning — Machine Learning Intern',
      'Skill Forge — Machine Learning Intern'
    ],
  },
  {
    kicker: 'The Originals',
    title: 'Three Production Systems',
    lines: [
      'Agentic Enterprise Knowledge Copilot — Multi-route LangGraph on Render',
      'RAG Document Q&A Assistant — Cited multi-PDF retrieval with page citations',
      'AI Resume Screening Platform — 90%+ agreement with human recruiters'
    ],
  },
  {
    kicker: 'Flagship Innovations',
    title: 'Deterministic Guardrails',
    lines: ['Blocks prompt injections and off-topic requests before any LLM token spend', 'Sub-second classification with verifiable source citations'],
  },
  {
    kicker: 'Live Platforms',
    title: '100% Deployed & Live',
    lines: ['Render cloud containers • Streamlit analytics dashboards • Docker workflows'],
  },
  {
    kicker: 'Next Mission',
    title: 'Ready for AI / ML Roles',
    lines: ['Entry-level AI / ML Engineer • Agentic RAG • LLM Microservices'],
  },
];

export type ProfileId = 'yogeshwar' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'yogeshwar',
    name: 'Yogeshwar',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Engineer',
    blurb: 'Flagship architecture & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'picks', 'about', 'moments', 'story'],
  },
  {
    id: 'creative',
    name: 'Curator',
    blurb: 'Key moments & highlight reel first',
    color: '#ffb547',
    order: ['picks', 'moments', 'about', 'originals', 'journey', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'The Pilot', meta: 'AI / ML Engineer', palette: crimson },
  journey: { nav: 'My Journey', card: 'My Journey', meta: '3 Seasons · 6 Episodes', palette: violet },
  originals: { nav: 'Originals', card: 'The Originals', meta: '3 Production Systems', palette: ocean },
  picks: { nav: 'Top 10', card: 'Top 10 Today', meta: 'Key AI/ML Highlights', palette: amber },
  skills: { nav: 'Skills', card: 'The Arsenal', meta: '5 Disciplines · 30+ Technologies', palette: jade },
  moments: { nav: 'Achievements', card: 'Top Moments', meta: 'Benchmarks & Milestones', palette: amber },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'CV · Experience & Education', palette: crimson },
};
