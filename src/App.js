import React, { useState } from 'react';

const Portfolio = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const projects = [
    {
      title: "PostgreSQL Buffer Management Enhancement",
      description: "Implemented a First-In-First-Out (FIFO) buffer replacement policy alongside the existing Clock Sweep algorithm in PostgreSQL (v16.4). Integrated the new policy with a configuration flag to toggle between strategies, allowing performance comparisons. This project, part of the Advanced Data Stores course at USC, demonstrated the impact of buffer management on database performance and provided hands-on experience with open-source database modifications.",
      skills: "C, Docker, VS Code, GDB, GNU Debugger, PostgreSQL, Postgres, Configuration, Docker Desktop, Debugging, Software Troubleshooting, SQL, Linux"
    },
    {
      title: "Smart Home Security System",
      description: "Developed an innovative, contactless security solution for residential areas during the COVID-19 pandemic. This system integrates temperature sensing and facial recognition, leveraging AWS technologies like Amazon Rekognition and SageMaker. It significantly enhanced resident safety by reducing manual checks by 70% and adapting to challenges such as mask detection.",
      skills: "AWS (Amazon Rekognition, RDS, SageMaker), IoT, Flask"
    },
    {
      title: "Aerial Threat Detection",
      description: "Engineered an advanced object detection system using drone-captured video feeds. Implemented MobileNet SSD models with TensorFlow and Keras, achieving 84% precision in distinguishing potential threats. This project showcases expertise in computer vision and real-time video analysis for security applications.",
      skills: "TensorFlow, Keras, OpenCV, MATLAB, Firebase, Django"
    },
    {
      title: "Social Media Insight Extractor",
      description: "Created an intelligent system for mining valuable suggestions from social media comments. Utilized a hybrid approach combining statistical methods, decision trees, and deep learning techniques. Achieved an impressive F1-score of 81%, demonstrating proficiency in Natural Language Processing and sentiment analysis.",
      skills: "Pandas, NumPy, TensorFlow, NLTK, Matplotlib, Seaborn"
    }
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Accenture Solutions Pvt. Ltd.",
      period: "Jun 2021 - Dec 2023",
      description: "Led development of Python and Apps Script automations, reducing manual tasks by 85%. Recognized in global innovation challenges and promoted for creating high-impact solutions."
    },
    {
      title: "Machine Learning Engineer",
      company: "Leading India AI (LeadingIndia.ai)",
      period: "May 2020 - Jul 2020",
      description: "Developed advanced CNNs for plant weed identification, leveraging data augmentation to enhance model performance on limited datasets."
    },
    {
      title: "Software Developer Intern",
      company: "VES Institute of Technology",
      period: "Nov 2019 - Jan 2020",
      description: "Created flight delay prediction models using regression techniques, achieving an MSE of 40. Integrated the model with a Laravel application via a Flask API."
    }
  ];

  const currentResponsibilities = [
    {
      title: "Research Assistant",
      organization: "Center for Artificial Intelligence in Society (CAIS), USC",
      description: "Contributing to pangolin conservation research, applying AI techniques to wildlife protection efforts."
    },
    {
      title: "Research Assistant",
      organization: "Annenberg Inclusion Initiative",
      description: "Analyzing health portrayals in popular media, utilizing data collection and analysis techniques to uncover trends and insights."
    },
    {
      title: "Citizen Scientist",
      organization: "NASA Globe Observer",
      description: "Assisting in local weather research by capturing and analyzing cloud images, contributing to global climate studies."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3e6ff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Archana Bhatia</h1>
          <p className="text-xl text-gray-600">Master of Science in Computer Science Student | Software Engineer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="mailto:archanam@usc.edu" className="text-blue-600 hover:text-blue-800">Email</a>
            <a href="tel:+12136814064" className="text-blue-600 hover:text-blue-800">Phone</a>
            <a href="https://linkedin.com/in/archanab7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="https://github.com/arc-b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700">
            Passionate software engineer with a strong background in AI, machine learning, data science, and full-stack development. 
            Currently pursuing an MS in Computer Science at USC, with a focus on advanced data systems and deep learning. 
            Experienced in developing innovative solutions that drive efficiency and solve complex problems.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 ${flippedCard === index ? 'rotate-y-180' : ''}`}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  {flippedCard === index ? (
                    <>
                      <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                      <p className="text-gray-600 text-xs"><strong>Skills:</strong> {project.skills}</p>
                    </>
                  ) : (
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} | {exp.period}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Responsibilities</h2>
          {currentResponsibilities.map((resp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">{resp.title}</h3>
              <p className="text-gray-600">{resp.organization}</p>
              <p className="text-gray-700 mt-2">{resp.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Java', 'C', 'Machine Learning', 'Data Science', 'NLP', 'AWS', 'GCP', 'React', 'SQL', 'Data Analysis', 'PostgreSQL', 'Docker'].map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;