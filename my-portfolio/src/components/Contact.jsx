import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
    <h2 className="text-3xl font-bold mb-2">Contact</h2>
    <div className="max-w-md">
      <a href="src/images/FNU_Aakash.pdf" download="Aakash.pdf">My Resume</a>
      <p className="mb-2"><a href="mailto:gangjiaakash@gmail.com" className="text-red hover:red">gangjiaakash@gmail.com</a></p>
    </div>
  </section>
  );
};

export default Contact;
