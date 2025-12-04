import { ArrowLeft, BookOpen, Calendar } from 'lucide-react';
import { BackToTop } from '../BackToTop';

interface ResearchPortfolioProps {
  onNavigate: (page: string) => void;
}

export function ResearchPortfolio({ onNavigate }: ResearchPortfolioProps) {
  const researchProjects = [
    {
      id: 1,
      title: 'Social Walking',
      timeline: 'Ongoing',
      description: 'Detailed description of the research project, including objectives, methodologies, and expected outcomes. This section will be populated with actual project details as they become available for public disclosure.',
      publications: [
        {
          id: 1,
          title: 'Publication Title Related to Social Walking',
          status: 'In Preparation',
          expectedDate: 'TBD',
          description: 'Brief description of the publication and its key contributions to the field will be updated.'
        }
      ],
      currentUpdates: [
        'Completed baseline survey data collection',
        'Ran two participatory design workshops',
        'Preparing for app-based pilot study'
      ]
    },
    {
      id: 2,
      title: 'Digital Footprints',
      timeline: 'Ongoing',
      description: 'Detailed description of the research project, including objectives, methodologies, and outcomes. This section will showcase the completed work and its contributions.',
      publications: [
        {
          id: 2,
          title: 'Publication Title Related to Digital Footprints',
          status: 'In Preparation',
          expectedDate: 'TBD',
          description: 'Brief description of the publication and its key contributions to the field will be updated.'
        }
      ],
      currentUpdates: [
        'Completed initial pilot and preliminary data analysis',
        'Exploring data structure and parsing methods',
        'Developing early prototypes for data visualization'
      ]
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
          <h1 className="text-[#5A4F3D] mb-2">Research Portfolio</h1>
          <p className="text-[#7A6F5D]">
            Publications, projects, and research contributions from my work as a Research Assistant in HAI Lab
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-[#A8956B] text-white rounded-lg p-8 mb-12 text-center">
          <BookOpen size={48} className="mx-auto mb-4 opacity-90" />
          <h2 className="mb-3">Content Coming Soon</h2>
          <p className="max-w-2xl mx-auto">
            I'm currently working on exciting research projects and publications. This page will be updated 
            with detailed information about my research contributions, including publications, conference 
            presentations, and project outcomes. Please check back soon!
          </p>
        </div>

        {/* Research Projects */}
        <div className="space-y-8">
          {researchProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg border border-[#D4C5A9] p-8">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-[#5A4F3D]">{project.title}</h2>
                <span className="px-3 py-1 bg-[#FAF8F3] text-[#A8956B] rounded-full text-sm whitespace-nowrap ml-4">
                  {project.timeline}
                </span>
              </div>

              {/* Project Description */}
              <p className="text-[#7A6F5D] leading-relaxed mb-6 italic">
                {project.description}
              </p>

              {/* Related Publications */}
              <div className="mb-6">
                <h3 className="text-[#5A4F3D] mb-4">Related Publications</h3>
                <div className="space-y-4">
                  {project.publications.map((pub) => (
                    <div
                      key={pub.id}
                      className="bg-[#FAF8F3] rounded-lg p-4 border-l-4 border-[#A8956B]"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-[#5A4F3D] flex-1">{pub.title}</h4>
                        <span className="px-3 py-1 bg-[#E8DCC8] text-[#5A4F3D] rounded-full text-sm whitespace-nowrap ml-4">
                          {pub.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A8956B] mb-2">
                        <Calendar size={16} />
                        <span className="text-sm">Expected: {pub.expectedDate}</span>
                      </div>
                      <p className="text-[#7A6F5D] text-sm italic">{pub.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Updates / Achievements */}
              <div>
                <h4 className="text-[#5A4F3D] mb-3">Current Updates & Achievements</h4>
                <ul className="space-y-2">
                  {project.currentUpdates.map((update, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#7A6F5D]">
                      <span className="text-[#A8956B] mt-1">•</span>
                      <span className="italic">{update}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-[#7A6F5D] italic">
            Note: Specific details about ongoing research are confidential until publication. 
            This page will be regularly updated as new work becomes publicly available.
          </p>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
