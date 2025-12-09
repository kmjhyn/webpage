import { Download, ExternalLink } from 'lucide-react';
import { BackToTop } from '../BackToTop';
import profilePic from 'figma:asset/51a15940ead1d1708176fb3f5cc3e07d02ff5b7e.png';
import resumePdf from '../../assets/JiHyun_CV.pdf';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  // const handleDownloadResume = () => {
  //   alert('Resume download would start here. Please link your actual resume file.');
  // };
  const handleDownloadResume = () => {
    window.open(resumePdf, '_blank');
  };

  const technicalSkills = [
    'Python', 'SQL', 'Java',
    'Machine Learning', 'Data Analysis', 'Statistics',
    'TensorFlow', 'PyTorch', 'Data Visualization',
    'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'
  ];

  const softSkills = [
    'Research & Analysis', 'Problem Solving', 'Communication',
    'Team Collaboration', 'Project Management', 'Critical Thinking',
    'Adaptability', 'Presentation Skills'
  ];

  const pinnedPosts = [
    {
      id: 1,
      title: 'Research Update: Participatory Design Workshop',
      date: 'Nov 24, 2025',
      excerpt: 'Exciting progress and experience in my current research project! While I cannot share specifics yet, planning and executing...'
    // },
    // {
    //   id: 2,
    //   title: 'Travel Reflection: Autumn in Virginia',
    //   date: 'October 20, 2024',
    //   excerpt: 'Fall colors in Charlottesville have been absolutely stunning this year. I took some time to explore the Blue Ridge Mountains...'
    // },
    // {
    //   id: 3,
    //   title: 'Research Update: New Developments',
    //   date: 'October 10, 2024',
    //   excerpt: 'Exciting progress in my current research project! While I cannot share specifics yet, the preliminary results are promising...'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Profile Section */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={profilePic}
              alt="Ji Hyun Kim"
              className="w-32 h-32 rounded-full object-cover object-top border-4 border-[#E8DCC8]"
            />
            
            <div className="flex-1">
              <h1 className="mb-4 text-[#5A4F3D]">Ji Hyun Kim</h1>
              <p className="text-[#7A6F5D] leading-relaxed mb-6">
                I am Ji Hyun Kim, a Research Assistant in the 
                <a
                  href="https://hai-lab-uva.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5A4F3D] underline hover:text-[#8A7859] ml-1 bg-[#F2EAD8] px-1 rounded"
                >
                  Human-AI Technology Lab 
                </a>
                at the University of Virginia.
                I work at the intersection of personal health informatics, mobile sensing, and human-centered computing.
                I am interested in how everyday behaviors and digital traces can be translated into meaningful insights 
                and used to design technologies that support well-being. My recent work includes studying co-walking behavior, 
                analyzing digital footprints, and creating user-centered tools and prototypes that help people better understand 
                their daily experience. 
              </p>
              
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A8956B] text-white rounded-md hover:bg-[#8A7859] transition-colors"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="bg-white rounded-lg border border-[#D4C5A9] p-8">
            <h2 className="mb-6 text-[#5A4F3D]">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#E8DCC8] text-[#5A4F3D] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-lg border border-[#D4C5A9] p-8">
            <h2 className="mb-6 text-[#5A4F3D]">Soft Skills</h2>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#E8DCC8] text-[#5A4F3D] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities / Blog Section */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#5A4F3D]">Recent Activities</h2>
            <button
              onClick={() => onNavigate('blog')}
              className="flex items-center gap-2 px-4 py-2 text-[#A8956B] hover:bg-[#FAF8F3] rounded-md transition-colors"
            >
              View All Posts
              <ExternalLink size={16} />
            </button>
          </div>

          <div className="space-y-6">
            {pinnedPosts.map((post) => (
              <div
                key={post.id}
                className="border-l-4 border-[#A8956B] pl-6 py-2"
              >
                <h3 className="mb-2 text-[#5A4F3D]">{post.title}</h3>
                <p className="text-sm text-[#A8956B] mb-2">{post.date}</p>
                <p className="text-[#7A6F5D]">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
