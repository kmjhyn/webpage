import { useState } from 'react';
import { ArrowLeft, Tag } from 'lucide-react';
import { BackToTop } from '../BackToTop';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState('project1');

  const projects = {
    project1: {
      id: 'project1',
      name: 'Predictive Analytics System',
      subtitle: 'Machine Learning Course Final Project',
      keywords: ['Python', 'TensorFlow', 'Data Analysis', 'Neural Networks'],
      sections: [
        {
          title: 'Project Overview',
          content: 'Developed a comprehensive predictive analytics system for forecasting customer behavior using advanced machine learning techniques. The project involved data preprocessing, feature engineering, model selection, and deployment strategies.'
        },
        {
          title: 'My Role & Responsibilities',
          content: 'As the lead developer, I was responsible for designing the neural network architecture, implementing the training pipeline, and optimizing model performance. I also collaborated with team members on data collection and validation strategies.'
        },
        {
          title: 'Technical Implementation',
          content: 'The system utilized TensorFlow for building deep learning models, with a focus on LSTM networks for time-series prediction. We implemented cross-validation techniques and hyperparameter tuning to achieve optimal results. The final model achieved 92% accuracy on the test dataset.'
        },
        {
          title: 'Key Findings & Results',
          content: 'Our analysis revealed significant patterns in customer behavior that were previously undetected. The model successfully predicted customer churn with high precision, enabling proactive retention strategies. We presented our findings at the course symposium and received recognition for innovative approach.'
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
      name: 'Computer Vision Application',
      subtitle: 'Computer Vision Course - Object Detection',
      keywords: ['Computer Vision', 'PyTorch', 'CNN', 'Object Detection'],
      sections: [
        {
          title: 'Project Overview',
          content: 'Developed an object detection system using convolutional neural networks for real-time image analysis. The project aimed to identify and classify multiple objects within complex scenes with high accuracy.'
        },
        {
          title: 'My Role & Responsibilities',
          content: 'Led the implementation of the YOLO-based detection framework, coordinated dataset annotation efforts, and optimized the model for real-time inference. I also managed the integration of the system with a web-based interface.'
        },
        {
          title: 'Technical Implementation',
          content: 'Implemented YOLOv5 architecture using PyTorch, with custom modifications for our specific use case. Applied techniques such as data augmentation, anchor box optimization, and model pruning to enhance performance and reduce latency.'
        },
        {
          title: 'Key Findings & Results',
          content: 'The final system achieved real-time detection at 30 FPS with mAP of 0.85. Successfully deployed the model as a web application, demonstrating practical applicability. The project received the "Best Technical Implementation" award in the course.'
        }
      ]
    },
    project4: {
      id: 'project4',
      name: 'Statistical Modeling Framework',
      subtitle: 'Advanced Statistics - Time Series Analysis',
      keywords: ['R', 'Statistics', 'Time Series', 'Forecasting'],
      sections: [
        {
          title: 'Project Overview',
          content: 'Developed a comprehensive statistical modeling framework for analyzing and forecasting time series data. The project explored various statistical methods including ARIMA, seasonal decomposition, and exponential smoothing.'
        },
        {
          title: 'My Role & Responsibilities',
          content: 'Designed and implemented the complete modeling pipeline, from data exploration to model validation. Conducted extensive residual analysis and diagnostic testing to ensure model appropriateness.'
        },
        {
          title: 'Technical Implementation',
          content: 'Utilized R for statistical computing, implementing various time series models and comparing their performance. Applied cross-validation techniques and information criteria for model selection.'
        },
        {
          title: 'Key Findings & Results',
          content: 'The SARIMA model provided the best fit with lowest AIC and BIC values. Successfully forecasted future values with 95% confidence intervals, demonstrating strong predictive capability.'
        }
      ]
    },
    project5: {
      id: 'project5',
      name: 'Big Data Processing Pipeline',
      subtitle: 'Distributed Systems - Scalable Data Processing',
      keywords: ['Spark', 'Hadoop', 'Scala', 'Big Data'],
      sections: [
        {
          title: 'Project Overview',
          content: 'Built a distributed data processing pipeline capable of handling large-scale datasets using Apache Spark and Hadoop ecosystem. The project focused on optimizing data transformations and aggregations for efficiency.'
        },
        {
          title: 'My Role & Responsibilities',
          content: 'Architected the ETL pipeline, optimized Spark jobs for performance, and implemented data quality checks. Managed cluster configuration and resource allocation for optimal throughput.'
        },
        {
          title: 'Technical Implementation',
          content: 'Implemented the pipeline using Spark with Scala, leveraging DataFrame API and Catalyst optimizer. Applied partitioning strategies and caching mechanisms to improve processing speed.'
        },
        {
          title: 'Key Findings & Results',
          content: 'Achieved 10x performance improvement over baseline implementation. Successfully processed 1TB+ of data daily with sub-hour latency, meeting all production requirements.'
        }
      ]
    },
    project6: {
      id: 'project6',
      name: 'Database Optimization Study',
      subtitle: 'Database Systems - Query Performance',
      keywords: ['SQL', 'PostgreSQL', 'Indexing', 'Optimization'],
      sections: [
        {
          title: 'Project Overview',
          content: 'Conducted a comprehensive study on database query optimization techniques and their impact on performance. Analyzed various indexing strategies, query execution plans, and database design patterns.'
        },
        {
          title: 'My Role & Responsibilities',
          content: 'Designed the experimental setup, implemented different optimization strategies, and benchmarked their performance. Documented findings and best practices for database optimization.'
        },
        {
          title: 'Technical Implementation',
          content: 'Used PostgreSQL to test various optimization techniques including B-tree indexing, query rewriting, and materialized views. Analyzed query plans using EXPLAIN ANALYZE.'
        },
        {
          title: 'Key Findings & Results',
          content: 'Identified optimal indexing strategies that reduced query execution time by up to 95%. Demonstrated the importance of understanding database internals for performance tuning.'
        }
      ]
    },
    project7: {
      id: 'project7',
      name: 'Web Application Development',
      subtitle: 'Software Engineering - Full Stack Project',
      keywords: ['React', 'Node.js', 'MongoDB', 'REST API'],
      sections: [
        {
          title: 'Project Overview',
          content: 'Developed a full-stack web application with modern architecture and best practices. The project emphasized clean code, testing, and deployment strategies for production-ready applications.'
        },
        {
          title: 'My Role & Responsibilities',
          content: 'Implemented both frontend and backend components, designed the API architecture, and established CI/CD pipeline. Led code reviews and ensured adherence to software engineering principles.'
        },
        {
          title: 'Technical Implementation',
          content: 'Built using React for frontend with Redux state management, Node.js/Express backend, and MongoDB database. Implemented JWT authentication, RESTful API design, and comprehensive testing suite.'
        },
        {
          title: 'Key Findings & Results',
          content: 'Successfully deployed the application with 99.9% uptime. Achieved test coverage of 85% and implemented automated testing in CI/CD pipeline. Received positive feedback from users and instructors.'
        }
      ]
    },
    project8: {
      id: 'project8',
      name: 'Reinforcement Learning Agent',
      subtitle: 'AI Course - Game Playing Agent',
      keywords: ['Python', 'Reinforcement Learning', 'Q-Learning', 'Neural Networks'],
      sections: [
        {
          title: 'Project Overview',
          content: 'Developed a reinforcement learning agent capable of learning optimal strategies through interaction with the environment. The project explored various RL algorithms and their applications.'
        },
        {
          title: 'My Role & Responsibilities',
          content: 'Implemented multiple RL algorithms including Q-learning and Deep Q-Networks (DQN). Designed reward functions and hyperparameter tuning strategies for optimal learning.'
        },
        {
          title: 'Technical Implementation',
          content: 'Used PyTorch to implement neural network-based value functions. Applied experience replay and target networks to stabilize training. Conducted extensive hyperparameter search.'
        },
        {
          title: 'Key Findings & Results',
          content: 'The DQN agent achieved superhuman performance after 10,000 episodes of training. Demonstrated effective exploration-exploitation balance and generalization to unseen scenarios.'
        }
      ]
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

          {/* Project Screenshots Placeholder */}
          <div className="mb-8 bg-[#FAF8F3] rounded-lg p-8 border border-[#E8DCC8]">
            <div className="aspect-video bg-gradient-to-br from-[#E8DCC8] to-[#D4C5A9] rounded-lg flex items-center justify-center">
              <p className="text-[#7A6F5D]">Project Screenshot Placeholder</p>
            </div>
          </div>

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
