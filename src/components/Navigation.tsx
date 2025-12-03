import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import homeIcon from 'figma:asset/bb6de3fe089d32f0954aeb682da1735911b78828.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [showHomeTooltip, setShowHomeTooltip] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F5F1E8] border-b border-[#D4C5A9] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side: Home icon and social links */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => onNavigate('home')}
                onMouseEnter={() => setShowHomeTooltip(true)}
                onMouseLeave={() => setShowHomeTooltip(false)}
                className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Go to home page"
              >
                <img
                  src={homeIcon}
                  alt="Home"
                  className="w-10 h-10 object-contain"
                />
              </button>
              {showHomeTooltip && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-[#5A4F3D] text-white text-sm rounded-md whitespace-nowrap z-50 shadow-lg">
                  Go to Homepage
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#5A4F3D] rotate-45"></div>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2 border-l border-[#D4C5A9] pl-4">
              <a
                href="https://www.linkedin.com/in/jihyunkim1620/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center text-[#7A6F5D] hover:text-[#5A4F3D] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jihyunkim1620@gmail.com"
                className="w-6 h-6 flex items-center justify-center text-[#7A6F5D] hover:text-[#5A4F3D] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side: Page navigation */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-5 py-2 rounded-md transition-all ${
                  currentPage === item.id
                    ? 'bg-[#A8956B] text-white'
                    : 'text-[#5A4F3D] hover:bg-[#E8DCC8]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
