import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <div id="about" className="about-me">
      <div className="tech-div">
        <h1 className="title-about">Technologies</h1>
        <div className="technologies">
          <i className="fab fa-react margin-icon"> React</i>
          <i className="fab fa-js-square margin-icon"> Javascript</i>
          <i className="fab fa-python margin-icon"> Python</i>
          <i className="fab fa-git"> Git</i>
        </div>
      </div>
      <hr />
      <div className="about-right">
        <h1 className="title-about">About me</h1>
        <p>
        I got my first PC when I was 8 years old and I started taking some courses at the age of 10 on the basics of computing. At 13 I already knew how to create some .bat files to shut down the PC and create phishing pages like Orkut. My first programming language was C# when I was in high school, and after that I ended up getting to know different types of languages, going through C, Java, JavaScript, Python and some others. My favorite programming language is Python. I'm always very curious about technology-related subjects and I like to be learning new things. I am currently studying web development and I have a great desire to work with data science and/or machine learning. When I'm not coding, I like to play video games.
        </p>
        <div className="social-div">
          <a href="https://www.instagram.com/bsy.development/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram social-media"></i></a>
          <a href="https://www.linkedin.com/in/bruno-yamamoto/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin social-media"></i></a>
          <a href="https://github.com/BSY-Development" target="_blank" rel="noopener noreferrer"><i className="fab fa-github social-media"></i></a>
        </div>
      </div>
    </div>
  )
}

export default About;
