import { ArrowLeft, Users, Image as ImageIcon } from 'lucide-react';
import { BackToTop } from '../BackToTop';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface EwhaActivitiesProps {
  onNavigate: (page: string) => void;
}

export function EwhaActivities({ onNavigate }: EwhaActivitiesProps) {
  const activities = [
    {
      id: 1,
      title: 'Activity or Club Name 1',
      period: '2017 - 2019',
      role: 'President / Member',
      description: 'Detailed description of your involvement in this activity or club. Include what the organization did, your specific role and responsibilities, and the impact you made. This section can highlight leadership experiences, collaborative projects, or community contributions.',
      achievements: [
        'Specific achievement or milestone 1',
        'Specific achievement or milestone 2',
        'Specific achievement or milestone 3'
      ],
      images: [
        {
          src: 'placeholder-activity-1',
          caption: 'Photo caption describing the activity or event'
        }
      ]
    },
    {
      id: 2,
      title: 'Activity or Club Name 2',
      period: '2016 - 2018',
      role: 'Team Lead / Participant',
      description: 'Detailed description of your involvement in this activity or club. Include what the organization did, your specific role and responsibilities, and the impact you made. This could include competitions, volunteer work, or academic clubs.',
      achievements: [
        'Specific achievement or milestone 1',
        'Specific achievement or milestone 2'
      ],
      images: [
        {
          src: 'placeholder-activity-2',
          caption: 'Photo caption describing the activity or event'
        }
      ]
    },
    {
      id: 3,
      title: 'Activity or Club Name 3',
      period: '2015 - 2017',
      role: 'Member / Organizer',
      description: 'Detailed description of your involvement in this activity or club. Include what the organization did, your specific role and responsibilities, and the impact you made. This section showcases your diverse interests and involvements during your undergraduate years.',
      achievements: [
        'Specific achievement or milestone 1',
        'Learning outcomes and personal growth'
      ],
      images: [
        {
          src: 'placeholder-activity-3',
          caption: 'Photo caption describing the activity or event'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <div className="mb-8">
          <button
            onClick={() => onNavigate('education')}
            className="flex items-center gap-2 text-[#A8956B] hover:text-[#8A7859] transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Education
          </button>
          <h1 className="text-[#5A4F3D] mb-2">EWHA Womans University Activities</h1>
          <p className="text-[#7A6F5D]">
            Club activities, projects, and experiences during my undergraduate years (2015-2019)
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-[#A8956B] text-white rounded-lg p-8 mb-12 text-center">
          <Users size={48} className="mx-auto mb-4 opacity-90" />
          <h2 className="mb-3">Content Coming Soon</h2>
          <p className="max-w-2xl mx-auto">
            I'm currently gathering photos and materials from my time at EWHA Womans University. 
            This page will showcase the clubs, activities, and projects I was involved in during my 
            undergraduate studies. Check back soon for detailed stories and memories!
          </p>
        </div>

        {/* Activities */}
        <div className="space-y-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg border border-[#D4C5A9] p-8"
            >
              {/* Activity Header */}
              <div className="mb-6">
                <h2 className="text-[#5A4F3D] mb-2">{activity.title}</h2>
                <div className="flex items-center gap-3 text-sm text-[#A8956B]">
                  <span>{activity.role}</span>
                  <span>•</span>
                  <span>{activity.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#7A6F5D] leading-relaxed mb-6 italic">
                {activity.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h3 className="text-[#5A4F3D] mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#7A6F5D]">
                      <span className="text-[#A8956B] mt-1">•</span>
                      <span className="italic">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images Section */}
              <div>
                <h3 className="text-[#5A4F3D] mb-3">Photos & Memories</h3>
                <div className="space-y-4">
                  {activity.images.map((image, index) => (
                    <div
                      key={index}
                      className="bg-[#FAF8F3] rounded-lg p-6 border border-[#E8DCC8]"
                    >
                      <div className="flex items-center justify-center h-64 bg-white rounded-md mb-3">
                        <div className="text-center text-[#D4C5A9]">
                          <ImageIcon size={48} className="mx-auto mb-2" />
                          <p className="text-sm italic">Photo placeholder - Coming soon</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#7A6F5D] text-center italic">
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-[#7A6F5D] italic">
            Note: Photos and detailed descriptions will be added soon. This page is currently 
            a placeholder for the wonderful memories and experiences from my time at EWHA.
          </p>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
