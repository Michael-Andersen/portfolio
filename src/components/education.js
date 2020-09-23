import React from 'react';
import Timeline from './timeline.js'
import EducationContent from '../content/education.json'

class Education extends React.Component {
    render() {
        return (
        <div className="TimelineContainer">
            <Timeline entries={EducationContent}/>
        </div>
      )
    }
  }

  export default Education;