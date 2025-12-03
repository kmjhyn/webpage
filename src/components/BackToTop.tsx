import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center py-12">
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 px-6 py-3 bg-[#A8956B] text-white rounded-full hover:bg-[#8A7859] transition-colors"
      >
        <ArrowUp size={20} />
        Back to Top
      </button>
    </div>
  );
}
