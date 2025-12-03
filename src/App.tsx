import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Work } from './components/pages/Work';
import { Education } from './components/pages/Education';
import { BlogList } from './components/pages/BlogList';
import { Projects } from './components/pages/Projects';
import { ResearchPortfolio } from './components/pages/ResearchPortfolio';
import { WorkPortfolio } from './components/pages/WorkPortfolio';
import { EwhaActivities } from './components/pages/EwhaActivities';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'work':
        return <Work onNavigate={handleNavigate} />;
      case 'education':
        return <Education onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogList onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects onNavigate={handleNavigate} />;
      case 'research-portfolio':
        return <ResearchPortfolio onNavigate={handleNavigate} />;
      case 'work-portfolio':
        return <WorkPortfolio onNavigate={handleNavigate} />;
      case 'ewha-activities':
        return <EwhaActivities onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
    </div>
  );
}
