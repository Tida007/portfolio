import React from 'react';

const Section = ({ title, description,  children })  =>(
  <div className="px-8 md:px20 lg:px-36 py-16 text-gray-300">
    <h1  className="text-3xl font-bold text-center text-white mb-2">{title}</h1>
    {description && <p className="text-center text-gray-400 text-md mb-6 text-sm py-6">{description}</p>}
    {children}
  </div>
);


export default Section;