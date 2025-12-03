import { ArrowLeft, FolderOpen, TrendingUp, Users, Zap } from 'lucide-react';
import { BackToTop } from '../BackToTop';

interface WorkPortfolioProps {
  onNavigate: (page: string) => void;
}

export function WorkPortfolio({ onNavigate }: WorkPortfolioProps) {
  const portfolioProjects = [
    {
      id: 1,
      title: 'Project Name 1',
      role: 'Senior Data Analyst',
      period: '2022-2023',
      icon: TrendingUp,
      description: 'Comprehensive description of the project, including business objectives, challenges faced, and your specific contributions. This section will highlight the impact and value you brought to the organization.',
      achievements: [
        'Specific achievement or metric (e.g., "Improved efficiency by 40%")',
        'Another key accomplishment or deliverable',
        'Impact on business outcomes or stakeholders'
      ],
      technologies: ['Python', 'SQL', 'Tableau', 'AWS'],
      outcomes: 'Brief summary of the project outcomes and business impact. Quantifiable results are particularly valuable here.'
    },
    {
      id: 2,
      title: 'Project Name 2',
      role: 'Data Analyst',
      period: '2021-2022',
      icon: Users,
      description: 'Comprehensive description of the project, including business objectives, challenges faced, and your specific contributions. This project showcased collaboration across multiple teams.',
      achievements: [
        'Specific achievement or metric',
        'Another key accomplishment or deliverable',
        'Stakeholder feedback or recognition'
      ],
      technologies: ['R', 'SQL', 'Power BI', 'Excel'],
      outcomes: 'Brief summary of the project outcomes and business impact.'
    },
    {
      id: 3,
      title: 'Project Name 3',
      role: 'Junior Data Analyst',
      period: '2019-2020',
      icon: Zap,
      description: 'Comprehensive description of the project, including business objectives, challenges faced, and your specific contributions. This early project demonstrated your analytical foundation.',
      achievements: [
        'Specific achievement or metric',
        'Learning outcomes and skills developed',
        'Contribution to team goals'
      ],
      technologies: ['Python', 'SQL', 'Excel', 'Pandas'],
      outcomes: 'Brief summary of the project outcomes and your professional growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <div className="mb-8">
          <button
            onClick={() => onNavigate('work')}
            className="flex items-center gap-2 text-[#A8956B] hover:text-[#8A7859] transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Work Experience
          </button>
          <h1 className="text-[#5A4F3D] mb-2">Work Portfolio</h1>
          <p className="text-[#7A6F5D]">
            Detailed showcase of projects and accomplishments from [Company Name] (2019-2023)
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-[#A8956B] text-white rounded-lg p-8 mb-12 text-center">
          <FolderOpen size={48} className="mx-auto mb-4 opacity-90" />
          <h2 className="mb-3">Portfolio Coming Soon</h2>
          <p className="max-w-2xl mx-auto">
            I'm currently compiling detailed case studies and project examples from my work experience. 
            This page will showcase specific projects, methodologies, outcomes, and the impact of my work. 
            Check back soon for comprehensive portfolio pieces!
          </p>
        </div>

        {/* Portfolio Projects (Placeholder) */}
        <div className="space-y-8">
          {portfolioProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-lg border border-[#D4C5A9] p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-[#A8956B]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-[#5A4F3D] mb-2">{project.title}</h2>
                    <div className="flex items-center gap-3 text-sm text-[#A8956B]">
                      <span>{project.role}</span>
                      <span>•</span>
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#7A6F5D] leading-relaxed mb-6 italic">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h3 className="text-[#5A4F3D] mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#7A6F5D]">
                        <span className="text-[#A8956B] mt-1">✓</span>
                        <span className="italic">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm text-[#5A4F3D] mb-2">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#FAF8F3] text-[#5A4F3D] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="bg-[#FAF8F3] rounded-lg p-4 border-l-4 border-[#A8956B]">
                  <h4 className="text-sm text-[#5A4F3D] mb-2">Project Outcomes</h4>
                  <p className="text-[#7A6F5D] text-sm italic">{project.outcomes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
