"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, MessageCircle, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { featuredArticles } from "@/lib/articles-data"

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

export function FeaturedArticles() {
  return (
    <div className="border-t border-zinc-800 bg-gradient-to-br from-zinc-900 to-purple-950/20 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-12 text-center">
            <Badge className="mb-2 bg-purple-500/20 text-purple-300 text-xs sm:text-sm">Featured Articles</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4 sm:px-0">Financial Analysis & Insights</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 px-4 sm:px-0 leading-relaxed">
              Top-performing articles from my time as a financial analyst on Seeking Alpha, covering cannabis, tech, and emerging markets
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="p-4 sm:p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge className="bg-purple-500/20 text-purple-300 text-xs">
                      {article.category}
                    </Badge>
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

          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/articles">
              <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto text-sm sm:text-base">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 