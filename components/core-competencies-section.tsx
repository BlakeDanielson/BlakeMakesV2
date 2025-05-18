import { Puzzle, Users2, Zap, Brain } from "lucide-react"

export function CoreCompetenciesSection() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-900/20 to-zinc-900 border border-purple-500/20 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Brain className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Technical Translator</h4>
            <p className="text-zinc-300 mb-4">
              I bridge the gap between technical complexity and business value, making the invisible visible:
            </p>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start gap-2">
                <Puzzle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Transforming complex data structures into intuitive dashboards that drive decision-making</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Automating repetitive processes to free up human creativity and strategic thinking</span>
              </li>
              <li className="flex items-start gap-2">
                <Users2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Communicating technical concepts in language that resonates with every stakeholder</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800/50 border border-zinc-700 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Users2 className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Collaborative Catalyst</h4>
            <p className="text-zinc-300">
              My superpower is creating harmony between diverse teams and perspectives. I thrive in environments where
              success depends on bringing together technical expertise, business acumen, and human psychology.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-zinc-800/70 rounded-lg p-3">
                <p className="text-2xl font-bold text-purple-400">15+</p>
                <p className="text-xs text-zinc-400">Cross-functional projects</p>
              </div>
              <div className="bg-zinc-800/70 rounded-lg p-3">
                <p className="text-2xl font-bold text-purple-400">8</p>
                <p className="text-xs text-zinc-400">Departments aligned</p>
              </div>
              <div className="bg-zinc-800/70 rounded-lg p-3">
                <p className="text-2xl font-bold text-purple-400">100%</p>
                <p className="text-xs text-zinc-400">On-time delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
