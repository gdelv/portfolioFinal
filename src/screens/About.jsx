import React from "react";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h3>ABOUT</h3>
      <p>I am a civil engineering student turned full stack developer.</p>

      <p>
        My background in engineering has provided me with perseverance and
        troubleshooting skills to learn new concepts at a fast rate.
      </p>
      <p>
        I have always enjoyed working with computers and switching fields to
        software engineering has been a smooth transition, where now I have the
        ability of building front end products to address any user
        needs.
      </p>
      <p>
        Creating full stack applications requires a keen eye and an organized
        approach within collaborative work environments. Having been through
        several different types of industry, I work well with others becoming
        highly adaptable.
      </p>

      <p>
        I seek to be part of a team where I can be impactful and help create new
        ideas.
      </p>

      <form
        action="https://drive.google.com/file/d/10QnAWpwkyFLujv9Wm74F-8ll6H8P0PUc/view?usp=sharing"
        target="_blank"
      >
        <button className="resume-button">View Resume</button>
      </form>
    </div>
  );
};

export default About;
