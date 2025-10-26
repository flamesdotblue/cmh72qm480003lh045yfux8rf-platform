import HeroSplineCover from './components/HeroSplineCover';
import FeatureGrid from './components/FeatureGrid';
import DashboardQuickPeek from './components/DashboardQuickPeek';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <HeroSplineCover />
      <main className="relative z-0">
        <FeatureGrid />
        <DashboardQuickPeek />
      </main>
      <Footer />
    </div>
  );
}

export default App;
