import React from 'react';
// import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div className="about-container">
    
    <p>
      Digital Music Factory knows that as an online creator or small production company, it can be hard to find good, 
      high-quality music that is royalty-free. The struggle of dealing with 2-4 copyrights can get tricky, not to mention VERY expensive.
    </p>
    <p>
      That's why we, here at DMF, are committed to finding new, cool artists for you to use in your projects. Whether it's an ad campaign for
      a local company or background music in your newest Thrift Shop Haul video on YouTube, we've got you covered.
    </p>
    </div>
  </div>
);

export default AboutPage;
