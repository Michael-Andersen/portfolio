import React from 'react';
import Timeline from './timeline.js'

import ProjectsContent from '../content/projects.json'

function Projects(props) {
        return (
        <div className="TimelineContainer">
            <Timeline entries={ProjectsContent}/>
        </div>
      )
  }

  export default Projects;