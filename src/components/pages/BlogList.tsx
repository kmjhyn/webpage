import { useState, useMemo } from 'react';
import { Calendar, ArrowLeft, Filter } from 'lucide-react';
import { BackToTop } from '../BackToTop';

interface BlogListProps {
  onNavigate: (page: string) => void;
}

export function BlogList({ onNavigate }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const allPosts = [
    {
      id: 1,
      title: 'Research Update: Participatory Design Workshop',
      date: 'Nov 24, 2025',
      dateValue: new Date('2025-11-24'),
      category: 'Research',
      content: 'Exciting progress and experience in my current research project! While I cannot share specifics yet, planning and executing an in-person participatory design workshop yielded interesting results that expanded my thoughts and ideas on our project. Lab members have been incredibly supportive and collaboration has been key to overcoming several challenges. We are currently in the analyzing the collected data and I am excited to implement this on our next study.'
      // },
    // {
    //   id: 2,
    //   title: 'Travel Reflection: Autumn in Virginia',
    //   date: 'October 20, 2024',
    //   dateValue: new Date('2024-10-20'),
    //   category: 'Personal',
    //   content: 'Fall colors in Charlottesville have been absolutely stunning this year. I took some time to explore the Blue Ridge Mountains and capture the beauty of the changing seasons. The hiking trails offered breathtaking views, and I found it to be a perfect opportunity to disconnect from work and reflect. There\'s something incredibly grounding about being in nature, especially during such a vibrant time of year. I highly recommend the Humpback Rocks trail for anyone visiting the area.'
    // },
    // {
    //   id: 3,
    //   title: 'Research Update: New Developments',
    //   date: 'October 10, 2024',
    //   dateValue: new Date('2024-10-10'),
    //   category: 'Research',
    //   content: 'Exciting progress in my current research project! While I cannot share specifics yet, the preliminary results are promising and align with our initial hypotheses. The team has been incredibly supportive, and collaboration has been key to overcoming several technical challenges. We\'re currently in the data analysis phase, and I\'m learning so much about advanced statistical methods. Stay tuned for more updates as we move toward publication.'
    }
  ];

  const categories = ['All', 'Learning', 'Personal', 'Research'];

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? allPosts 
      : allPosts.filter(post => post.category === selectedCategory);

    return filtered.sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.dateValue.getTime() - a.dateValue.getTime();
      } else {
        return a.dateValue.getTime() - b.dateValue.getTime();
      }
    });
  }, [selectedCategory, sortOrder]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Learning':
        return 'bg-[#C8B896] text-[#5A4F3D]';
      case 'Personal':
        return 'bg-[#A8C8A8] text-[#3D5A3D]';
      case 'Research':
        return 'bg-[#C8A8A8] text-[#5A3D3D]';
      default:
        return 'bg-[#E8DCC8] text-[#5A4F3D]';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <div className="mb-8">
          <button
            onClick={() => onNavigate('about')}
            className="flex items-center gap-2 text-[#A8956B] hover:text-[#8A7859] transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to About
          </button>
          <h1 className="text-[#5A4F3D]">All Blog Posts</h1>
          <p className="text-[#7A6F5D]">Recent activities, thoughts, and updates</p>
        </div>

        {/* Filter and Sort Controls */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="flex items-center gap-2 mb-3 text-[#5A4F3D]">
                <Filter size={18} />
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#A8956B] text-white'
                        : 'bg-[#E8DCC8] text-[#5A4F3D] hover:bg-[#D4C5A9]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort by Date */}
            <div className="md:w-48">
              <label className="block mb-3 text-[#5A4F3D]">
                Sort by Date
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                className="w-full px-4 py-2 bg-[#FAF8F3] border border-[#D4C5A9] rounded-md text-[#5A4F3D] focus:outline-none focus:ring-2 focus:ring-[#A8956B]"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredAndSortedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg border border-[#D4C5A9] p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-[#A8956B]">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
              </div>
              
              <h2 className="mb-4 text-[#5A4F3D]">{post.title}</h2>
              <p className="text-[#7A6F5D] leading-relaxed">{post.content}</p>
            </article>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
