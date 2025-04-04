import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center fade-in">
        <img 
          src="src/images/aakash.png" 
          alt="Aakash Gangji" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4" 
        />
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Aakash Gangji</h1>
        <p className="text-base md:text-xl mb-2">
          Currently a student at Arizona State University studying Information Technology
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-base">
          I'm actively seeking exciting full-time opportunities in Software Engineering across the United States. Let's build something extraordinary together!
        </p>
      </div>
    </section>
  );
};

export default Hero;
