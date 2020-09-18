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

import About from './about.js'
import Education from './education.js'
import Experience from './experience.js'
import Projects from './projects.js'
import ImageMorpher from './imageMorpher.js'

import hamburger from './hamburger.png'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <Container fluid className="TopView">
      <Row className="TopView">
      <Col className="App-header">
          Michael Andersen
      </Col><Col className="SideCol">
      <SidePanel/>
      </Col>
      </Row>
      </Container>
      <div className="MainView">
        <Route exact path="/" component={About}/>
        <Route path="/education" component={Education}/>
        <Route path="/experience" component={Experience}/>
        <Route exact path="/projects" component={Projects}/>
        <Route path="/projects/imagemorpher" component={ImageMorpher}/>
      </div>
      
      </HashRouter>
    );  
  }
}

function DropdownButton(props) {
  return (
    <option value={props.path} key={props.title}>
      {props.title}
    </option>
  );
}

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  handleClick() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render(){
  const menu = (<div>{this.state.isOpen ? <ul onClick={()=>this.handleClick()} className="list-group MobileList">{this.props.options}</ul> : null}</div>);
  return(<div><Image src={hamburger} onClick= {() => this.handleClick()}  className="MobileMenu"/>
          {menu} </div>);
  }
}

function SidePanel(props) {
  const history = useHistory();
  function handleClick(value) {
    history.push(value);
  }
  const sections = [{title:"About", path: "/", hasSubsection: false}, 
                {title:"Education", path: "/education", hasSubsection: false}, 
                {title:"Experience", path: "/experience", hasSubsection: false}, 
                {title:"Projects", path:"/projects", hasSubsection: true}]
  const sectionDisplaysFull = sections.map((item) => {
                  return item.hasSubsection ? (
                    <li className="Section" key={item.title}><NavLink className="links text-decoration-none text-reset" to={item.path}>{item.title}</NavLink></li>
                      )
                      : (<li className="Section" key={item.title}><NavLink className="links text-decoration-none text-reset" exact to={item.path}>{item.title}</NavLink></li>
                      );
                });
                //const sectionDisplaysMobile = sections.map(DropdownButton);
                const sectionDisplaysMobile = sections.map( (item) => {
                  return item.hasSubsection ? (
                    <li className="list-group-item" key={item.title}><NavLink className="text-decoration-none text-reset" to={item.path}>{item.title}</NavLink></li>
                      )
                      : (<li className="list-group-item" key={item.title}><NavLink className="text-decoration-none text-reset" exact to={item.path}>{item.title}</NavLink></li>
                      );
                  });
                return (
                  <div className="SidePanel">
                    <ul className="FullList">{sectionDisplaysFull}</ul>
                    <div className="MobileMenu"><HamburgerMenu options={sectionDisplaysMobile} /></div>
                  </div>);
                  

  }

export default App;







