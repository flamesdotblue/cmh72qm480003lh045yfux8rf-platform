export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-neutral-400">© {new Date().getFullYear()} FeedSnap. All rights reserved.</p>
        <div className="text-sm text-neutral-400">
          <a className="hover:text-white" href="#features">Features</a>
          <span className="mx-3 text-neutral-700">•</span>
          <a className="hover:text-white" href="#demo">Demo</a>
          <span className="mx-3 text-neutral-700">•</span>
          <a className="hover:text-white" href="mailto:hello@feedsnap.app">Contact</a>
        </div>
      </div>
    </footer>
  );
}
