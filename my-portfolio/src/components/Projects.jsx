import React from 'react';

const ProjectCard = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg fade-in">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="Melodia"
          description="Generates instrumental music based on user prompts"
          imageUrl="src/images/melodia.jpg"
          liveUrl="https://devpost.com/software/melodia-6cqsn4"
          githubUrl="https://github.com/aakashgangji/Melodia"
        />
        <ProjectCard
          title="Faith"
          description="Unmasking the haunted histories of domains so you don’t get spooked online"
          imageUrl="src/images/faith.jpg"
          liveUrl="https://devpost.com/software/faith-vb43uw"
          githubUrl="https://github.com/aakashgangji/Faith"
        />
        
      </div>
    </section>
  );
};

export default Projects;
