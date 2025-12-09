import { useState } from 'react';
import { ArrowLeft, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { BackToTop } from '../BackToTop';

// 🔹 Redesigning Health App (project1)
import health1 from '../../assets/projects/project-health_1.jpeg';
import health2 from '../../assets/projects/project-health_2.png';
import health3 from '../../assets/projects/project-health_3.png';

// 🔹 Exploring Machine Learning Classifiers (project3)
import ml1 from '../../assets/projects/project-ml_1.png';
import ml2 from '../../assets/projects/project-ml_2.png';
import ml3 from '../../assets/projects/project-ml_3.png';
import ml4 from '../../assets/projects/project-ml_4.png';
import ml5 from '../../assets/projects/project-ml_5.png';

// 🔹 Multi-Agent Systems in Computational Behavior Modeling (project4)
import cbm1 from '../../assets/projects/project-cbm_1.png';
import cbm2 from '../../assets/projects/project-cbm_2.png';
import cbm3 from '../../assets/projects/project-cbm_3.png';
import cbm4 from '../../assets/projects/project-cbm_4.png';
import cbm5 from '../../assets/projects/project-cbm_5.png';
import cbm6 from '../../assets/projects/project-cbm_6.png';
import cbm7 from '../../assets/projects/project-cbm_7.png';
import cbm8 from '../../assets/projects/project-cbm_8.png';
import cbm9 from '../../assets/projects/project-cbm_9.png';
import cbm10 from '../../assets/projects/project-cbm_10.png';
// import cbm11 from '../../assets/projects/project-cbm_11.png';
import cbm12 from '../../assets/projects/project-cbm_12.png';
import cbm13 from '../../assets/projects/project-cbm_13.png';
import cbm14 from '../../assets/projects/project-cbm_14.png';

// 🔹 NLP
import nlp1 from '../../assets/projects/project-nlp_1.png';
import nlp2 from '../../assets/projects/project-nlp_2.png';
import nlp3 from '../../assets/projects/project-nlp_3.png';
import nlp4 from '../../assets/projects/project-nlp_4.png';
import nlp5 from '../../assets/projects/project-nlp_5.png';


interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState('project1');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = {
    project1: {
      id: 'project1',
      name: 'Redesigning Health App',
      subtitle: 'HCI Course Final Project',
      keywords: ['Human Computer Interaction', 'UX & UI', 'Figma', 'Health', 'Personal Information'],
      images: [health1, health2, health3],
      sections: [
        {
          title: 'Objectives',
          content: 'In a collaborative project for my Human Computer Interaction course, we redesigned a health app that was falling short in sharing crucial information to its users. The goal was to transform how the app informed users about the personal health data it collected and utilized.'
        },
        {
          title: 'Redesigning',
          content: 'We used Figma to integrate user-friendly features: informative pop-ups that appeared at the moment of need, clear checkboxes for consent, easily recognizable info icons, an accessible FAQ section, and succinct bullet-point summaries replacing lengthy, jargon-filled text.'
        },
        {
          title: 'UX Study & Results',
          content: 'To measure the impact of our redesign, my team and I created and executed a user experience survey with several tasks so that the participants tries the app. We meticulously crafted a blend of qualitative and quantitative questions, including ones that tested the user\'s actual understanding of the information provided by both the original and redesigned app, and their experiences with both apps. Our analysis revealed that while we had significantly improved users\' understanding of the health information storage and usage policies, there was a nuanced distinction between understanding and awareness. This key finding showed the complexity of user engagement in reading privacy informations and the need for persistence in design.'
        }
      ]
    },
    project2: {
      id: 'project2',
      name: 'Sentiment Analysis on Youtube Comments',
      subtitle: 'Natural Language Processing Course Final Project',
      keywords: ['NLP', 'BERT', 'Transformers', 'Python', 'Youtube API'],
      images: [nlp1, nlp2, nlp3, nlp4, nlp5],
      sections: [
        {
          title: 'Project Overview',
          content: 'In this project, my team and I built a sentiment analysis pipeline for short, informal texts using Twitter data and real-time YouTube comments. We compared traditional machine learning models with BERT to see which approach works better for classifying sentiment in short texts, and then extended the best model into a tool that can track sentiment not only overall, but also across specific subtopics (e.g., “risk”, “jobs”) and over time. Our main case study focused on public reactions to the “impact of AI” based on comments from trending YouTube videos.'
        },
        {
          title: 'Technical Implementation',
          content: 'We used the Sentiment140 Twitter dataset (1.6M tweets, subsampled for computation) and a custom YouTube comments dataset collected via the YouTube Data API for videos related to “impact of AI.” After preprocessing (lowercasing, cleaning noise, converting emojis to sentiment words, keeping stopwords, and applying TF-IDF with uni- and bi-grams), we trained five machine learning classifiers (Naive Bayes, Linear SVC, Logistic Regression, Random Forest, Gradient Boosting) and fine-tuned a multilingual BERT model for comparison. We then selected the top-performing ML models and applied them to unseen YouTube data, added a subtopic module using keyword extraction (BERT-based similarity + word2vec relevance scoring) to filter highly relevant comments, and aggregated comments by year to analyze sentiment change over time. Finally, we visualized results as topic and subtopic sentiment charts, time-series plots, and word clouds to support more intuitive interpretation.'
        },
        {
          title: 'Key Findings and Results',
          content: 'On the Twitter dataset, traditional ML models outperformed BERT: Logistic Regression achieved the highest accuracy (≈81%), while BERT reached about 66% on short, noisy tweets. When tested on real-time YouTube comments, Naive Bayes generalized best to unseen data, achieving the most reliable accuracy in a manually labeled subset, so we chose it as the final production model. Using this model, we found that overall sentiment toward the impact of AI was predominantly positive, with positive comments outnumbering negative ones for both the main topic and subtopics such as “risk” and “jobs,” and positive sentiment increasing in more recent years. The final system provides a multi-dimensional view of sentiment—by topic, subtopic, and timeline—along with key keywords driving each sentiment, making it easier for users to explore how public opinion evolves around complex issues.'
        }
      ]
    },
    project3: {
      id: 'project3',
      name: 'Exploring Machine Learning Classifiers',
      subtitle: 'Machine Learning Course Final Project',
      keywords: ['Machine Learning', 'Decision Tree', 'Random Forest', 'AdaBoost'],
      images: [ml1, ml2, ml3, ml4, ml5],
      sections: [
        {
          title: 'Objectives',
          content: 'In our Machine Learning course, my team explored  two MNIST datasets using various machine learning techniques. Our primary goal was to identify the most effective classifier and parameter settings for optimal data classification. My role in this project was focusing on in-depth experimentation of Decision Tree, Random Forest, and Boosting for analysis to uncover the best solutions.'
        },
        {
          title: 'Process',
          content: 'I began by delving into the Decision Tree classifier, comparing different parameter combinations such as Gini index vs. Entropy, along with max_depth and min_samples_leaf, to ascertain the optimal setup through cross-validation. Building on this, I expanded my exploration to the Random Forest classifier, analyzing the effects of n_estimators and max_depth on model performance. The evaluation of classifier performance was comprehensive, based on a 10-fold Cross Validation in terms of accuracy, precision, recall, F1 score, and AUC to ensure a holistic understanding of each model\'s strengths and weaknesses. Moreover, I experimented with AdaBoost, a technique known for its ability to integrate multiple weak learners into a formidable ensemble model. This approach was particularly intriguing due to its inherent resistance to overfitting, a challenge I noted in both Decision Tree and Random Forest models under certain conditions.'
        },
        {
          title: 'Results',
          content: 'Through iterative experimentation, especially with the n_estimators parameter in AdaBoost, I found valuable insights into the characteristics of the datasets. Notably, the simplicity of dataset 1\'s patterns, which were effectively captured by a minimal number of weak learners before showing signs of overfitting. This project was not just an exercise in applying machine learning algorithms; it was a deep dive into the nuanced interplay between classifier parameters and dataset characteristics, enriching my understanding of machine learning\'s practical applications and theoretical underpinnings.'
        }
      ]
    },
    project4: {
      id: 'project4',
      name: 'Multi-Agent Systems in Computational Behavior Modeling',
      subtitle: 'Computational Behavior Modeling Course Final Project',
      keywords: ['Multi-agent Path Finding', 'TK Algorithm', 'A* Algorithm'],
      images: [cbm1, cbm2, cbm3, cbm4, cbm5, cbm6, cbm7, cbm8, cbm9, cbm10, cbm12, cbm13, cbm14],
      sections: [
        {
          title: 'Objectives',
          content: 'In Computational Behavior Modeling course, my team and I aimed at finding the efficiency of state-of-the-art multi-agent pathfinding and pickup and delivery systems. Our work was centered around a comprehensive comparison and optimization of state-of-the-art multi-agent algorithms, including the TK algorithm, Reinforcement Learning, and a simple a* algorithm, all tailored to a specifically designed environment to meet our project\'s objectives. I spearheaded the setting of the default environment, laying a solid foundation for our experiments. The environments as presented below, are representing small storages with narrow paths along the ​aisles, such as libraries and small stores. I took on the challenge of modifying the updated Token Passing algorithm to better fit our designated environment, conducting thorough tests on different parameters to identify the configurations that outperformed our baseline measures.'
        },
        {
          title: 'Results',
          content: 'The results included detailed analysis and comparison of the TK algorithm against other algorithms we had implemented, highlighting the nuanced performances and offering insights into their operational efficiencies. Interestingly, Reinforcement Learning did not stand out as we first expected it to be. This was due to the complexity of narrow paths, which was not suitable for the robots to learn, therefore successful training required extensive amount of time. Rather, Token Passing algorithms easily found out the path to achieve pickup and delivery tasks, avoid collision based on hard-coded conditions on waiting and taking detours. This project honed my problem-specification skills, allowing me to translate complex problem scenarios into actionable simulation steps and conditions. Adapting various algorithms to a unified testing environment presented significant initial challenges, yet through persistent experimentation, I gained a deep understanding of the mathematical principles driving algorithm performance under specific conditions.'
        }
      ]
    }
  };

  const projectList = Object.values(projects);
  const currentProject = projects[selectedProject as keyof typeof projects];

  // Reset image index when project changes
  const handleProjectChange = (projectId: string) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    if (currentProject.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="mb-8">
          <button
            onClick={() => onNavigate('education')}
            className="flex items-center gap-2 text-[#A8956B] hover:text-[#8A7859] transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Education
          </button>
          <h1 className="text-[#5A4F3D]">UVA Course Projects</h1>
          <p className="text-[#7A6F5D]">Detailed overview of academic projects</p>
        </div>

        {/* Project Navigation Menu */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-4 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {projectList.map((project) => (
              <button
                key={project.id}
                onClick={() => handleProjectChange(project.id)}
                className={`px-4 py-3 rounded-md transition-colors text-left ${
                  selectedProject === project.id
                    ? 'bg-[#A8956B] text-white'
                    : 'bg-[#FAF8F3] text-[#5A4F3D] hover:bg-[#E8DCC8]'
                }`}
              >
                <div className="text-sm line-clamp-2">{project.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-lg border border-[#D4C5A9] p-8">
          <div className="mb-8">
            <h2 className="mb-2 text-[#5A4F3D]">{currentProject.name}</h2>
            <p className="text-[#A8956B] mb-4">{currentProject.subtitle}</p>
            
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={16} className="text-[#7A6F5D]" />
              {currentProject.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-[#E8DCC8] text-[#5A4F3D] rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Project Images */}
          {currentProject.images.length > 0 && (
            <div className="mb-8">
              {/* Main Image Display */}
              <div className="relative bg-white rounded-lg border border-[#E8DCC8] p-4">
                <div className="flex items-center justify-center" style={{ minHeight: '300px' }}>
                  <img 
                    src={currentProject.images[currentImageIndex]} 
                    alt={`${currentProject.name} - Image ${currentImageIndex + 1}`}
                    className="max-w-full max-h-[500px] object-contain"
                  />
                </div>
                
                {/* Navigation Arrows - positioned on the sides */}
                {currentProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-[#5A4F3D] p-2 rounded-full shadow-md transition-all hover:shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-[#5A4F3D] p-2 rounded-full shadow-md transition-all hover:shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
                
                {/* Image Counter */}
                {currentProject.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {currentProject.images.length}
                  </div>
                )}
              </div>
              
              {/* Thumbnail Navigation */}
              {currentProject.images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                  {currentProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-colors overflow-hidden ${
                        currentImageIndex === index
                          ? 'border-[#A8956B]'
                          : 'border-[#E8DCC8] hover:border-[#D4C5A9]'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Project Sections */}
          <div className="space-y-8">
            {currentProject.sections.map((section, index) => (
              <div key={index}>
                <h3 className="mb-3 text-[#5A4F3D]">{section.title}</h3>
                <p className="text-[#7A6F5D] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}