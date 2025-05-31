"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, MessageCircle, TrendingUp, TrendingDown, Minus, Search, Filter, Crown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { articles, categories } from "@/lib/articles-data"

const getRatingIcon = (rating: string) => {
  switch (rating) {
    case "bullish":
      return <TrendingUp className="h-4 w-4 text-green-500" />
    case "bearish":
      return <TrendingDown className="h-4 w-4 text-red-500" />
    default:
      return <Minus className="h-4 w-4 text-yellow-500" />
  }
}

const getRatingColor = (rating: string) => {
  switch (rating) {
    case "bullish":
      return "text-green-400"
    case "bearish":
      return "text-red-400"
    default:
      return "text-yellow-400"
  }
}

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedRating, setSelectedRating] = useState("All")
  const [showEditorsPickOnly, setShowEditorsPickOnly] = useState(false)

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (article.symbol && article.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
      const matchesRating = selectedRating === "All" || article.rating === selectedRating
      const matchesEditorsPick = !showEditorsPickOnly || article.editorsPick

      return matchesSearch && matchesCategory && matchesRating && matchesEditorsPick
    })
  }, [searchTerm, selectedCategory, selectedRating, showEditorsPickOnly])

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <MainNav />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-purple-950/30 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#000000,transparent)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <Badge className="mb-4 bg-purple-500/20 text-purple-300">Financial Analysis</Badge>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Investment <span className="text-purple-400">Research & Analysis</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-zinc-300 leading-relaxed">
                A collection of my financial analysis and investment research from Seeking Alpha, 
                covering emerging markets, cannabis, technology, and defense sectors.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="font-semibold text-purple-400">{articles.length}</span>
                  <span>Published Articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="font-semibold text-purple-400">920</span>
                  <span>Followers on Seeking Alpha</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="border-b border-zinc-800 bg-zinc-900/50 py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <Input
                  placeholder="Search articles, symbols, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-zinc-400" />
                  <span className="text-sm text-zinc-400">Filter by:</span>
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-1 text-sm text-white"
                >
                  <option value="All">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Rating Filter */}
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-1 text-sm text-white"
                >
                  <option value="All">All Ratings</option>
                  <option value="bullish">Bullish</option>
                  <option value="bearish">Bearish</option>
                  <option value="neutral">Neutral</option>
                </select>

                {/* Editor's Pick Filter */}
                <Button
                  variant={showEditorsPickOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowEditorsPickOnly(!showEditorsPickOnly)}
                  className={showEditorsPickOnly 
                    ? "bg-yellow-600 hover:bg-yellow-700 text-white" 
                    : "border-zinc-700 text-white hover:bg-zinc-800"
                  }
                >
                  <Crown className="h-3 w-3 mr-1" />
                  Editor's Picks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="flex-1 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-zinc-400 text-lg">No articles found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSelectedRating("All")
                    setShowEditorsPickOnly(false)
                  }}
                  variant="outline"
                  className="mt-4 border-zinc-700 text-white hover:bg-zinc-800"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <p className="text-zinc-400">
                    Showing {filteredArticles.length} of {articles.length} articles
                  </p>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5"
                    >
                      <div className="p-4 sm:p-6">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-purple-500/20 text-purple-300 text-xs">
                              {article.category}
                            </Badge>
                            {article.editorsPick && (
                              <div className="flex items-center gap-1">
                                <Crown className="h-3 w-3 text-yellow-400" />
                                <span className="text-xs font-medium text-yellow-300">Editor's Pick</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            {getRatingIcon(article.rating || "neutral")}
                            <span className={`text-xs font-medium ${getRatingColor(article.rating || "neutral")}`}>
                              {article.rating?.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <h3 className="mb-3 text-lg sm:text-xl font-bold text-white line-clamp-2 group-hover:text-purple-300 transition-colors">
                          {article.title}
                        </h3>

                        <p className="mb-4 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                          {article.description}
                        </p>

                        <div className="mb-4 flex items-center justify-between text-xs text-zinc-500">
                          <div className="flex items-center gap-4">
                            {article.symbol && (
                              <span className="font-mono font-semibold text-purple-400">
                                ${article.symbol}
                              </span>
                            )}
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                          {article.comments && (
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{article.comments}</span>
                            </div>
                          )}
                        </div>

                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs sm:text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          Read on Seeking Alpha
                          <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="border-t border-zinc-800 bg-gradient-to-br from-zinc-900 to-purple-950/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Interested in Financial Analysis?
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              These articles represent my analytical approach to investment research and market analysis. 
              I bring the same rigor and insight to product strategy and business development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                  Let&apos;s Discuss Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://seekingalpha.com/author/deltabot-capital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 w-full sm:w-auto">
                  Follow on Seeking Alpha
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
} 