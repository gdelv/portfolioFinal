import React from "react";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h3>ABOUT</h3>
      <p>I am a civil engineering student turned full stack developer.</p>

      <p>
        {" "}
        My background in engineering has provided me with perseverance and
        troubleshooting skills to learn new concepts at a fast rate and work
        through any issues along the way.
      </p>
      <p>
        Creating full stack applications requires a keen eye and an organized
        approach within collaborative work environments. Having been through
        several different types of industry, I work well with others becoming
        highly adaptable with my positive demeanor and open mindedness.{" "}
      </p>

      <p>
        I seek to be part of a team where I can be impactful and create new
        ideas.
      </p>

      <form action='https://www.docdroid.net/D37HPv2/giusseppe-resume.pdf' target='_blank'>
        <button className='resume-button'>View Resume</button>
      </form>
    </div>
  );
};

export default About;
