import React from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  useHistory,
} from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import About from './about.js'
import Education from './education.js'
import Experience from './experience.js'
import Projects from './projects.js'
import ImageMorpher from './imageMorpher.js'

import hamburger from './hamburger.png'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHamburgerOpen: false
    }
  }

  handleHamburgerClick() {
    this.setState({isHamburgerOpen: !this.state.isHamburgerOpen});
  }

  renderHamburgerMenu(sections) {
    const sectionDisplaysMobile = sections.map( (item) => {
      return item.hasSubsection ? (
        <NavLink className="text-decoration-none text-reset" to={item.path}><ListGroupItem key={item.title}>{item.title}</ListGroupItem></NavLink>
          )
          : (<NavLink className="text-decoration-none text-reset" exact to={item.path}><ListGroupItem className="list-group-item" key={item.title}>{item.title}</ListGroupItem></NavLink>
          );
      });
  const menu = (<div>{this.state.isHamburgerOpen ? <ListGroup onClick={()=>this.handleHamburgerClick()} className="MobileList">{sectionDisplaysMobile}</ListGroup> : null}</div>);
  return menu;
}

  renderHamburgerButton() {
  return(<div className="HamburgerDiv"><Image src={hamburger} onClick= {() => this.handleHamburgerClick()} /></div>);
  }

  SidePanel(sections) {
  const sectionDisplaysFull = sections.map((item) => {
                  return item.hasSubsection ? (
                    <li className="Section" key={item.title}><NavLink className="links text-decoration-none text-reset" to={item.path}>{item.title}</NavLink></li>
                      )
                      : (<li className="Section" key={item.title}><NavLink className="links text-decoration-none text-reset" exact to={item.path}>{item.title}</NavLink></li>
                      );
                });                
                return (
                  <div>
                  <div className="SidePanel">
                    <ul className="FullList">{sectionDisplaysFull}</ul></div>
                  </div>);
                  

  }

  renderContentSections() {
    return (<div>
    <Route exact path="/" component={About}/>
        <Route path="/education" component={Education}/>
        <Route path="/experience" component={Experience}/>
        <Route exact path="/projects" component={Projects}/>
        <Route path="/projects/imagemorpher" component={ImageMorpher}/></div>);
  }
  render() {
    const sections = [{title:"About", path: "/", hasSubsection: false}, 
                {title:"Education", path: "/education", hasSubsection: false}, 
                {title:"Experience", path: "/experience", hasSubsection: false}, 
                {title:"Projects", path:"/projects", hasSubsection: true}]
    const sidePanel = this.SidePanel(sections);
    const hamButton = this.renderHamburgerButton();
    const hamMenu = this.renderHamburgerMenu(sections);
    const contentSections = this.renderContentSections();
    return (
      <HashRouter>
      <Container fluid className="TopView">
      <Row className="TopView">
      <Col className="App-header">
          Michael Andersen
      </Col><Col className="SideCol">
      {sidePanel}
      {hamButton}
      </Col>
      </Row>
      </Container>
      <div className="MainView">
        {this.state.isHamburgerOpen? hamMenu : contentSections}
      </div>
      </HashRouter>
    );  
  }
}

export default App;







