import React from 'react';

const Section = ({ title, description,  children })  =>(
  <div className="px-8 md:px20 lg:px-36 py-16 bg-white dark:bg-zinc-900 text-black dark:text-white">
    <h1  className="text-3xl font-bold text-center  mb-2 text-black dark:text-white">{title}</h1>
    {description && <p className="text-center  text-md mb-6 text-sm py-6 text-gray-700 dark:text-gray-300">{description}</p>}
    {children}
  </div>
);


export default Section;