import { GraduationCap, BookOpen, Globe, ChevronRight } from 'lucide-react';
import { BackToTop } from '../BackToTop';

interface EducationProps {
  onNavigate: (page: string) => void;
}

export function Education({ onNavigate }: EducationProps) {
  const uvaCourses = [
    'Advanced Machine Learning',
    'Statistical Modeling',
    'Data Mining',
    'Natural Language Processing',
    'Computer Vision',
    'Deep Learning Applications'
  ];

  const uvaActivities = [
    'Graduate Research Assistant',
    'Data Science Club Member',
    'Teaching Assistant for Intro to Statistics'
  ];

  const ewhaCourses = [
    'Computer Science Fundamentals',
    'Database Systems',
    'Algorithms and Data Structures',
    'Software Engineering',
    'Web Development',
    'Operating Systems'
  ];

  const ewhaActivities = [
    'Computer Science Student Association',
    'Hackathon Participant',
    'Study Group Leader'
  ];

  const onlineCourses = [
    'Advanced Python Programming (Coursera)',
    'Cloud Computing Specialization (AWS)',
    'Machine Learning Engineering (Udacity)',
    'Data Visualization with D3.js (edX)',
    'Deep Learning Specialization (Coursera)'
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
              <p className="text-[#A8956B] mb-1">Master of Science in Data Science</p>
              <p className="text-sm text-[#7A6F5D]">2023 - Present</p>
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
              <p className="text-[#A8956B] mb-1">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-[#7A6F5D]">2015 - 2019</p>
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
