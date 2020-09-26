import React from 'react';
import Timeline from './timeline.js'
import EducationContent from '../content/education.json'

function Education(props) {
        return (
        <div className="TimelineContainer">
            <Timeline entries={EducationContent}/>
        </div>
      );
  }

  export default Education;