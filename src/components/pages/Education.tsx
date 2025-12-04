import { GraduationCap, BookOpen, Globe, ChevronRight } from 'lucide-react';
import { BackToTop } from '../BackToTop';

interface EducationProps {
  onNavigate: (page: string) => void;
}

export function Education({ onNavigate }: EducationProps) {
  const uvaCourses = [
    'Machine Learning',
    'Human-Computer Interaction',
    'Computational Behavior Modeling',
    'Natural Language Processing',
    'Generative AI Seminar',
    'Exploratory Text Analytics',
    'Engineering Interactive Technologies',
    'SP, ML, and Control'
  ];

  const uvaActivities = [
    'Graduate Researcher (Human-AI Technology Lab)',
    'Led/Contributed to multiple course-based applied projects (UX redesign, ML modeling, NLP, multi-agent systems)'
  ];

  const ewhaCourses = [
    'Data Analysis R',
    'Statistics for Business',
    'International Marketing',
    'Foundations for Business English',
    'Quantitatie and Financial Analysis',
    'German Cities and Urban Humanites',
    'German-English Interpreting',
    'Musical Travelogue in German-speaking Countries'
  ];

  const ewhaActivities = [
    'Study Abroad Experiences to Barnard College and Frankfurt University of Applied Sciences',
    'Ewha Peace Buddy Manager',
    'Ewha Harvard Summer School Program'
  ];

  const onlineCourses = [
    'Data Structures (NILE)',
    'Computer Systems (NILE)',
    'C Language I (NILE)',
    'Discrete Mathematics (NILE)',
    '100 Days of Code: The Complete Python Pro Bootcamp (Udemy)',
    'Complete Machine Learning and Data Science Bootcamp (Udemy)',
    'Linear Algebra for Data Science and Machine Learning A-Z (Udemy)',
    'Build Responsive Real-World Websites with HTML and CSS (Udemy)'
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* University of Virginia */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#E8DCC8] rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap size={28} className="text-[#A8956B]" />
            </div>
            <div className="flex-1">
              <h2 className="text-[#5A4F3D]">University of Virginia</h2>
              <p className="text-[#A8956B] mb-1">Master of Computer Science</p>
              <p className="text-sm text-[#7A6F5D]">2023 - 2025</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-[#5A4F3D]">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {uvaCourses.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-2 bg-[#FAF8F3] text-[#5A4F3D] rounded-md border border-[#E8DCC8]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-[#5A4F3D]">Activities & Involvement</h3>
              <ul className="space-y-2">
                {uvaActivities.map((activity) => (
                  <li key={activity} className="flex items-center gap-2 text-[#7A6F5D]">
                    <ChevronRight size={16} className="text-[#A8956B]" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#A8956B] text-white rounded-md hover:bg-[#8A7859] transition-colors"
            >
              <BookOpen size={20} />
              View Course Projects
            </button>
          </div>
        </div>

        {/* EWHA */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#E8DCC8] rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap size={28} className="text-[#A8956B]" />
            </div>
            <div className="flex-1">
              <h2 className="text-[#5A4F3D]">EWHA Womans University</h2>
              <p className="text-[#A8956B] mb-1">Bachelor of Arts in German Language Literature and International Studies</p>
              <p className="text-sm text-[#7A6F5D]">2016 - 2021</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-[#5A4F3D]">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {ewhaCourses.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-2 bg-[#FAF8F3] text-[#5A4F3D] rounded-md border border-[#E8DCC8]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-[#5A4F3D]">Activities & Involvement</h3>
              <ul className="space-y-2">
                {ewhaActivities.map((activity) => (
                  <li key={activity} className="flex items-center gap-2 text-[#7A6F5D]">
                    <ChevronRight size={16} className="text-[#A8956B]" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onNavigate('ewha-activities')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#A8956B] text-white rounded-md hover:bg-[#8A7859] transition-colors"
            >
              <BookOpen size={20} />
              View Activity Details
            </button>
          </div>
        </div>

        {/* Online Courses */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#E8DCC8] rounded-full flex items-center justify-center flex-shrink-0">
              <Globe size={28} className="text-[#A8956B]" />
            </div>
            <div className="flex-1">
              <h2 className="text-[#5A4F3D]">Online Learning & Certifications</h2>
              <p className="text-[#7A6F5D]">
                Continuous professional development through various online platforms
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-[#5A4F3D]">Completed Courses</h3>
            <ul className="space-y-2">
              {onlineCourses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-[#7A6F5D]">
                  <ChevronRight size={16} className="text-[#A8956B]" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
