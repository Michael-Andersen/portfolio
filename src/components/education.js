import React from 'react';
import Timeline from './timeline.js'

class Education extends React.Component {
    render() {
        const bcit = {title: "Computers System Technology Diploma", 
                date: "2017-2020", 
                subtitle: "British Columbia Institute of Technology", 
                paragraphs: ["Graduated with Distinction and received the Toshiba Mobile Computer Award recognizing my hard work and achievement.",
                `Studied principles of Object Oriented programming and design, relational databases, algorithms, and data structures
                with an emphasis on practical applications and group work.`,
                "Completed the Digital Processing option with special courses on Audio/Visual algorithms, Win32 programming, and DirectX 12.",
                 ],
                links:[],
                contentClass: "Education"
            };
        const ubc = {title: "Bachelors of Science - Mathematics", 
                date: "2006-2011", 
                subtitle: "University of British Columbia", 
                paragraphs: [`Studied topics such as multivariable calculus, linear algebra, complex analysis, and Galois Theory.`,
                "Completed diverse electives in subjects such as literature, art history, music theory, Japanese, and film studies."],
                links:[],
                contentClass: "Education"
            };
        const entries = [bcit, ubc];
        return (
        <div className="TimelineContainer">
            <Timeline entries={entries}/>
        </div>
      )
    }
  }

  export default Education;