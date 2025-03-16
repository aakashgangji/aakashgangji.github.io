import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center fade-in">
        <img src="src/images/aakash.png" alt="Aakash Gangji" className="w-40 h-40 rounded-full mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Aakash Gangji</h1>
        <p className="text-xl mb-2">Currently a student at Arizona State University studying Information Technology</p>
        <p className="max-w-xl mx-auto">
          I am currently looking for full time Cloud Role in the States of America.
        </p>
      </div>
    </section>
  );
};

export default Hero;
