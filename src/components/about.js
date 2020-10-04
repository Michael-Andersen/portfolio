import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import me from '../images/me.jpg'
import mail from '../images/mail.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

import aboutContent from '../content/about.json'

function About(props) {
        const techStack = aboutContent.techStack.map(item => {
            return (<li><span className="TechSection">{item.title}</span>: {item.list}</li>);
        });
        return (
        <Container>
            <Row className="AboutHeader"><h3>{aboutContent.header}</h3></Row>
            <Row>
                <Col xs={{span:8, offset:2}}>
                    <p>{aboutContent.mainBlurb.join(" ")}</p>
                </Col>
            </Row>
            <Row>
                <Col className="Portrait">
                    <Image src={me} alt="Photo of Michael Andersen" fluid roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col xs={{span:8, offset:2}}>
                    <p className="About">{aboutContent.techStackBlurb.join(" ")}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={{span:10, offset:2}}>
                    <ul className="TechStack">{techStack}</ul>
                </Col>
            </Row>
            <Row className="Interests">
                <Col xs={{offset:2}}>
                    <p>{aboutContent.interestsBlurb.join(" ")}</p>
                </Col>
            </Row>
            <Row>
                <Col lg={{span:4, offset:4}} xs={{span:9, offset:1}} className="LinkBox">
                    <a target="_blank" href="https://github.com/Michael-Andersen" rel="noopener noreferrer"><Image src={github}/></a>
                    <a href="mailto:mjpandersen@gmail.com"><Image src={mail}/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/michael-andersen-van" rel="noopener noreferrer"><Image src={linkedin}/></a>
                </Col>
            </Row>
        </Container>
      )
  }

  export default About;