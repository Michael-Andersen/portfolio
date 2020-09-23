import React from 'react';
import Timeline from './timeline.js'
import ExperienceContent from '../content/experience.json'

class Experience extends React.Component {
    render() {
        return (
        <div className="TimelineContainer">
            <Timeline entries={ExperienceContent}/>
        </div>
      )
    }
  }

  export default Experience;