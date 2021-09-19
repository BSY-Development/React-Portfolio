import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <div className="about-me">
      <div>
        <h2>Technologies</h2>
        <div className="technologies">
          <i className="fab fa-react margin-icon"> React</i>
          <i className="fab fa-js-square margin-icon"> Javascript</i>
          <i className="fab fa-python margin-icon"> Python</i>
          <i className="fab fa-git"> Git</i>
        </div>
      </div>
      <hr />
      <div className="about-right">
        <h2>About me</h2>
        <p>
          I got my first PC when I was 8 years old, I started taking some courses at the age of 10 on the basics of computing, at 13 I already knew how to create some .bat files to shut down the PC or create fake pages like orkut (phishing page). My first programming language was C# when I was in high school, and after that I ended up getting to know different types of languages, going through C, Java, Javascript, Python and some others. My favorite programming language is Python. I'm always very curious about technology-related subjects. I always like to be learning new things. I am currently studying web development and have a great desire to work with data science and/or machine learning. When I'm not coding, I like to play video games.
        </p>
        <div className="social-div">
          <a href="/"><i className="fab fa-instagram social-media"></i></a>
          <a href="/"><i className="fab fa-linkedin social-media"></i></a>
          <a href="/"><i className="fab fa-github social-media"></i></a>
        </div>
      </div>
    </div>
  )
}

export default About;
