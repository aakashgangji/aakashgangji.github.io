import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-8 md:py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">Contact</h2>
      <div className="max-w-md mx-auto md:mx-0">
        <a 
          href="src/images/FNU_Aakash.pdf" 
          download="Aakash.pdf" 
          className="btn block text-center mb-4 px-4 py-2"
        >
          Download My Resume
        </a>
        <p className="mb-2 text-center md:text-left">
          <a 
            href="mailto:gangjiaakash@gmail.com" 
            className="text-red-400 hover:text-red-300 text-lg"
          >
            gangjiaakash@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
