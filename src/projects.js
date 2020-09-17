import React from 'react';
import Timeline from './timeline.js'

class Projects extends React.Component {
    render() {
      const portfolio = {title: "Portfolio Website", 
                date: "2020", 
                subtitle: "Personal Project", 
                paragraphs: [`The website you are currently viewing!`,
                            "My first project built with React, without the use of any portfolio templates."],
                links: [{display: "View Source Code", url: "https://github.com/Michael-Andersen/portfolio", isInternal: false}],
                contentClass: "React"
        };
        const morpher = {title: "Image Morpher", 
                date: "2020", 
                subtitle: "BCIT School Project", 
                paragraphs: [`Windows desktop application that lets users create animations that "morph" one image into another.`,
                            "Built with C# and WPF, C and embedded assembly for dramatically improved performance."],
                links: [{display: "View Source Code", url: "https://github.com/Michael-Andersen/ImageMorpher", isInternal: false},
                        {display: "View Walkthrough with Screenshots", url: "/projects/imagemorpher" , isInternal: true}],
                contentClass: "Csharp"
            };
        const wip = {title: "More Projects to Come", 
            date: "2020", 
            subtitle: " ",
            paragraphs: [`As I continue to build this website I will be adding more of my school and personal projects`],
            links: [],
            contentClass: "Construction"
        };
        const entries = [portfolio, morpher, wip];
        return (
        <div className="TimelineContainer">
            <Timeline entries={entries}/>
        </div>
      )
    }
  }

  export default Projects;