import { ArrowLeft, FolderOpen, TrendingUp, Users, Zap } from 'lucide-react';
import { BackToTop } from '../BackToTop';

interface WorkPortfolioProps {
  onNavigate: (page: string) => void;
}

export function WorkPortfolio({ onNavigate }: WorkPortfolioProps) {
  const portfolioProjects = [
    {
      id: 1,
      title: 'Global Electronics Service Experience Study',
      role: 'Senior Research Executive',
      period: '2023',
      icon: TrendingUp,
      description: 'Led a large scale global research across 50+ countries in the consumer electronics and home appliance sector, examining customer satisfaction with repair services through both qualitative and quantitative methods. Contributed to UX-focused in-person research in Europe by preparing moderator guidelines, outlining study framework, observing user sessions, and synthesizing insights into client-facing deliverables.',
      achievements: [
        'Designed and refined qualitative research guidelines used across multiple regions',
        'Conducted on-site UX observation sessions and produced behavioral insight summaries',
        'Delivered the final country-level presentation and strategic recommendations'
      ],
      technologies: ['Excel','Powerpoint','Qual & Quant CX methodologies'],
      outcomes: 'Generated actionable insights that informed service strategy and improvement priorities across global markets.'
    },
    {
      id: 2,
      title: 'Hospitality Experience & Satisfaction Tracking',
      role: 'Research Executive',
      period: '2021-2023',
      icon: Users,
      description: 'Supported multi-year customer satisfaction tracking research in the hospitality industry, focusing on hotel stay experiences, food & beverage services, and event services. Analyzed incoming survey data, identified shifts in user satisfaction patterns, and developed presentation materials for ongoing stakeholder updates. Participated in supplemental qualitative studies on dining experiences and wedding services in collaboration with senior researchers.',
      achievements: [
        'Transformed large survey datasets into clear, narrative-driven insight decks',
        'Contributed to qualitative analyses for supplemental studies and co-developed deliverables',
        'Helped refine recurring survey instruments used annually for customer insights'
      ],
      technologies: ['Excel','Powerpoint', 'qualitative coding', 'survey analytics'],
      outcomes: 'Provided continuous insights that guided service enhancements and informed annual business reviews for the client.'
    },
    {
      id: 3,
      title: 'Telecommunications Service & Digital Product Research',
      role: 'Research Executive',
      period: '2021-2023',
      icon: Zap,
      description: 'Conducted a variety of ad-hoc research studies in the telecommunications sector, covering AI-based customer service agents, digital product adoption, new feature usability, and OTT service experience evaluation. Worked across mixed-method studies to investigate customer needs, satisfaction drivers, and product usability issues.',
      achievements: [
        'Analyzed user feedback on AI customer support tools to identify key pain points and opportunity areas',
        'Supported UX and satisfaction research for newly launched services and digital offerings',
        'Produced concise insight reports that informed product and service development teams'
      ],
      technologies: ['Excel','Powerpoint', 'survey analysis', 'UX research methods'],
      outcomes: 'Delivered timely insights that shaped feature planning, improved user experience, and supported decision-making across multiple service lines.'
    }
// **add Channel project & KIA Key issue project**

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
            Detailed showcase of projects and accomplishments from Ipsos Korea (2021-2023)
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-[#A8956B] text-white rounded-lg p-8 mb-12 text-center">
          <FolderOpen size={48} className="mx-auto mb-4 opacity-90" />
          <h2 className="mb-3">Portfolio Coming Soon</h2>
          <p className="max-w-2xl mx-auto">
            I'm currently adding more case studies and project summaries from my past work. 
            This page will continue to grow with additional projects, methodologies, and outcomes as I document them. 
            Check back soon for upcoming portfolio updates!
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
