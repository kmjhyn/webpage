import { useState } from 'react';
import { ArrowLeft, Tag } from 'lucide-react';
import { BackToTop } from '../BackToTop';
import { ImageWithFallback } from '../figma/ImageWithFallback';
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
import cbm11 from '../../assets/projects/project-cbm_11.png';
import cbm12 from '../../assets/projects/project-cbm_12.png';
import cbm13 from '../../assets/projects/project-cbm_13.png';
import cbm14 from '../../assets/projects/project-cbm_14.png';


interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState('project1');

  const projects = {
    project1: {
      id: 'project1',
      name: 'Redesigning Health App',
      subtitle: 'HCI Course Final Project',
      keywords: ['Python', 'TensorFlow', 'Data Analysis', 'Neural Networks'],
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
      name: 'Natural Language Processing Pipeline',
      subtitle: 'NLP Course - Sentiment Analysis',
      keywords: ['NLP', 'BERT', 'Transformers', 'Python'],
      sections: [
        {
          title: 'Project Overview',
          content: 'Built a robust NLP pipeline for analyzing sentiment in social media data. The project explored various transformer architectures and their effectiveness in understanding context and emotional tone in text data.'
        },
        {
          title: 'My Role & Responsibilities',
          content: 'I focused on implementing the BERT-based model, fine-tuning pre-trained transformers, and developing the data preprocessing pipeline. My responsibilities included handling imbalanced datasets and implementing evaluation metrics.'
        },
        {
          title: 'Technical Implementation',
          content: 'Leveraged Hugging Face transformers library to implement state-of-the-art NLP models. Applied techniques such as data augmentation, transfer learning, and ensemble methods to improve model robustness across different domains.'
        },
        {
          title: 'Key Findings & Results',
          content: 'Achieved F1-score of 0.89 on the test set, outperforming baseline models by 15%. The project demonstrated the importance of domain-specific fine-tuning and provided insights into sentiment patterns across different demographic groups.'
        }
      ]
    },
    project3: {
      id: 'project3',
      name: 'Exploring Machine Learning Classifi​ers',
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
      images: [cbm1, cbm2, cbm3, cbm4, cbm5, cbm6, cbm7, cbm8, cbm9, cbm10, cbm11, cbm12, cbm13, cbm14],
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
    // },
    // project5: {
    //   id: 'project5',
    //   name: 'Big Data Processing Pipeline',
    //   subtitle: 'Distributed Systems - Scalable Data Processing',
    //   keywords: ['Spark', 'Hadoop', 'Scala', 'Big Data'],
    //   sections: [
    //     {
    //       title: 'Project Overview',
    //       content: 'Built a distributed data processing pipeline capable of handling large-scale datasets using Apache Spark and Hadoop ecosystem. The project focused on optimizing data transformations and aggregations for efficiency.'
    //     },
    //     {
    //       title: 'My Role & Responsibilities',
    //       content: 'Architected the ETL pipeline, optimized Spark jobs for performance, and implemented data quality checks. Managed cluster configuration and resource allocation for optimal throughput.'
    //     },
    //     {
    //       title: 'Technical Implementation',
    //       content: 'Implemented the pipeline using Spark with Scala, leveraging DataFrame API and Catalyst optimizer. Applied partitioning strategies and caching mechanisms to improve processing speed.'
    //     },
    //     {
    //       title: 'Key Findings & Results',
    //       content: 'Achieved 10x performance improvement over baseline implementation. Successfully processed 1TB+ of data daily with sub-hour latency, meeting all production requirements.'
    //     }
    //   ]
    // },
    // project6: {
    //   id: 'project6',
    //   name: 'Database Optimization Study',
    //   subtitle: 'Database Systems - Query Performance',
    //   keywords: ['SQL', 'PostgreSQL', 'Indexing', 'Optimization'],
    //   sections: [
    //     {
    //       title: 'Project Overview',
    //       content: 'Conducted a comprehensive study on database query optimization techniques and their impact on performance. Analyzed various indexing strategies, query execution plans, and database design patterns.'
    //     },
    //     {
    //       title: 'My Role & Responsibilities',
    //       content: 'Designed the experimental setup, implemented different optimization strategies, and benchmarked their performance. Documented findings and best practices for database optimization.'
    //     },
    //     {
    //       title: 'Technical Implementation',
    //       content: 'Used PostgreSQL to test various optimization techniques including B-tree indexing, query rewriting, and materialized views. Analyzed query plans using EXPLAIN ANALYZE.'
    //     },
    //     {
    //       title: 'Key Findings & Results',
    //       content: 'Identified optimal indexing strategies that reduced query execution time by up to 95%. Demonstrated the importance of understanding database internals for performance tuning.'
    //     }
    //   ]
    // },
    // project7: {
    //   id: 'project7',
    //   name: 'Web Application Development',
    //   subtitle: 'Software Engineering - Full Stack Project',
    //   keywords: ['React', 'Node.js', 'MongoDB', 'REST API'],
    //   sections: [
    //     {
    //       title: 'Project Overview',
    //       content: 'Developed a full-stack web application with modern architecture and best practices. The project emphasized clean code, testing, and deployment strategies for production-ready applications.'
    //     },
    //     {
    //       title: 'My Role & Responsibilities',
    //       content: 'Implemented both frontend and backend components, designed the API architecture, and established CI/CD pipeline. Led code reviews and ensured adherence to software engineering principles.'
    //     },
    //     {
    //       title: 'Technical Implementation',
    //       content: 'Built using React for frontend with Redux state management, Node.js/Express backend, and MongoDB database. Implemented JWT authentication, RESTful API design, and comprehensive testing suite.'
    //     },
    //     {
    //       title: 'Key Findings & Results',
    //       content: 'Successfully deployed the application with 99.9% uptime. Achieved test coverage of 85% and implemented automated testing in CI/CD pipeline. Received positive feedback from users and instructors.'
    //     }
    //   ]
    // },
    // project8: {
    //   id: 'project8',
    //   name: 'Reinforcement Learning Agent',
    //   subtitle: 'AI Course - Game Playing Agent',
    //   keywords: ['Python', 'Reinforcement Learning', 'Q-Learning', 'Neural Networks'],
    //   sections: [
    //     {
    //       title: 'Project Overview',
    //       content: 'Developed a reinforcement learning agent capable of learning optimal strategies through interaction with the environment. The project explored various RL algorithms and their applications.'
    //     },
    //     {
    //       title: 'My Role & Responsibilities',
    //       content: 'Implemented multiple RL algorithms including Q-learning and Deep Q-Networks (DQN). Designed reward functions and hyperparameter tuning strategies for optimal learning.'
    //     },
    //     {
    //       title: 'Technical Implementation',
    //       content: 'Used PyTorch to implement neural network-based value functions. Applied experience replay and target networks to stabilize training. Conducted extensive hyperparameter search.'
    //     },
    //     {
    //       title: 'Key Findings & Results',
    //       content: 'The DQN agent achieved superhuman performance after 10,000 episodes of training. Demonstrated effective exploration-exploitation balance and generalization to unseen scenarios.'
    //     }
    //   ]
    }
  };

  const projectList = Object.values(projects);
  const currentProject = projects[selectedProject as keyof typeof projects];

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
                onClick={() => setSelectedProject(project.id)}
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

          {/* Project Screenshots, no image Placeholder */}
          <div className="mb-8">
            {currentProject.images && currentProject.images.length > 0 ? (
              <>
                <h3 className="mb-4 text-[#5A4F3D]">Screenshots</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentProject.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden border border-[#E8DCC8] bg-[#FAF8F3]"
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${currentProject.name} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-[#FAF8F3] rounded-lg p-8 border border-[#E8DCC8]">
                <div className="aspect-video bg-gradient-to-br from-[#E8DCC8] to-[#D4C5A9] rounded-lg flex items-center justify-center">
                  <p className="text-[#7A6F5D]">Project Screenshot Placeholder</p>
                </div>
              </div>
            )}
          </div>

          {/* ------only placeholder og code------ */}
          {/* <div className="mb-8 bg-[#FAF8F3] rounded-lg p-8 border border-[#E8DCC8]">
            <div className="aspect-video bg-gradient-to-br from-[#E8DCC8] to-[#D4C5A9] rounded-lg flex items-center justify-center">
              <p className="text-[#7A6F5D]">Project Screenshot Placeholder</p>
            </div>
          </div> */}
          {/* ------only placeholder og code------ */}

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
