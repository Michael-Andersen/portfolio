import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import About from './about.js'
import Education from './education.js'
import Experience from './experience.js'
import Projects from './projects.js'
import ImageMorpher from './imageMorpher.js'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <div>
        <header className="App-header">
          <p>Michael Andersen</p>
        </header>
      </div>
      <SidePanel/>
      </div>
      <div>
        <Route exact path="/" component={About}/>
        <Route path="/education" component={Education}/>
        <Route path="/experience" component={Experience}/>
        <Route exact path="/projects" component={Projects}/>
        <Route path="/music" component={Music}/>
        <Route path="/projects/imagemorpher" component={ImageMorpher}/>
      </div>
      
      </HashRouter>
    );  
  }
}

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [{title:"About", path: "/", hasSubsection: false}, 
                {title:"Education", path: "/education", hasSubsection: false}, 
                {title:"Experience", path: "/experience", hasSubsection: false}, 
                {title:"Projects", path:"/projects", hasSubsection: true}, 
                {title:"Music", path:"/music", hasSubsection: false}]
      }
  }

  render() {
    const sections = this.state.sections;
    const sectionDisplays = sections.map((item) => {
      return item.hasSubsection ? (
        <li className="Section" key={item.title}><NavLink className="links" to={item.path}>{item.title}</NavLink></li>
          )
          : (<li className="Section" key={item.title}><NavLink className="links" exact to={item.path}>{item.title}</NavLink></li>
          );
    });
    return (
      <div className="SidePanel">
        <ul>{sectionDisplays}</ul>
      </div>
    );
  }
}

class Music extends React.Component {
  render() {
    return (
      <div> Music</div>
    )
  }
}

export default App;







