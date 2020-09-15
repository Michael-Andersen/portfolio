import React from 'react';

class About extends React.Component {
    render() {
        return (
        <div className="About">
            <div className="AboutHeader"><h2>Software Developer in Toronto</h2></div>
            <div className="AboutParagraph">
                I am a recent graduate of a computer science diploma program just starting my journey in the software industry.
                So far I have over one year experience demonstrating my ability to learn quickly and deliver robust software
                solutions. I love to solve challenging problems creatively and take pride in my work. In addition to programming,
                I have a passion for math, music, film, and travel.
            </div>
            <div className="TechStack">
            <p className="TechHeader">Below are the technologies I have experience in. I am as excited about further developing my skills in these technologies as
            I am to add new ones to my wheelhouse! </p>
            <ul>
                <li><span className="TechSection">Programming languages:</span> Java, Python, C#, Javascript, C++, PHP, Bash, Terraform, HTML5, CSS</li>
                <li><span className="TechSection">Deployment tools:</span> Maven, Ant, Docker, AWS</li>
                <li><span className="TechSection">Servers:</span> Nginx, Tomcat, Apache, Gunicorn</li>
                <li><span className="TechSection">CI/CD:</span> Jenkins, AWS CodePipeline</li>
                <li><span className="TechSection">Version Control: </span> Git, Github, Bitbucket</li>
                <li><span className="TechSection">Project Management:</span> Jira</li>
                <li><span className="TechSection">Frameworks/Libraries/APIs/Etc.:</span>Spring Boot, Node.js, React, JQuery, WPF, Win32, Laravel, DirectX 12</li>
                <li><span className="TechSection">Databases:</span> SQL, MongoDB</li>
                <li><span className="TechSection">Operating Systems:</span> Windows, Linux</li>
            </ul>
            </div>
        </div>
      )
    }
  }

  export default About;