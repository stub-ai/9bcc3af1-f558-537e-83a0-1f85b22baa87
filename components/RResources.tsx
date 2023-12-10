import React from 'react';

const RResources = () => {
  const resources = [
    'R for Data Science: https://r4ds.had.co.nz/',
    'Advanced R: https://adv-r.hadley.nz/',
    'R Graphics Cookbook: https://r-graphics.org/',
    'Efficient R programming: https://csgillespie.github.io/efficientR/',
    'R Markdown: The Definitive Guide: https://bookdown.org/yihui/rmarkdown/',
    'Text Mining with R: https://www.tidytextmining.com/',
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Newly Enhanced Knowledge Sources for R Language</h2>
      <ul className="list-disc pl-5">
        {resources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    </div>
  );
};

export default RResources;