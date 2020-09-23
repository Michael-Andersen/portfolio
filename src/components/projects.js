import React from 'react';
import Timeline from './timeline.js'

import ProjectsContent from '../content/projects.json'

class Projects extends React.Component {
    render() {
        return (
        <div className="TimelineContainer">
            <Timeline entries={ProjectsContent}/>
        </div>
      )
    }
  }

  export default Projects;