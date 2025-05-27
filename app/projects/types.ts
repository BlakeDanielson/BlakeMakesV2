export interface Project {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  techStack: string[]
  link: string
  githubLink: string | null
  liveLink: string | null
  featured: boolean
  icon: React.ReactNode
  status: "Live" | "In Development" | "Archived"
  pricing: "Free" | "Freemium" | "Premium"
  completionDate: string | null
  duration: string
}

export interface CategoryTheme {
  color: string
  bgColor: string
  textColor: string
  borderColor: string
}

export interface StatusInfo {
  color: string
  bgColor: string
  icon: React.ReactNode
} 