import { Download, ArrowRight, BookOpen, Briefcase, GraduationCap, Linkedin, Mail } from 'lucide-react';
import { BackToTop } from '../BackToTop';
import resumePdf from '../../assets/JiHyun_CV.pdf';

interface HomeProps {
  onNavigate: (page: string) => void;
}


export function Home({ onNavigate }: HomeProps) {
  const handleDownloadResume = () => {
    window.open(resumePdf, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-[#F5F1E8]">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-[#5A4F3D]">Welcome to My Portfolio</h1>
          <p className="text-xl text-[#7A6F5D] max-w-2xl mx-auto leading-relaxed">
            Hi! I'm Ji Hyun Kim. This is a curated space where you can explore my professional journey, 
            academic achievements, and ongoing work. Navigate through the pages to learn more about me.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <button
            onClick={() => onNavigate('about')}
            className="group bg-white p-8 rounded-lg border-2 border-[#D4C5A9] hover:border-[#A8956B] hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#A8956B] group-hover:text-white transition-colors">
              <BookOpen size={24} />
            </div>
            <h3 className="mb-2 text-[#5A4F3D]">About Me</h3>
            <p className="text-[#7A6F5D] mb-4">Learn about my background, skills, and recent activities</p>
            <div className="flex items-center gap-2 text-[#A8956B]">
              <span>Explore</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('work')}
            className="group bg-white p-8 rounded-lg border-2 border-[#D4C5A9] hover:border-[#A8956B] hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#A8956B] group-hover:text-white transition-colors">
              <Briefcase size={24} />
            </div>
            <h3 className="mb-2 text-[#5A4F3D]">Work Experience</h3>
            <p className="text-[#7A6F5D] mb-4">Discover my research work and professional experience</p>
            <div className="flex items-center gap-2 text-[#A8956B]">
              <span>Explore</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('education')}
            className="group bg-white p-8 rounded-lg border-2 border-[#D4C5A9] hover:border-[#A8956B] hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#A8956B] group-hover:text-white transition-colors">
              <GraduationCap size={24} />
            </div>
            <h3 className="mb-2 text-[#5A4F3D]">Education</h3>
            <p className="text-[#7A6F5D] mb-4">View my academic background and course projects</p>
            <div className="flex items-center gap-2 text-[#A8956B]">
              <span>Explore</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Contact & Resources Section */}
        <div className="bg-white rounded-lg border-2 border-[#A8956B] p-12">
          <h2 className="mb-4 text-[#5A4F3D] text-center">Get in Touch</h2>
          <p className="text-[#7A6F5D] mb-8 max-w-md mx-auto text-center">
            Download my resume or reach out to connect. I'm always open to discussing new opportunities and collaborations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Download Resume */}
            <button
              onClick={handleDownloadResume}
              className="flex flex-col items-center gap-3 p-6 bg-[#FAF8F3] rounded-lg border border-[#D4C5A9] hover:border-[#A8956B] hover:bg-white transition-all group"
            >
              <div className="w-14 h-14 bg-[#A8956B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download size={24} className="text-white" />
              </div>
              <div className="text-center">
                <h3 className="mb-1 text-[#5A4F3D]">Resume</h3>
                <p className="text-sm text-[#7A6F5D]">Download PDF</p>
              </div>
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jihyunkim1620/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-[#FAF8F3] rounded-lg border border-[#D4C5A9] hover:border-[#A8956B] hover:bg-white transition-all group"
            >
              <div className="w-14 h-14 bg-[#A8956B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin size={24} className="text-white" />
              </div>
              <div className="text-center">
                <h3 className="mb-1 text-[#5A4F3D]">LinkedIn</h3>
                <p className="text-sm text-[#7A6F5D]">Connect with me</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:jihyunkim1620@gmail.com"
              className="flex flex-col items-center gap-3 p-6 bg-[#FAF8F3] rounded-lg border border-[#D4C5A9] hover:border-[#A8956B] hover:bg-white transition-all group"
            >
              <div className="w-14 h-14 bg-[#A8956B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-white" />
              </div>
              <div className="text-center">
                <h3 className="mb-1 text-[#5A4F3D]">Email</h3>
                <p className="text-sm text-[#7A6F5D]">Send me a message</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
