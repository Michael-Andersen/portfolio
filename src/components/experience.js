import React from 'react';
import Timeline from './timeline.js'
import ExperienceContent from '../content/experience.json'

function Experience(props) {
        return (
        <div className="TimelineContainer">
            <Timeline entries={ExperienceContent}/>
        </div>
      )
  }

  export default Experience;