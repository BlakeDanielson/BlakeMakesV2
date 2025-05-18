import { DollarSign, Clock, Award, BarChart3 } from "lucide-react"

export function ImpactMetricsSection() {
  return (
    <div className="space-y-6">
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <BarChart3 className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Measurable Impact</h4>
            <p className="text-zinc-300 mb-4">
              Delivered tangible business value through data-driven solutions that speak for themselves:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <DollarSign className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Cost Reduction</p>
                  <p className="text-lg font-semibold text-white">30%+ Savings</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Time Efficiency</p>
                  <p className="text-lg font-semibold text-white">5x Faster Workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Award className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Strategic Excellence</h4>
            <p className="text-zinc-300">
              I transform complex technical challenges into strategic advantages by combining analytical rigor with
              practical implementation. My solutions don't just solve immediate problems—they create scalable frameworks
              that continue delivering value as your business evolves.
            </p>
            <div className="mt-4 p-3 border border-zinc-700/50 rounded-lg bg-zinc-800/30">
              <p className="text-sm italic text-zinc-300">
                "Blake's database optimization project reduced our reporting time from days to minutes while cutting our
                cloud costs by 40%. The ROI was immediate and substantial."
              </p>
              <p className="text-xs text-zinc-500 mt-2">— Former Director of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
