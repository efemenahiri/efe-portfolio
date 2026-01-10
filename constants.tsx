import React from 'react';
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '20',
    title: 'EduTrack',
    description: 'Enterprise-grade LMS with a "mastery-first" philosophy and AI-powered mentorship.',
    longDescription: 'EduTrack is a production-ready educational ecosystem that bridges the gap between static video content and interactive mentorship. It features a cinematic lesson player, a sophisticated progress-tracking dashboard, and an AI-powered "Tutor-in-the-Loop" system that provides real-time contextual assistance and quiz hints using Gemini 3 Flash.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini AI', 'LMS'],
    links: {
      live: 'https://eduutrack.netlify.app',
      github: 'https://github.com/efemenahiri/edutrack'
    },
    details: {
      problem: 'Traditional LMS platforms often feel like "video graveyards" where students lose motivation or get stuck on complex concepts without immediate support.',
      solution: 'Implemented an AI Context-Bridge using the Gemini 3.0 Flash model. This allows the platform to "read" the lesson content alongside the student, providing instant, relevant answers.',
      techDecisions: [
        'Utilized a hybrid state management approach, combining React Hooks for local UI states with robust routing for protected content.',
        'Implemented "In-Context Authentication" prompts via a state-aware toast and modal system to keep users in their current flow.',
        'Custom Tailwind CSS configuration for a cinematic dark-mode experience, utilizing backdrop blurs and glassmorphism to create visual depth.'
      ]
    }
  },
  {
    id: '19',
    title: 'EchoAI',
    description: 'Ultra-premium, high-fidelity AI productivity platform centralizing neural chat, resume auditing, and content generation.',
    longDescription: 'EchoAI is a professional-grade AI workspace designed for complex generative tasks. It leverages Gemini 3 Flash to power a low-latency Neural Chat interface, an automated Resume Insight Engine for career audits, and an Artifact Content Studio for high-conversion copy. The platform prioritizes high tokens-per-second performance and a refined, flicker-free streaming experience.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Gemini 3', 'Tailwind', 'AI Canvas'],
    links: {
      live: 'https://echointelligence.netlify.app',
      github: 'https://github.com/efemenahiri/echo-ai'
    },
    details: {
      problem: 'Standard AI interfaces often suffer from high perceived latency and a "one-size-fits-all" UX that feels disjointed when switching between creative and analytical tasks.',
      solution: 'Developed a unified service architecture using the @google/genai SDK supporting both fluid sendMessageStream for chat and atomic generateContent for structured artifacts.',
      techDecisions: [
        'Selected gemini-3-flash-preview for industry-leading performance, ensuring an "instant" feel crucial for a premium productivity product.',
        'Engineered a Card-First responsive strategy that transitions from a stacked mobile view to a cinematic dual-pane desktop layout.',
        'Implemented Zero-Knowledge UI patterns to ensure high-security privacy standards for enterprise-grade document auditing.'
      ]
    }
  },
  {
    id: '18',
    title: 'Rituals',
    description: 'High-end habit architecture platform for users who treat productivity as a craft.',
    longDescription: 'Rituals is a premium, AI-enhanced habit-tracking application designed for high-performers to architect their ideal daily flow. Unlike generic trackers, Rituals emphasizes mindful consistency through a sophisticated UX, providing a "Dashboard of the Self" with performance insights and an AI-powered Ritual Architect.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API', 'Framer Motion'],
    links: {
      live: 'https://ritualss.netlify.app',
      github: 'https://github.com/efemenahiri/rituals'
    },
    details: {
      problem: 'Most habit trackers fail because they lack intelligent feedback and feel like a chore to update, leading to rapid user churn.',
      solution: 'Developed a "joy-first" interaction model using Gemini 3 Flash to analyze user habits and generate contextually relevant ritual suggestions via structured JSON output.',
      techDecisions: [
        'Intelligent state management using React 19 hooks for real-time search filtering and dynamic calendar generation without layout thrashing.',
        'High-performance data visualization with Recharts to provide immediate feedback on consistency scores and peak performance hours.',
        'Strict modular TypeScript architecture to ensure type safety across habit categories and complex AI-generated behavioral payloads.'
      ]
    }
  },
  {
    id: '17',
    title: 'Datapilot',
    description: 'High-performance SaaS analytics Command Center designed for marketing and sales teams.',
    longDescription: 'Datapilot is a sophisticated workspace that transforms complex multi-channel datasets into actionable strategic directions. The platform features an executive-grade dashboard tracking revenue, conversion, and performance with zero latency, integrated with an AI neural engine to provide context-aware insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://tse4.mm.bing.net/th/id/OIP.Vneo8l5mAurJTOdx5wF6JQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Gemini API', 'SaaS'],
    links: {
      live: 'https://datapiloot.netlify.app',
      github: 'https://github.com/efemenahiri/datapilot'
    },
    details: {
      problem: 'Traditional analytics platforms suffer from "data siloing" and "analysis paralysis," offering charts without the narrative context required for immediate decision-making.',
      solution: 'Developed an AI Insight Engine using Gemini 3 Flash that acts as a virtual Senior Data Analyst, programmatically parsing dashboard state to generate proactive growth bullets.',
      techDecisions: [
        'Integrated Gemini-3-Flash to reduce time-to-insight by generating real-time narrative context for complex datasets.',
        'Utilized Recharts for SVG-based rendering, ensuring interactive area and bar charts remain responsive without taxing the main thread.',
        'Engineered an Adaptive Theme Architecture for seamless transitions between "Deep Space" and "Clean Canvas" themes across high-density layouts.'
      ]
    }
  },
  {
    id: '16',
    title: 'CareerBoard',
    description: 'Premium employment marketplace for high-signal opportunities and world-class talent.',
    longDescription: 'CareerBoard redefines the hiring experience through a "Candidate-First" philosophy. Built with a focus on speed and clarity, the application leverages a modern, immersive UI to reduce cognitive load. It features a robust bookmarking system with local persistence, deep category-based navigation, and a sophisticated multi-step modal architecture for seamless application flows.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'State Machines'],
    links: {
      live: 'https://careerboardd.netlify.app',
      github: 'https://github.com/efemenahiri/career-board'
    },
    details: {
      problem: 'Standard job boards suffer from interaction fatigue, where users are overwhelmed by nested pages and complex forms, leading to high candidate drop-off rates.',
      solution: 'Engineered a state-driven view management system using an enum-based state machine and multi-step modal patterns to simplify complex onboarding and application processes.',
      techDecisions: [
        'Implemented an AppView state machine for instant view transitions without the latency of server-side roundtrips.',
        'Developed a reusable multi-step modal architecture with isolated step logic and validation checkpoints.',
        'Utilized React useMemo for sub-10ms job filtering across thousands of permutations, providing a high-performance live-search experience.'
      ]
    }
  },
  {
    id: '15',
    title: 'BalanceHub',
    description: 'Sophisticated financial intelligence platform bridging the gap between raw transaction logging and actionable wealth management.',
    longDescription: 'BalanceHub is a premium, UX-first personal finance ecosystem that empowers users to master their financial lives through high-fidelity data visualization and generative AI. Built with a focus on "Financial Clarity," it transforms the often-stressful task of expense tracking into an elegant, insight-driven experience using Gemini 3 Flash for real-time advisory services.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API', 'Fintech'],
    links: {
      live: 'https://balancehuub.netlify.app',
      github: 'https://github.com/efemenahiri/balance-hub'
    },
    details: {
      problem: 'Most finance apps act as simple digital ledgers, leaving users with a list of Glassmorphic cards but no understanding of their habits or financial direction.',
      solution: 'Integrated Gemini 3 Flash to bridge the gap between logging and understanding, providing human-like, encouraging, and statistically relevant insights.',
      techDecisions: [
        'Integrated Gemini 3 Flash for context-aware financial advisory services and automated habit analysis.',
        'Implemented a robust memoization strategy to ensure fluid 60FPS performance during complex financial data aggregations.',
        'Developed a bespoke glassmorphic design system to convey the trust and precision required for fintech-grade applications.'
      ]
    }
  },
  {
    id: '14',
    title: 'ShopSphere',
    description: 'High-performance e-commerce storefront with an AI Personal Shopper for conversational product discovery.',
    longDescription: 'ShopSphere is a premium digital retail experience prioritizing fluid UX and natural language interactions. It features an integrated AI Personal Shopper powered by Gemini 3 Flash that translates vague user intent into specific product recommendations, moving beyond static filters to provide a truly personalized shopping journey.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://shopsheree.netlify.app',
      github: 'https://github.com/efemenahiri/shop-sphere'
    },
    details: {
      problem: 'Modern e-commerce users suffer from choice paralysis due to static categories and overwhelming catalogs that fail to capture nuanced intent.',
      solution: 'Architected a headless frontend with an intelligent AI routing layer using Gemini 3 Flash to translate natural language into catalog queries.',
      techDecisions: [
        'Performance-first state management using useMemo for zero-latency client-side filtering and sorting of the product grid.',
        'Decoupled modular drawer architecture for cart and wishlist, maintaining user scroll position and shopping context.',
        'Custom Conversational UI (CUI) with humanized typing states and auto-scrolling to increase user engagement.'
      ]
    }
  },
  {
    id: '13',
    title: 'Project Manager',
    description: 'High-velocity project management platform with a focus on engineering speed and clarity.',
    longDescription: 'Project Manager is a premium, high-performance workspace designed for engineering teams and founders. Inspired by the efficiency of Linear and Raycast, it offers a "focus-first" experience with a sleek, dark-themed aesthetic and signature glassmorphism Kanban boards that eliminate interaction latency.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'SaaS'],
    links: {
      live: 'https://projecmanager.netlify.app',
      github: 'https://github.com/efemenahiri/project-manager-saas'
    },
    details: {
      problem: 'Modern PM tools suffer from feature fatigue and interaction latency, making users spend more time fighting UIs than shipping code.',
      solution: 'Developed an atomic component architecture with a "focus-first" experience, utilizing glassmorphism and high-density layouts for zero cognitive overhead.',
      techDecisions: [
        'Atomic Component Architecture ensuring heavy Kanban re-renders do not impact global application performance.',
        'Custom Tailwind design system built on a Slate-950 foundation for a high-contrast, professional "Pro" look.',
        'Mobile-first grid strategy for intelligent stacking of high-density task data across various viewport sizes.'
      ]
    }
  },
  {
    id: '12',
    title: 'DesignPlay',
    description: 'High-fidelity living design system platform for enterprise-grade UI consistency.',
    longDescription: 'DesignPlay bridges the gap between static design tokens and production-ready implementation. It provides a unified workspace where developers can interactively configure atomic components, visualize changes in real-time, and export optimized JSX or Tailwind HTML snippets.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800', // Detail 1: Polished UI Components/Dashboard
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Design Systems'],
    links: {
      live: 'https://designnplay.netlify.app',
      github: 'https://github.com/efemenahiri/design-play'
    },
    details: {
      problem: 'Development teams face "documentation drift," where static design files and actual React codebases diverge, leading to wasted time in manual property conversion.',
      solution: 'Implemented a State-Driven Playground Engine that tracks component configurations and feeds into a real-time Live Preview and Code Generator.',
      techDecisions: [
        'Centralized state-driven navigation handling deep-linking to some documentation sub-sections.',
        'Custom lightweight regex-based syntax highlighter for zero-dependency IDE-like visual code previews.',
        'Utility-first architecture utilizing Tailwind CSS variables for instant brand token switching.'
      ]
    }
  },
  {
    id: '11',
    title: 'SyncPad',
    description: 'High-performance collaborative workspace with real-time presence and Gemini-powered AI refinement.',
    longDescription: 'SyncPad is a next-generation collaborative editor designed for modern engineering teams. It prioritizes speed and intelligence, featuring real-time multi-user presence simulations, a robust rich-text engine, and built-in AI refinement tools using Gemini-3-Flash to perform semantic analysis on text selections.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://syncpadd.netlify.app',
      github: 'https://github.com/efemenahiri/syncpad'
    },
    details: {
      problem: 'Traditional collaborative editors often suffer from "sync drift" or performance lag during rich-text state synchronization across multiple users.',
      solution: 'Implemented an atomic transaction-based state layer and integrated Gemini-3-Flash for contextual, selection-aware text refinement.',
      techDecisions: [
        'Utilized Gemini-3-Flash for semantic analysis on text selections to adjust tone and conciseness in real-time.',
        'Engineered a mock presence engine using cubic-bezier transitions to provide visual feedback of a live sync engine.',
        'Maintained 60FPS editing experience through a sophisticated state management layer treating document updates as atomic transactions.'
      ]
    }
  },
  {
    id: '10',
    title: "Lola's Café",
    description: "Luxury digital storefront with a mood-to-menu AI recommendation engine.",
    longDescription: "Lola's Café is a sophisticated digital sanctuary for a premium coffee lounge. It features an AI Taste Assistant that translates user moods into personalized culinary recommendations, bridging the gap between digital browsing and the physical cafe experience.",
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://lolacafe.netlify.app',
      github: 'https://github.com/efemenahiri/lola-cafe'
    },
    details: {
      problem: "Standard restaurant sites feel like static flyers, failing to capture venue atmosphere or handle user choice paralysis.",
      solution: "Implemented a 'mood-to-menu' engine using Gemini 3 Flash that acts as a digital concierge for personalized taste discovery.",
      techDecisions: [
        "Dynamic Context Injection ensuring AI recommendations are always grounded in live inventory data.",
        "Resilient fallback architecture to handle API latency on mobile networks without degrading UX.",
        "Structured JSON output enforcement with a custom cleaning layer for robust mobile rendering."
      ]
    }
  },
  {
    id: '9',
    title: 'Cold Scoop & GMaestro Lounge',
    description: 'Immersive luxury digital experience for a dual-concept dessert and lounge destination.',
    longDescription: 'Cold Scoop & GMaestro Lounge is a premium digital maître d\' that blends artisanal dessert curation with a sophisticated lounge atmosphere. The platform transforms a standard menu into a visual journey using a "Luxury Dark" aesthetic.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://coldscooop.netlify.app',
      github: 'https://github.com/efemenahiri/cold-scoop'
    },
    details: {
      problem: 'Static menus and generic contact forms fail to capture the premium nature and "vibe" of high-end physical venues.',
      solution: 'Engineered a "digital maître d\'" platform focusing on visual storytelling and integrated a Gemini-powered personal assistant.',
      techDecisions: [
        'Integrated Gemini 3 Flash via @google/genai with custom instructions for a "sophisticated but classy" brand voice.',
        'Custom Tailwind configuration for a "Luxury Dark" palette with gold gradients and backdrop blurs.',
        'Zero-asset overhead strategy leveraging Unsplash API for high-resolution photography ensuring fast LCP.'
      ]
    }
  },
  {
    id: '8',
    title: 'Grand Cuba Hotel & Suites',
    description: 'Bespoke high-fidelity digital hospitality platform with a Gemini-powered AI Concierge.',
    longDescription: 'Grand Cuba Hotel & Suites is an ultra-premium digital experience. It combines a cinematic "Gold & Charcoal" aesthetic with a sophisticated Gemini-powered AI Concierge that handles localized guest inquiries and room bookings.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://grandcubahotel.netlify.app',
      github: 'https://github.com/efemenahiri/grand-cuba-hotel'
    },
    details: {
      problem: 'Traditional digital brochures often fail to mirror physical luxury, leading to a gap between brand promise and reality.',
      solution: 'Developed a "luxury-first" platform featuring a Slow-Zoom cinematic hero experience and a custom-instructed AI Concierge.',
      techDecisions: [
        'Integrated Gemini 1.5 Flash via @google/genai with a persona-anchored system instruction set.',
        'Engineered a complex five-stop gold gradient and backdrop-blur strategy for high-end glassmorphism.',
        'Implemented a type-safe architecture ensuring 100% reliability for room pricing data.'
      ]
    }
  },
  {
    id: '7',
    title: 'K9ine Store',
    description: 'High-end luxury watch e-commerce platform blending a "white-glove" boutique aesthetic with state-of-the-art AI integration.',
    longDescription: 'K9ine Store is a premium digital gallery for prestige timepieces. It features a sophisticated dark-mode UI with gold-accented typography and a Gemini-powered AI Personal Stylist providing tailored horological recommendations.',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800', // Detail 1: High-fidelity luxury watch movement
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://k9inestores.netlify.app',
      github: 'https://github.com/efemenahiri/k9ine-store'
    },
    details: {
      problem: 'Digital luxury shopping often feels transactional compared to the consultative experience of a physical boutique.',
      solution: 'Implemented an AI Concierge using Gemini 3 Flash with a "Catalog Injection" pattern for domain-expert prestige watch advice.',
      techDecisions: [
        'Custom Tailwind utilities for "Gold-Text" and "Gold-Gradient" to maintain luxury brand identity.',
        'Catalog Injection pattern for context-aware recommendations based on style and occasion.',
        'Modular React 19 component structure with strict TypeScript for robust catalog management.'
      ]
    }
  },
  {
    id: '6',
    title: 'Mena Store',
    description: 'High-end AI-integrated e-commerce platform for a premium boutique grocery brand.',
    longDescription: 'Mena Store is a sophisticated digital marketplace reimagining grocery shopping. It combines luxury-minimalist visuals with an AI Personal Shopper for real-time culinary inspiration.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['React 18', 'TypeScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://menastores.netlify.app',
      github: 'https://github.com/efemenahiri/mena-store'
    },
    details: {
      problem: 'Traditional grocery apps often feel cluttered and purely transactional, leading to choice paralysis.',
      solution: 'Implemented a Context-Aware AI Assistant powered by Gemini 3 Flash that suggests products and recipes based on user intent.',
      techDecisions: [
        'Integrated Gemini-3-Flash for an inventory-aware AI Personal Shopper.',
        'Heavy emphasis on Glassmorphism and micro-interactions for a "luxury-minimalist" feel.',
        'Modular TypeScript architecture separating business logic from UI for high scalability.'
      ]
    }
  },
  {
    id: '5',
    title: 'MALX Elegance Hotel & Suite',
    description: 'High-end hospitality platform with an integrated AI Concierge powered by Google Gemini.',
    longDescription: 'MALX Elegance is a premium digital experience combining a lush, cinematic UI with an intelligent virtual assistant providing real-time information about amenities and services.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://malxeleganc.netlify.app',
      github: 'https://github.com/efemenahiri/malx-elegance'
    },
    details: {
      problem: 'Generic hotel sites often fail to answer specific localized questions engagingly.',
      solution: 'Developed a contextual AI core transformed into a brand-aligned Concierge with a localized knowledge base.',
      techDecisions: [
        'Utilized Gemini-3-Flash for a context-aware virtual assistant.',
        'Implemented a "Skeleton-to-Content" strategy with cinematic CSS-based animations.',
        'Maintained conversational history state for persistent guest interaction.'
      ]
    }
  },
  {
    id: '4',
    title: 'Goldstep Hotels Abraka',
    description: 'A luxury hospitality platform featuring a "Gold & Obsidian" aesthetic and seamless room discovery.',
    longDescription: 'Goldstep Hotels Abraka is a premium digital gateway with a high-conversion aesthetic, comprehensive brand experience, and reservation portal with real-time galleries.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Luxury UX'],
    links: {
      live: 'https://goldsteps.netlify.app',
      github: 'https://github.com/efemenahiri/goldstep-hotels'
    },
    details: {
      problem: 'Traditional hospitality businesses in the region lacked a professional digital presence matching their physical luxury.',
      solution: 'Developed a high-performance hospitality platform that bridges the gap between traditional service and modern expectations.',
      techDecisions: [
        'React 19 for improved performance and modern state management.',
        'Intersection Observer API for synchronized navigation and scroll-tracking.',
        'Custom Tailwind gradients and glassmorphism to achieve a premium brand feel.'
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Module Federation']
  },
  {
    title: 'Styling & Motion',
    skills: ['Tailwind CSS', 'Framer Motion', 'CSS-in-JS', 'GSAP', 'Responsive Design']
  },
  {
    title: 'State & Logic',
    skills: ['Zustand', 'Redux Toolkit', 'React Query', 'XState', 'Web Workers']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Vite', 'Vitest', 'GitHub Actions', 'Web Vitals', 'Docker']
  }
];