import { BarChart3, MessageSquare, Settings, Sparkles, Copy } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function DashboardQuickPeek() {
  const [copied, setCopied] = useState(false);
  const snippet = useMemo(() => `<!-- FeedSnap Widget -->\n<script>\n  (function(){\n    window.FeedSnap=window.FeedSnap||{};\n    FeedSnap.init({\n      websiteId: 'YOUR_WEBSITE_ID',\n      tier: 'tier-2',\n      theme: { primary: '#10b981', mode: 'dark', position: 'bottom-right' }\n    });\n  })();\n</script>`, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="demo" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">A quick peek at the dashboard</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">
            Manage sites, generate scripts, analyze trends, and triage feedback with AI summaries.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-white/10 bg-neutral-950/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-emerald-500/20 bg-neutral-900">
                  <BarChart3 className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-white">Analytics snapshot</h3>
              </div>
              <span className="text-xs text-neutral-400">Last 30 days</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Total Feedback', value: '1,284' },
                { label: 'Avg. Rating', value: '4.6/5' },
                { label: 'Response Rate', value: '32%' },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-white/10 bg-neutral-900/60 p-4">
                  <div className="text-xs text-neutral-400">{m.label}</div>
                  <div className="mt-1 text-lg font-semibold text-white">{m.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 h-40 rounded-lg border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-3">
              <div className="h-full w-full rounded-md bg-[linear-gradient(180deg,rgba(16,185,129,0.2),rgba(0,0,0,0))]" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-neutral-950/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-emerald-500/20 bg-neutral-900">
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-white">Recent feedback</h3>
              </div>
              <button className="text-sm text-emerald-400 hover:text-emerald-300">View all</button>
            </div>
            <ul className="space-y-3">
              {[
                { user: 'alex@example.com', text: 'The new checkout is smooth and fast!', rating: 5 },
                { user: 'lee@example.com', text: 'Would love a dark mode on the docs.', rating: 4 },
                { user: 'sam@example.com', text: 'Chatbot clarifies pricing well.', rating: 5 },
              ].map((f, i) => (
                <li key={i} className="rounded-lg border border-white/10 bg-neutral-900/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-300">{f.user}</span>
                    <span className="text-xs text-emerald-400">{Array.from({ length: f.rating }).map(() => '★').join('')}</span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-200">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-neutral-950/80 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-emerald-500/20 bg-neutral-900">
                <Settings className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-white">Script generator</h3>
            </div>
            <div className="rounded-md border border-white/10 bg-neutral-900/70 p-3 text-xs text-neutral-200">
              <pre className="whitespace-pre-wrap break-all">{snippet}</pre>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <button onClick={copyToClipboard} className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-neutral-900 transition hover:bg-emerald-400">
                <Copy size={16} />
                {copied ? 'Copied!' : 'Copy snippet'}
              </button>
              <span className="inline-flex items-center gap-1 text-xs text-neutral-400">
                <Sparkles size={14} className="text-emerald-400" />
                Tier 2 supports AI chatbot
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-neutral-950/80 p-5">
            <h3 className="mb-2 text-white">RBAC overview</h3>
            <p className="text-sm text-neutral-300">
              Admins can invite members to individual websites. The WebData model stores owner and members relations in MongoDB.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>• Admin: full access to sites, analytics, and member management</li>
              <li>• Member: scoped access to assigned websites</li>
              <li>• Secure: JWT-backed sessions with Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
