import { BarChart3, MessageSquare, Bot, ShieldCheck, Users, Cog } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Feedback Widgets',
    desc: "Tier 1 rating + comment, or Tier 2 with AI chatbot powered by your site's context.",
  },
  {
    icon: Cog,
    title: 'Script Generator',
    desc: 'Customize colors, modes, and position. Copy-and-paste JS snippet with live preview.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Trends, rating breakdowns, and filters for date, website, and score.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'RBAC with admins and members. Share specific sites via MongoDB relations.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    desc: 'JWT authentication with Firebase integration for safe, reliable sessions.',
  },
  {
    icon: Bot,
    title: 'AI Summaries',
    desc: 'Auto-summarize feedback for Web Dev, Marketing, and other teams.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Built for modern product teams</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">
            Everything you need to collect actionable insights and turn them into measurable impact.
          </p>
        </div>
        <a
          href="#demo"
          className="rounded-md border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white transition hover:bg-neutral-800"
        >
          View interactive demo
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-5 transition hover:shadow-[0_0_0_1px_rgba(16,185,129,0.3)]"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-emerald-500/20 bg-neutral-900">
              <Icon className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-neutral-300">{desc}</p>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition duration-300 group-hover:bottom-0 group-hover:right-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
