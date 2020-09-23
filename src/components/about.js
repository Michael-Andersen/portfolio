import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import me from '../images/me.jpg'
import mail from '../images/mail.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

class About extends React.Component {
    render() {
        return (
        <Container>
            <Row className="AboutHeader"><h3>Software Developer in Toronto</h3></Row>
            <Row>
            <Col></Col>
            <Col xs={8}>
                <p>I am a recent graduate of a computer science diploma program at the Brisith Columbia Institute of Technology and I am eager to grow in the software industry.
                I have over one year experience demonstrating my ability to learn quickly and deliver robust software
                solutions. I have a knack for finding creative solutions to challenging problems and I would love to help you and your company
                build something great!</p>
            </Col><Col></Col></Row>
            <Row>
                <Col className="Portrait">
                <Image src={me} alt="Photo of Michael Andersen" fluid roundedCircle />
                </Col>
            </Row>
            <Row>
            <Col></Col>
            <Col xs={8}>
            <p className="About">I have experience with a number of different technologies which you will find listed below.
            I enjoy building with these technologies but I am always happy to learn new tools to suit the needs of my current project.</p>
            </Col><Col></Col></Row><Row><Col></Col><Col xs={10}>
            <ul className="TechStack">
                <li><span className="TechSection">Programming languages:</span> Java, Python, C#, JavaScript, C++, PHP, Bash, Terraform, HTML5, CSS</li>
                <li><span className="TechSection">Deployment tools:</span> Maven, Ant, Docker, AWS</li>
                <li><span className="TechSection">Servers:</span> Nginx, Tomcat, Apache, Gunicorn</li>
                <li><span className="TechSection">CI/CD:</span> Jenkins, AWS CodePipeline</li>
                <li><span className="TechSection">Version Control: </span> Git, Github, Bitbucket</li>
                <li><span className="TechSection">Project Management:</span> Jira</li>
                <li><span className="TechSection">Frameworks/Libraries/APIs/Etc.:</span> Spring Boot, Guice, Node.js, React, JQuery, Bootstrap,
                WPF, Win32, Laravel, DirectX 12</li>
                <li><span className="TechSection">Databases:</span> SQL, MongoDB</li>
                <li><span className="TechSection">Operating Systems:</span> Windows, Linux</li>
                <li><span className="TechSection">IDEs:</span> Eclipse, Visual Studio, CLion, Visual Studio Code, PHPStorm</li>
            </ul></Col>
            </Row>
            <Row className="Interests"><Col xs={{offset:2}}><p>In addition to programming, I have a passion for math, music, film,
            literature, and travel.</p></Col></Row>
            <Row><Col lg={{span:4, offset:4}} xs={{span:9, offset:1}} className="LinkBox">
            <a target="_blank" href="https://github.com/Michael-Andersen" rel="noopener noreferrer"><Image src={github}/></a>
            <a href="mailto:mjpandersen@gmail.com"><Image src={mail}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/michael-andersen-van" rel="noopener noreferrer"><Image src={linkedin}/></a>
            </Col></Row>
        </Container>
      )
    }
  }

  export default About;