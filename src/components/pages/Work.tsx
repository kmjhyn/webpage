import { Microscope, Building2, ExternalLink } from 'lucide-react';
import { BackToTop } from '../BackToTop';

interface WorkProps {
  onNavigate: (page: string) => void;
}

export function Work({ onNavigate }: WorkProps) {
  const researchSkills = [
    'Machine Learning',
    'Python',
    'Data Analysis',
    'Statistical Modeling',
    'Research Methodology',
    'Academic Writing',
    'Experimental Design'
  ];

  const workSkills = [
    'Data Visualization',
    'Tableau',
    'Qualtrics',
    'Microsoft Excel',
    'Microsoft Powerpoint',
    'Customer Experience',
    'Marketing Research',
    'Project Management',
    'Stakeholder Communication',
    'Teamwork'
  ];

  const previousExperiences = [
    {
      title: 'Sr. Research Executive',
      dates: 'April 2023 - May 2023',
      description: 'Led UX investigations for a global electronics company by analyzing user behavior across websites, apps, and chat channels to inform product decisions and guide design enhancements.'
    },
    {
      title: 'Research Executive',
      dates: 'Mar 2021 - April 2023',
      description: 'Conducted end-to-end customer experience research across electronics, automotive, and hospitality industries, designing surveys and interviews, analyzing multi-country data, and translating customer feedback into clear insights and UX or service improvement opportunities.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Current Research Section */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center">
              <Microscope size={24} className="text-[#A8956B]" />
            </div>
            <div>
              <h1 className="text-[#5A4F3D]">Human-AI Lab, University of Virginia</h1>
              <p className="text-[#A8956B]">Research Assistant</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-[#5A4F3D]">About the Lab</h3>
              <p className="text-[#7A6F5D] leading-relaxed">
                I am currently working as a Research Assistant at the Human-AI Lab under the supervision of Professor Afsaneh Doryab. 
                Our lab focuses on research in human-centered computing, personal health informatics, and mobile sensing, exploring innovative approaches to understanding everyday behaviors and leveraging digital traces to design technologies that support well-being. 
                The interdisciplinary nature of our work brings together expertise from multiple fields to address complex challenges.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-[#5A4F3D]">Current Project</h3>
              <p className="text-[#7A6F5D] leading-relaxed mb-4">
                My primary research project investigates co-walk behavior, social connectedness, and activity patterns among university students.
                While the specific details remain confidential as the work is in its early stages, the project aims to develop novel methodologies 
                for designing and evaluating technologies that encourage meaningful social interaction and support physical well-being. 
                I am responsible for designing studies, developing surveys and app based measurement tools, analyzing behavioral and digital trace data, 
                and coordinating multi-phase user studies, working closely with a collaborative team of researchers.
              </p>
              {/* <p className="text-[#7A6F5D] leading-relaxed">
                The research involves comprehensive data analysis, experimental design, and the development of innovative 
                solutions to [problem area]. Our preliminary findings suggest promising directions for future work in this domain.
              </p> */}
            </div>

            <div className="bg-[#FAF8F3] rounded-lg p-6 border-l-4 border-[#A8956B]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="mb-2 text-[#5A4F3D]">Publications & Projects</h4>
                  <p className="text-[#7A6F5D] italic">
                    Publications coming soon. Please check back for updates on our research findings.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('research-portfolio')}
                  className="flex items-center gap-2 px-4 py-2 text-[#A8956B] hover:bg-white rounded-md transition-colors whitespace-nowrap"
                >
                  View Details
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>

            {/* Skills Used */}
            <div>
              <h4 className="mb-3 text-[#5A4F3D]">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {researchSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#E8DCC8] text-[#5A4F3D] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Previous Work Experience Section */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center">
              <Building2 size={24} className="text-[#A8956B]" />
            </div>
            <h2 className="text-[#5A4F3D]">Previous Work Experience</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-[#5A4F3D] mb-2">[Ipsos Korea]</h3>
            <p className="text-[#A8956B]">Mar 2021 - May 2023</p>
          </div>

          <div className="space-y-8 mb-8">
            {previousExperiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-[#E8DCC8]">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#A8956B] rounded-full border-4 border-[#FAF8F3]"></div>
                <div>
                  <h4 className="mb-1 text-[#5A4F3D]">{exp.title}</h4>
                  <p className="text-sm text-[#A8956B] mb-3">{exp.dates}</p>
                  <p className="text-[#7A6F5D] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Link */}
          <div className="bg-[#FAF8F3] rounded-lg p-6 border-l-4 border-[#A8956B] mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="mb-2 text-[#5A4F3D]">Work Portfolio</h4>
                <p className="text-[#7A6F5D]">
                  Detailed examples of projects and accomplishments from my time at Ipsos Korea will be updated soon.
                </p>
              </div>
              <button
                onClick={() => onNavigate('work-portfolio')}
                className="flex items-center gap-2 px-4 py-2 bg-[#A8956B] text-white rounded-md hover:bg-[#8A7859] transition-colors whitespace-nowrap"
              >
                View Portfolio
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Skills Used */}
          <div>
            <h4 className="mb-3 text-[#5A4F3D]">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {workSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#E8DCC8] text-[#5A4F3D] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
