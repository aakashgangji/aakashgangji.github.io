import React from 'react';

const ProjectCard = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg fade-in">
      <img src={imageUrl} alt={title} className="w-full h-40 md:h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base mb-4">{description}</p>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn text-center px-3 py-1 text-sm md:text-base"
          >
            Live Demo
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn text-center px-3 py-1 text-sm md:text-base"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-8 md:py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <ProjectCard
          title="Melodia"
          description="Generates instrumental music based on user prompts"
          imageUrl="src/images/melodia.jpg"
          liveUrl="https://devpost.com/software/melodia-6cqsn4"
          githubUrl="https://github.com/aakashgangji/Melodia"
        />
        <ProjectCard
          title="Faith"
          description="Unmasking the haunted histories of domains so you don't get spooked online"
          imageUrl="src/images/faith.jpg"
          liveUrl="https://devpost.com/software/faith-vb43uw"
          githubUrl="https://github.com/aakashgangji/Faith"
        />
      </div>
    </section>
  );
};

export default Projects;
