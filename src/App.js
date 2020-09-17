import React, {useState} from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  useHistory,
} from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'

import About from './about.js'
import Education from './education.js'
import Experience from './experience.js'
import Projects from './projects.js'
import ImageMorpher from './imageMorpher.js'

import './App.css';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function DropdownButton(props) {
  const history = useHistory();
  function handleClick() {
    history.push(props.path);
  }

  /*return (
    <Dropdown.Item onClick={handleClick}>
      {props.title}
    </Dropdown.Item>
  );*/

  return (
    <option value={props.path} key={props.title}>
      {props.title}
    </option>
  );
}

class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <Container className="MainView">
      <Row>
      <Col xs={4}>
        <header className="App-header">
          <p>Michael Andersen</p>
        </header>
      </Col><Col></Col><Col xs={4}>
      <SidePanel/></Col>
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

function SidePanel(props) {
  const forceUpdate = useForceUpdate();
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
                    <li className="Section" key={item.title}><NavLink className="links text-decoration-none text-reset text-justify" to={item.path}>{item.title}</NavLink></li>
                      )
                      : (<li className="Section" key={item.title}><NavLink className="links text-decoration-none text-justify text-reset" exact to={item.path}>{item.title}</NavLink></li>
                      );
                });
                const sectionDisplaysMobile = sections.map(DropdownButton);
                  
               /* return (
                  <div className="SidePanel text-justify">
                    <ul>{sectionDisplaysFull}</ul>
                    <Dropdown className="MobileMenu">
                    <Dropdown.Toggle>Navigation</Dropdown.Toggle>
                    <Dropdown.Menu onToggle={forceUpdate} className="dropdown-menu MobileMenu" aria-labelledby="dropdownMenu2">{sectionDisplaysMobile}</Dropdown.Menu>
                    </Dropdown>
                  </div>
                  
                );
                */
                return (
                  <div className="SidePanel text-justify">
                    <ul>{sectionDisplaysFull}</ul>
                    <select className="MobileMenu" onChange={event =>handleClick(event.target.value)}>
                    {sectionDisplaysMobile}
                    </select>
                  </div>);

  }


class Music extends React.Component {
  render() {
    return (
      <div> Music</div>
    )
  }
}

export default App;







