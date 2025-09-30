import { ReactNode } from "react"
import {
  Music,
  Code,
  BrainCircuit,
  Sparkles,
  BookOpen,
  ChefHat,
  Video,
  Gamepad2,
  Target
} from "lucide-react"

export interface ProjectSection {
  title: string
  content: string | ReactNode
  items?: string[]
  gridItems?: {
    title: string
    icon: string
    items: string[]
  }[]
}

export interface ProjectDetailData {
  // Basic Info
  slug: string
  title: string
  tagline: string
  description: string
  category: string
  badge: {
    text: string
    color: string
  }
  statusBadges?: {
    text: string
    color: string
    icon?: string
  }[]

  // Media
  image: string
  imageAlt: string

  // Project Details Sidebar
  team?: string
  techStack: string[]
  keyFeatures: string[]

  // Links
  githubLink?: string | null
  liveLink?: string | null
  demoLink?: string | null

  // Content Sections
  sections: ProjectSection[]

  // Target Users
  targetUsers: {
    icon: string
    text: string
  }[]

  // Optional additional sidebar sections
  sidebarExtras?: {
    title: string
    items: {
      label: string
      value: string
    }[]
  }[]
}

export const projectsData: ProjectDetailData[] = [
  {
    slug: "mood2song",
    title: "Mood2Song",
    tagline: "A music discovery platform that helps users find songs based on their mood, persona, or specific vibe.",
    description: "A music discovery experience that helps you find songs by emotion, persona, and vibe - pairing an intuitive UX with rich filtering and streaming integrations for instant listening.",
    category: "Music Discovery",
    badge: {
      text: "Music Discovery",
      color: "bg-purple-500/20 text-purple-300"
    },
    image: "/mood2song.png",
    imageAlt: "Mood2Song Interface",
    techStack: ["React", "Next.js", "Node.js", "Spotify API", "TailwindCSS", "NLP"],
    keyFeatures: [],
    githubLink: "https://github.com/BlakeDanielson/mood2song",
    liveLink: "https://mood2song.com",
    sections: [
      {
        title: "What is Mood2Song?",
        content:
          "Mood2Song is a music discovery experience that helps you find songs by emotion, persona, and vibe - pairing an intuitive UX with rich filtering and streaming integrations for instant listening."
      },
      {
        title: "Core User Features",
        content: "Mood2Song provides an intuitive interface for discovering music based on emotional states, personas, and specific contexts. Users can select from a variety of moods, create or choose persona profiles, and apply advanced filters to find the perfect soundtrack for any moment. The platform integrates with streaming services to provide immediate playback and saving options.",
        items: [
          "Mood Selection with options like Melancholic, Energetic, Relaxed, and more",
          "Persona Profiles that represent different music personality types",
          "Advanced filtering by genre, era, discovery level, and language",
          "Natural language input for describing specific vibes or contexts",
          "Integration with popular streaming platforms for seamless listening"
        ]
      },
      {
        title: "Technical Architecture",
        content: "Mood2Song leverages several technologies to create a seamless music discovery experience:",
        items: [
          "React and Next.js for a responsive, interactive frontend",
          "Node.js backend for API integration and data processing",
          "Spotify API for accessing a vast library of music and metadata",
          "Natural language processing to analyze user inputs and match with music",
          "TailwindCSS for responsive design and consistent UI components"
        ]
      },
      {
        title: "AI-Powered Features",
        content: "Mood2Song uses AI to understand the user's mood and context and suggest music that matches it.",
        gridItems: [
          {
            title: "Vibe Understanding",
            icon: "Brain",
            items: [
              "Parses natural language prompts to infer mood and context",
              "Maps emotions to musical attributes (energy, valence, tempo)",
              "Generates curated seed sets for discovery"
            ]
          },
          {
            title: "Smart Suggestions",
            icon: "Brain",
            items: [
              "Suggests adjacent moods and personas to broaden taste",
              "Reranks results with feedback signals",
              "Personalizes over time (opt-in)"
            ]
          }
        ]
      }
    ],
    targetUsers: [
      {
        icon: "Music",
        text: "Music enthusiasts looking to discover new songs"
      },
      {
        icon: "Headphones",
        text: "Playlist creators seeking mood-specific tracks"
      },
      {
        icon: "BarChart",
        text: "Content creators needing soundtrack recommendations"
      }
    ]
  },
  {
    slug: "carens-cookbook",
    title: "Caren's Cookbook",
    tagline:
      "AI-Powered Recipe Management Platform - Transform how you collect, organize, and manage recipes with intelligent extraction from URLs and images.",
    description:
      "AI-Powered Recipe Management Platform that transforms how users collect, organize, and manage recipes with intelligent extraction from URLs and images, smart categorization, and personalized digital cookbook experience.",
    category: "AI Recipe Management",
    badge: {
      text: "AI Recipe Management",
      color: "bg-green-500/20 text-green-300"
    },
    statusBadges: [
      { text: "Planning Phase", color: "bg-yellow-500/10 text-yellow-400", icon: "Clock" },
      { text: "In Development", color: "bg-blue-500/10 text-blue-400" },
      { text: "Freemium", color: "bg-purple-500/10 text-purple-400" }
    ],
    image: "/carenscookbook.png",
    imageAlt: "Caren's Cookbook - AI Recipe Management",
    team: "Solo Project",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "Google Gemini",
      "Clerk",
      "Redis",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Radix UI",
      "Zod"
    ],
    keyFeatures: [
      "AI Recipe Extraction",
      "Smart Categorization",
      "Multi-Image Support",
      "Progressive Onboarding",
      "Dietary Preferences",
      "Recipe Versioning",
      "Advanced Search",
      "Mobile-First Design"
    ],
    githubLink: "https://github.com/BlakeDanielson/FinalMothersDayV2",
    liveLink: "https://carenscookbook.com",
    sections: [
      {
        title: "What is Caren's Cookbook?",
        content:
          "Caren's Cookbook is a Next.js-based web application that leverages AI to transform how users collect, organize, and manage their recipes. The platform uses advanced computer vision and natural language processing to automatically extract recipe data from multiple sources, then intelligently categorizes and organizes them in a personalized digital cookbook."
      },
      {
        title: "Technical Architecture",
        content: "Caren's Cookbook combines cutting-edge web technologies with sophisticated AI processing to deliver a seamless recipe management experience.",
        gridItems: [
          {
            title: "Frontend (Next.js 15)",
            icon: "Globe",
            items: [
              "Next.js 15 with TypeScript",
              "Clerk for secure user authentication",
              "Tailwind CSS with custom components",
              "Framer Motion for smooth animations",
              "React Query for data fetching",
              "Radix UI for accessible components"
            ]
          },
          {
            title: "Backend & Database",
            icon: "Database",
            items: [
              "PostgreSQL with Prisma ORM",
              "RESTful API routes",
              "Redis for caching",
              "Image processing pipeline",
              "Web scraping with Cheerio",
              "Zod for runtime validation"
            ]
          }
        ]
      },
      {
        title: "AI-Powered Features",
        content: "Caren's Cookbook uses AI to extract recipe data from URLs and images, smart categorize them, and provide a personalized digital cookbook experience.",
        gridItems: [
          {
            title: "Multi-Modal Recipe Extraction",
            icon: "Brain",
            items: [
              "Extract from URLs with HTML parsing",
              "Process single or multiple images (up to 5)",
              "Support for HEIC, JPEG, PNG, WebP formats",
              "Dual AI processing (OpenAI GPT-4.1-mini & Google Gemini)"
            ]
          },
          {
            title: "Smart Categorization",
            icon: "Tag",
            items: [
              "18 predefined recipe categories",
              "AI-powered auto-categorization",
              "Custom category creation",
              "Confidence scoring and source tracking"
            ]
          },
          {
            title: "Personalized Experience",
            icon: "Users",
            items: [
              "7-step progressive onboarding",
              "12 dietary preference options",
              "Skill-based customization",
              "Household size optimization"
            ]
          },
          {
            title: "Advanced Organization",
            icon: "Search",
            items: [
              "Intelligent search and filtering",
              "Recipe versioning and source tracking",
              "Favorites and bookmarking system",
              "Multiple image support per recipe"
            ]
          }
        ]
      },
      {
        title: "Core User Features",
        content: "Recipe Collection Workflow",
        items: [
          "Input Sources: Add recipes via URL, single image, or multiple images",
          "AI Processing: Choose between OpenAI or Google Gemini for extraction",
          "Smart Parsing: Advanced HTML parsing and computer vision recognition",
          "Auto-Categorization: AI assigns categories with confidence scoring",
          "Review & Edit: User validation with easy editing capabilities",
          "Organization: Intelligent filing in personalized digital cookbook",
          "Access & Share: Searchable, filterable recipe collection"
        ]
      }
    ],
    targetUsers: [
      {
        icon: "ChefHat",
        text: "Home Cooking Enthusiasts who collect recipes from multiple sources"
      },
      {
        icon: "Users",
        text: "Busy Families needing organized meal planning"
      },
      {
        icon: "Smartphone",
        text: "Digital-First Millennials & Gen Z preferring mobile experiences"
      }
    ],
    sidebarExtras: [
      {
        title: "Project Details",
        items: [
          { label: "Expected Launch", value: "Q2 2025" },
          { label: "Duration", value: "4-6 months" },
          { label: "Team Size", value: "Solo Project" }
        ]
      }
    ]
  },
  {
    slug: "mugshot-matcher",
    title: "Mug Matcher",
    tagline:
      "An interactive detective skills game that challenges players to match mugshots with their corresponding crimes.",
    description:
      "Interactive criminal profiling game that challenges players to match mugshots with their corresponding crimes. Built as a Progressive Web App with 400+ real criminal records, sophisticated scoring system, and dual UI themes for an engaging educational experience.",
    category: "Interactive Criminal Profiling Game",
    badge: {
      text: "Interactive Criminal Profiling Game",
      color: "bg-purple-500/20 text-purple-300"
    },
    image: "/mugshotmatcher.png",
    imageAlt: "Mug Matcher Game Interface",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Progressive Web App"],
    keyFeatures: [],
    githubLink: "https://github.com/BlakeDanielson/mug-matcher",
    liveLink: "https://mugshotmatcher.app",
    sections: [
      {
        title: "What is Mug Matcher?",
        content:
          "Mug Matcher is a detective-skills web game where players match mugshots to crimes. It blends visual recognition with criminal justice education and a polished PWA experience."
      },
      {
        title: "The Challenge",
        content:
          "Traditional criminal justice education and detective training often rely on theoretical knowledge without practical application. Law enforcement professionals, criminology students, and true crime enthusiasts lack engaging, interactive tools to develop their visual recognition skills and understanding of criminal behavior patterns."
      },
      {
        title: "The Solution",
        content:
          "Mug Matcher is a web-based detective skills game that challenges players to match mugshots with their corresponding crimes. Built as a Progressive Web App using Next.js 15, the game combines visual recognition challenges with criminal justice education. Players are presented with 6 mugshots and 6 crime descriptions, testing their ability to make connections based on visual cues, crime patterns, and criminal profiling knowledge."
      },
      {
        title: "Core User Features",
        content: "Mug Matcher provides an engaging and educational experience for players to test their detective skills and knowledge of criminal behavior patterns.",
        items: [
          "Intelligent Crime Matching System with 400+ real criminal records",
          "Smart crime categorization preventing similar offenses in single rounds",
          "Sophisticated scoring system considering accuracy, speed, and attempt count",
          "Real-time statistics with accuracy percentage and completion time tracking",
          "Dual UI themes: Professional ShadCN and animated Aceternity interfaces",
          "Progressive Web App with mobile-first responsive design and haptic feedback"
        ]
      },
      {
        title: "Technical Architecture",
        content: "Mug Matcher combines cutting-edge web technologies with sophisticated game mechanics.",
        gridItems: [
          {
            title: "Frontend Architecture",
            icon: "Code",
            items: [
              "Next.js 15 with React 19 and TypeScript",
              "Tailwind CSS with custom animations",
              "Radix UI with ShadCN/UI and Aceternity UI",
              "Framer Motion for smooth transitions"
            ]
          },
          {
            title: "Backend & Data",
            icon: "Database",
            items: [
              "Next.js API routes with error handling",
              "CSV-based system with Papa Parse",
              "Singleton pattern for in-memory caching",
              "Multi-layer data validation"
            ]
          }
        ]
      }
    ],
    targetUsers: [
      {
        icon: "Shield",
        text: "Law enforcement professionals seeking to sharpen visual recognition skills"
      },
      {
        icon: "Brain",
        text: "Criminology students and educators needing interactive learning tools"
      },
      {
        icon: "Gamepad2",
        text: "True crime enthusiasts and gamers who enjoy detective work and puzzles"
      }
    ]
  },
  {
    slug: "linkedin-applicant-counter",
    title: "LinkedIn Applicant Counter",
    tagline:
      "A privacy-first Chrome extension that automatically reveals the real number of applicants on LinkedIn job postings.",
    description:
      "A Chrome extension that automatically reveals the true number of applicants on LinkedIn job postings by extracting counts from API data and displaying them directly on the page.",
    category: "Chrome Extension",
    badge: {
      text: "Chrome Extension",
      color: "bg-purple-500/20 text-purple-300"
    },
    image: "/linkedin-applicant-counter.png",
    imageAlt: "LinkedIn Applicant Counter screenshot",
    techStack: ["JavaScript", "Chrome Manifest v3", "Content Scripts", "Chrome Storage", "Tailwind-esque CSS"],
    keyFeatures: [],
    githubLink: "https://github.com/BlakeDanielson/HowManyApplied",
    liveLink: null,
    sections: [
      {
        title: "What is LinkedIn Applicant Counter?",
        content:
          "A privacy-first Chrome extension that reveals the true applicant count on LinkedIn job postings by parsing data already available to your browser - no servers, no tracking."
      },
      {
        title: "The Problem",
        content:
          "LinkedIn often abstracts applicant counts (e.g., \"10+ applicants\"), making it hard to gauge true competition. Manually digging through DevTools works, but it's tedious and inconsistent across job templates."
      },
      {
        title: "The Solution",
        content:
          "The extension automates the known manual method: it observes page data and safe, allowed globals to extract applicant counts when available, then renders a small banner at the top of the job view - no servers, no tracking."
      },
      {
        title: "Core User Features",
        content: "LinkedIn Applicant Counter provides a seamless way to discover the true number of applicants on LinkedIn job postings.",
        items: [
          "Automatic detection on linkedin.com/jobs/view/* pages",
          "Accessible UI with aria-live status and clear typography",
          "SPA navigation handling; avoids duplicate banners",
          "Privacy-first: no external servers; minimal local storage"
        ]
      },
      {
        title: "Technical Architecture",
        content: "LinkedIn Applicant Counter combines cutting-edge web technologies with sophisticated data extraction techniques.",
        items: [
          "Manifest v3 content script runs at document_start and observes SPA route changes",
          "Multiple bounded strategies: DOM scripts, safe globals, and best-effort fetch when CSRF is available",
          "Toolbar badge shows last detected count; popup surfaces recent activity"
        ]
      }
    ],
    targetUsers: [
      {
        icon: "TrendingUp",
        text: "Apply strategically with real competition data"
      },
      {
        icon: "Globe",
        text: "Works wherever LinkedIn exposes counts via page data"
      },
      {
        icon: "CheckCircle",
        text: "Lightweight, fast, and unobtrusive"
      }
    ]
  },
  {
    slug: "jumpscare-generator",
    title: "JumpScare Generator",
    tagline: "A web application that lets users create custom jump scare videos with startling effects and sounds.",
    description:
      "I built this web app to help content creators easily add perfectly-timed jump scares to their videos without needing complex editing software.",
    category: "Web App",
    badge: {
      text: "Web App",
      color: "bg-purple-500/20 text-purple-300"
    },
    image: "/jumpscare-preview.png",
    imageAlt: "JumpScare Generator",
    techStack: ["React", "Next.js", "Python", "FFmpeg", "Uploadthing", "WebSockets"],
    keyFeatures: [],
    githubLink: "https://github.com/BlakeDanielson/jumpscare-generator",
    liveLink: "https://jumpscare.pro",
    sections: [
      {
        title: "What is JumpScare Generator?",
        content:
          "JumpScare Generator is a web app that lets anyone create perfectly timed jump-scare videos by combining their own clips with curated faces, effects, and sounds - no pro editing tools required."
      },
      {
        title: "The Challenge",
        content:
          "Creating effective jump scares requires precise timing, audio-visual synchronization, and technical knowledge of video editing. Most people don't have access to professional video editing software or the skills to create these effects, despite their popularity in social media pranks and content creation."
      },
      {
        title: "The Solution",
        content:
          "The JumpScare Generator is a user-friendly web application that automates the creation of customized jump scare videos. Users can upload their own content, select from a library of scare effects and sounds, and adjust timing parameters. The application handles all the complex video processing behind the scenes, delivering a ready-to-use scare video that can be downloaded or shared directly."
      },
      {
        title: "Core User Features",
        content: "JumpScare Generator provides a seamless way to create custom jump scare videos.",
        items: [
          "Intuitive drag-and-drop interface for uploading videos and images",
          "Library of pre-made scare effects, faces, and sounds",
          "Customizable timing controls for perfect scare moments",
          "Real-time preview of the final result",
          "One-click download or direct sharing to social platforms"
        ]
      },
      {
        title: "Technical Architecture",
        content: "The JumpScare Generator combines modern web technologies with powerful backend processing:",
        items: [
          "React and Next.js for a responsive, interactive frontend experience",
          "Python backend for processing video and audio manipulation",
          "FFmpeg for high-quality video compositing and effects",
          "Uploadthing for seamless file uploads and management",
          "WebSockets for real-time processing status updates"
        ]
      },
      {
        title: "AI-Powered Features",
        content: "JumpScare Generator uses AI to create custom jump scare videos.",
        gridItems: [
          {
            title: "Auto Timing Assist",
            icon: "Brain",
            items: [
              "Optional beat/onset detection to align scare",
              "Loudness normalization for consistent jumps",
              "Smart defaults for casual users"
            ]
          }
        ]
      }
    ],
    targetUsers: [
      {
        icon: "Video",
        text: "Content creators looking to add suspense to their videos"
      },
      {
        icon: "Upload",
        text: "Social media users wanting to create viral prank content"
      },
      {
        icon: "Code",
        text: "Game developers needing quick scare assets"
      }
    ]
  },
  {
    slug: "ourstories",
    title: "OurStories",
    tagline:
      "AI-Powered Personalized Children's Books Platform - Create magical storybooks where your child is the main character.",
    description:
      "I created this bedtime story generator that makes children the stars of their own stories - complete with AI-generated images that incorporate their photos. A passion project that combines storytelling with cutting-edge AI.",
    category: "AI Children's Books",
    badge: {
      text: "AI Children's Books",
      color: "bg-purple-500/20 text-purple-300"
    },
    statusBadges: [
      { text: "MVP Complete", color: "bg-green-500/10 text-green-400", icon: "CheckCircle" },
      { text: "Production Ready", color: "bg-blue-500/10 text-blue-400" },
      { text: "Freemium + Print-on-Demand", color: "bg-purple-500/10 text-purple-400" }
    ],
    image: "/forest-friends-picnic.png",
    imageAlt: "OurStories - AI-Powered Personalized Children's Books",
    techStack: [
      "Next.js 14+",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
      "OpenAI GPT-4",
      "Google Gemini",
      "Stable Diffusion",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "React Hook Form",
      "Zod",
      "UploadThing",
      "BullMQ",
      "Redis",
      "Stripe",
      "Real-ESRGAN",
      "Vercel",
      "AWS S3",
      "Sentry"
    ],
    keyFeatures: [
      "AI Story Generation",
      "Character Personalization",
      "Photo Integration",
      "Multiple Art Styles",
      "Interactive Preview",
      "Content Safety Filters",
      "Print-on-Demand",
      "E-commerce Integration"
    ],
    githubLink: "https://github.com/BlakeDanielson/OurStoriesV3",
    liveLink: null,
    demoLink: "/projects/ourstories/demo",
    sections: [
      {
        title: "What is OurStories?",
        content:
          "OurStories is a Next.js-based platform that revolutionizes children's literature by combining AI-powered story generation with personalized character creation. The platform uses advanced language models and image generation to create unique bedtime stories where children become the heroes of their own adventures, fostering a love for reading while making them feel truly seen, celebrated, and inspired."
      },
      {
        title: "Technical Architecture",
        content: "OurStories combines cutting-edge web technologies with sophisticated AI processing to deliver a seamless bedtime story experience.",
        gridItems: [
          {
            title: "Frontend (Next.js 14+)",
            icon: "Globe",
            items: [
              "Next.js 14+ with App Router",
              "TypeScript for type safety",
              "Tailwind CSS + shadcn/ui components",
              "Zustand/Redux Toolkit state management",
              "React Hook Form + Zod validation",
              "Interactive flipbook preview"
            ]
          },
          {
            title: "Backend & Database",
            icon: "Database",
            items: [
              "PostgreSQL with Prisma ORM",
              "NextAuth.js v5 authentication",
              "UploadThing file management",
              "BullMQ job queues with Redis",
              "RESTful API architecture",
              "Comprehensive error handling"
            ]
          }
        ]
      },
      {
        title: "AI-Powered Features",
        content: "OurStories uses AI to create personalized bedtime stories.",
        gridItems: [
          {
            title: "Story Generation",
            icon: "Brain",
            items: [
              "OpenAI GPT-4 for narrative creation",
              "Google Gemini alternative integration",
              "Age-appropriate content generation",
              "Personality-driven story arcs"
            ]
          },
          {
            title: "Character Generation",
            icon: "Palette",
            items: [
              "Stable Diffusion with LoRA training",
              "Consistent character appearance",
              "Photo-to-character likeness mapping",
              "Multiple illustration styles"
            ]
          },
          {
            title: "Content Safety",
            icon: "Shield",
            items: [
              "OpenAI Moderation API integration",
              "Google Cloud Vision safety filters",
              "Age-appropriate content validation",
              "Bias detection and mitigation"
            ]
          },
          {
            title: "Image Processing",
            icon: "Wand2",
            items: [
              "Real-ESRGAN upscaling",
              "Face swapping algorithms",
              "Image composition pipeline",
              "Print-ready PDF generation"
            ]
          }
        ]
      }
    ],
    targetUsers: [
      {
        icon: "Users",
        text: "Parents & Caregivers seeking magical bedtime experiences"
      },
      {
        icon: "Gift",
        text: "Gift Givers looking for unique, meaningful presents"
      },
      {
        icon: "BookOpen",
        text: "Educators & Therapists using personalized storytelling"
      }
    ],
    sidebarExtras: [
      {
        title: "Project Highlights",
        items: [
          { label: "Story Generation", value: "Sub-10 second AI processing" },
          { label: "Character Consistency", value: "98% likeness accuracy" },
          { label: "Content Safety", value: "100% age-appropriate filtering" },
          { label: "Print Quality", value: "Professional hardcover books" }
        ]
      }
    ]
  }
]

// Helper function to get project by slug
export function getProjectBySlug(slug: string): ProjectDetailData | undefined {
  return projectsData.find((project) => project.slug === slug)
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug)
}
