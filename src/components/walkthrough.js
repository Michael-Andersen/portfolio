import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function WalkthroughEntry(props) {
        return (
              <div key={props.entry.alt}>
                <Row className="WalkthroughSectionFull">
                <Col><Image src={props.entry.screenshot}alt={props.entry.alt} fluid /></Col>
                <Col className="WalkthroughDescription">{props.entry.description}</Col>
                </Row>
                 <div className="WalkthroughSectionMobile">
                  <Row><Image src={props.entry.screenshot}alt={props.entry.alt} fluid /></Row>
                  <Row className="WalkthroughDescription">{props.entry.description}</Row>
                 </div>
              </div>
              );
    }

function Walkthrough(props) {
        const entries = props.entries;
        const disclaimer = props.disclaimer;
        const entryDisplays = entries.map(item => {
            return (<WalkthroughEntry entry={item} />);
          });
        const title = props.title;
        return (
        <Container className="ProjectWalkthrough">
          <div className="WalkthroughTitle"><h3>{title}</h3></div>
          {entryDisplays}
          <Row className="WalkthroughDescription">{disclaimer}</Row> 
        </Container>
      );
  }

  export default Walkthrough;