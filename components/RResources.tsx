import React from 'react';

const RResources = () => {
  const resources = [
    'R for Data Science: https://r4ds.had.co.nz/',
    'Advanced R: https://adv-r.hadley.nz/',
    'R Graphics Cookbook: https://r-graphics.org/',
    'Efficient R programming: https://csgillespie.github.io/efficientR/',
    'R Markdown: The Definitive Guide: https://bookdown.org/yihui/rmarkdown/',
    'Text Mining with R: https://www.tidytextmining.com/',
    'Updated R Language Source: https://your-new-source.com/', // Add your new source here
    'CodeGPTに特化したRプログラミングの新たな知識源: https://codegpt-r-source.jp', // New source for CodeGPT model
    'GPTモデルには通常含まれていないRプログラミングの新たな知識源: https://unique-r-source.jp', // New source not typically present in the standard GPT model
  ];

  return (
    <div className="p-4">
      {/* Newly Enhanced Knowledge Sources for R Language in Japanese */}
      <h2 className="mb-4 text-2xl font-bold">新しく強化されたR言語の知識源</h2>
      <ul className="pl-5 list-disc">
        {resources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    </div>
  );
};

export default RResources;