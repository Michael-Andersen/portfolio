import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

class Walkthrough extends React.Component {

    renderEntry(entry) {
        return (
              <div key={entry.alt}>
              <Row className="WalkthroughSectionFull">
                <Col ><Image src={entry.screenshot}alt={entry.alt} fluid /></Col>
                <Col className="WalkthroughDescription">{entry.description}</Col>
                 </Row>
                 <div className="WalkthroughSectionMobile">
                 <Row>
                 <Image src={entry.screenshot}alt={entry.alt} fluid /></Row>
                <Row className="WalkthroughDescription">{entry.description}</Row>
                 </div></div>
                 );
    }
    render() {
        const entries = this.props.entries;
        const entryDisplays = entries.map(item => {
            return this.renderEntry(item);
          });
        const title = this.props.title;
        return (
        <Container className="ProjectWalkthrough">
          <div className="WalkthroughTitle"><h3>{title}</h3></div>
          {entryDisplays} 
        </Container>
      )
    }
  }

  export default Walkthrough;