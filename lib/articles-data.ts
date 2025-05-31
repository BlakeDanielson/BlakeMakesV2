export interface Article {
  id: string
  title: string
  url: string
  date: string
  symbol?: string
  category: string
  description: string
  featured?: boolean
  comments?: number
  rating?: 'bullish' | 'bearish' | 'neutral'
}

export const articles: Article[] = [
  {
    id: "vbr-value-based-small-cap",
    title: "VBR: The Case For Value-Based Small Cap Investments",
    url: "https://seekingalpha.com/article/4213992-vbr-the-case-for-value-based-small-cap-investments",
    date: "2018-10-24",
    symbol: "VBR",
    category: "ETF Analysis",
    description: "Analysis of Vanguard Small-Cap Value ETF and the investment case for value-based small cap strategies.",
    comments: 1,
    rating: "bullish"
  },
  {
    id: "lexaria-bioscience-dehydratech",
    title: "Lexaria Bioscience: DehydraTECH Could Transform Oral Delivery In Cannabis, Nicotine, NSAIDs, And Vitamins",
    url: "https://seekingalpha.com/article/4212437-lexaria-bioscience-dehydratech-could-transform-oral-delivery-in-cannabis-nicotine-nsaids-and",
    date: "2018-10-18",
    symbol: "LEXX",
    category: "Biotech",
    description: "Deep dive into Lexaria's revolutionary DehydraTECH technology and its potential to transform drug delivery across multiple industries.",
    comments: 67,
    rating: "bullish",
    featured: true
  },
  {
    id: "botz-automation-revolution",
    title: "BOTZ: An Investment In The Automation Revolution",
    url: "https://seekingalpha.com/article/4211941-botz-an-investment-in-the-automation-revolution",
    date: "2018-10-16",
    symbol: "BOTZ",
    category: "Robotics & AI",
    description: "Investment thesis for the Global X Robotics & Artificial Intelligence ETF and the automation megatrend.",
    comments: 12,
    rating: "bullish"
  },
  {
    id: "american-cannabis-market",
    title: "The Seemingly Forgotten American Cannabis Market",
    url: "https://seekingalpha.com/article/4211494-the-seemingly-forgotten-american-cannabis-market",
    date: "2018-10-14",
    category: "Cannabis",
    description: "Analysis of the overlooked opportunities in the American cannabis market compared to Canadian counterparts.",
    comments: 29,
    rating: "bullish"
  },
  {
    id: "canadian-beer-taxation-cannabis",
    title: "What Canadian Beer Taxation Can Tell Us About The Future Of Canadian Cannabis",
    url: "https://seekingalpha.com/article/4203232-what-canadian-beer-taxation-can-tell-us-about-the-future-of-canadian-cannabis",
    date: "2018-08-30",
    category: "Cannabis",
    description: "Editor's Pick: Using beer taxation models to predict cannabis market dynamics in Canada.",
    comments: 13,
    rating: "neutral",
    featured: true
  },
  {
    id: "tilray-share-price-unsustainable",
    title: "Tilray's Share Price Is Unsustainable",
    url: "https://seekingalpha.com/article/4202643-tilrays-share-price-is-unsustainable",
    date: "2018-08-28",
    symbol: "TLRY",
    category: "Cannabis",
    description: "Critical analysis of Tilray's valuation during the cannabis bubble of 2018.",
    comments: 86,
    rating: "bearish"
  },
  {
    id: "green-thumb-industries",
    title: "Green Thumb Industries: The Cannabis Stock No One Is Talking About",
    url: "https://seekingalpha.com/article/4201688-green-thumb-industries-the-cannabis-stock-no-one-is-talking-about",
    date: "2018-08-24",
    symbol: "GTBIF",
    category: "Cannabis",
    description: "Editor's Pick: Uncovering the hidden gem in the cannabis sector with strong fundamentals and growth potential.",
    comments: 44,
    rating: "bullish",
    featured: true
  },
  {
    id: "cannaguide-aphria-dcf",
    title: "The CannaGuide: Complete Cannabis Coverage - Aphria Part 2 - Discounted Cash Flow Analysis W/ Download",
    url: "https://seekingalpha.com/article/4201508-the-cannaguide-complete-cannabis-coverage-aphria-part-2-discounted-cash-flow-analysis-w",
    date: "2018-08-23",
    symbol: "TLRY",
    category: "Cannabis",
    description: "Comprehensive DCF analysis of Aphria with downloadable financial model.",
    comments: 23,
    rating: "bullish"
  },
  {
    id: "cannaguide-aphria-operations",
    title: "The CannaGuide: Complete Cannabis Coverage - Aphria Part 1 - Full Operations, Partnerships, And Investments Overview",
    url: "https://seekingalpha.com/article/4201496-the-cannaguide-complete-cannabis-coverage-aphria-part-1-full-operations-partnerships-and",
    date: "2018-08-23",
    symbol: "TLRY",
    category: "Cannabis",
    description: "Detailed operational analysis of Aphria's business model, partnerships, and investment strategy.",
    comments: 41,
    rating: "bullish"
  },
  {
    id: "shotspotter-vs-patriot-one",
    title: "Who Offers The Better Threat-Detection System: ShotSpotter Or Patriot One Technologies?",
    url: "https://seekingalpha.com/article/4198877-who-offers-the-better-threat-detection-system-shotspotter-or-patriot-one-technologies",
    date: "2018-08-14",
    symbol: "SSTI",
    category: "Security Tech",
    description: "Comparative analysis of two leading threat detection technologies and their market potential.",
    comments: 94,
    rating: "neutral"
  },
  {
    id: "lockheed-boeing-leonardo-contract",
    title: "Lockheed Martin, Boeing And Leonardo In Massive Contract Showdown",
    url: "https://seekingalpha.com/article/4197046-lockheed-martin-boeing-and-leonardo-in-massive-contract-showdown",
    date: "2018-08-09",
    category: "Defense",
    description: "Analysis of major defense contractors competing for significant government contracts.",
    comments: 41,
    rating: "neutral"
  },
  {
    id: "patriot-one-technologies",
    title: "Patriot One Technologies: Developing Technologies To Reduce Mass Shootings",
    url: "https://seekingalpha.com/article/4196675-patriot-one-technologies-developing-technologies-to-reduce-mass-shootings",
    date: "2018-08-08",
    symbol: "XTRAF",
    category: "Security Tech",
    description: "Investment thesis for Patriot One's innovative threat detection technology.",
    comments: 12,
    rating: "bullish"
  },
  {
    id: "general-dynamics-naval-it",
    title: "General Dynamics: Naval And Military IT Dominance",
    url: "https://seekingalpha.com/article/4195873-general-dynamics-naval-and-military-it-dominance",
    date: "2018-08-07",
    symbol: "GD",
    category: "Defense",
    description: "Analysis of General Dynamics' position in naval and military IT markets.",
    comments: 5,
    rating: "bullish"
  },
  {
    id: "huya-first-quarter",
    title: "Huya's First U.S. Quarter: Checking Up On The 'Twitch Of China'",
    url: "https://seekingalpha.com/article/4193613-huyas-first-u-s-quarter-checking-up-on-the-twitch-of-china",
    date: "2018-08-02",
    symbol: "HUYA",
    category: "Gaming & Streaming",
    description: "Earnings analysis of Huya's debut quarter as a public company in the U.S. markets.",
    comments: 11,
    rating: "bullish"
  },
  {
    id: "cannabis-comparisons-tilray",
    title: "Cannabis Comparisons: Tilray Vs. Competition",
    url: "https://seekingalpha.com/article/4189460-cannabis-comparisons-tilray-vs-competition",
    date: "2018-07-24",
    symbol: "TLRY",
    category: "Cannabis",
    description: "Comparative analysis of Tilray against other major cannabis companies.",
    comments: 26,
    rating: "neutral"
  },
  {
    id: "green-organic-dutchman-ipo",
    title: "New Cannabis IPO: How Does The Green Organic Dutchman Stack Up To Its Competition",
    url: "https://seekingalpha.com/article/4189251-new-cannabis-ipo-how-does-the-green-organic-dutchman-stack-up-to-its-competition",
    date: "2018-07-23",
    symbol: "BZAMF",
    category: "Cannabis",
    description: "IPO analysis of The Green Organic Dutchman and competitive positioning.",
    comments: 23,
    rating: "neutral"
  },
  {
    id: "canopy-hiku-acquisition",
    title: "Canopy Acquires Hiku Brands - A Massive Gamble On The Smoker Lifestyle",
    url: "https://seekingalpha.com/article/4186980-canopy-acquires-hiku-brands-a-massive-gamble-on-the-smoker-lifestyle",
    date: "2018-07-12",
    symbol: "CGC",
    category: "Cannabis",
    description: "Analysis of Canopy Growth's acquisition of Hiku Brands and lifestyle branding strategy.",
    comments: 55,
    rating: "neutral"
  },
  {
    id: "amazon-esports-catalyst",
    title: "Will eSports Be The Next Major Catalyst For Amazon?",
    url: "https://seekingalpha.com/article/4185109-will-esports-be-the-next-major-catalyst-for-amazon",
    date: "2018-07-02",
    symbol: "AMZN",
    category: "Gaming & Streaming",
    description: "Investment thesis on Amazon's potential in the rapidly growing eSports market.",
    comments: 22,
    rating: "bullish"
  },
  {
    id: "cannabis-industry-biologicals",
    title: "Understanding The Cannabis Industry - Gain On Biologicals",
    url: "https://seekingalpha.com/article/4185105-understanding-the-cannabis-industry-gain-on-biologicals",
    date: "2018-07-02",
    symbol: "CGC",
    category: "Cannabis",
    description: "Analyst's Pick: Deep dive into the biological aspects of cannabis cultivation and production.",
    comments: 24,
    rating: "bullish"
  },
  {
    id: "esports-vs-traditional-sports",
    title: "Video Games Are Taking Over - Will eSports Become Larger Than Sports?",
    url: "https://seekingalpha.com/article/4184342-video-games-are-taking-over-will-esports-become-larger-than-sports",
    date: "2018-06-27",
    category: "Gaming & Streaming",
    description: "Market analysis of the eSports industry and its potential to surpass traditional sports.",
    comments: 18,
    rating: "bullish"
  }
]

export const featuredArticles = articles.filter(article => article.featured)

export const getArticlesByCategory = (category: string) => {
  return articles.filter(article => article.category === category)
}

export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id)
}

export const categories = Array.from(new Set(articles.map(article => article.category))) 