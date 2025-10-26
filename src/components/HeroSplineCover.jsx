import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroSplineCover() {
  const handleScroll = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/20 to-neutral-950/85" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-neutral-900/60 px-3 py-1 text-xs text-emerald-300 backdrop-blur">
          <Rocket size={14} className="text-emerald-400" />
          <span>Collect. Analyze. Improve.</span>
        </div>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          FeedSnap helps you turn real user feedback into product wins
        </h1>
        <p className="mt-5 max-w-2xl text-sm text-neutral-300 sm:text-base">
          A MERN-based platform with JWT auth and Firebase integration. Embed feedback widgets on your site and manage insights in one collaborative dashboard.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-emerald-400"
          >
            Live demo
            <ArrowRight size={16} />
          </a>
          <button
            onClick={handleScroll}
            className="rounded-md border border-white/10 bg-neutral-900 px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
          >
            Explore features
          </button>
        </div>
      </div>
    </section>
  );
}
