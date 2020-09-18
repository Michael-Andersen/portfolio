import React from 'react';
import Timeline from './timeline.js'

class Experience extends React.Component {
    render() {
        const yalty = {title: "BCIT Practicum II", 
                    date: "2020", 
                    subtitle: "Yalty", 
                    paragraphs: ["Built a transactional messaging system for a new startup.", 
                        "Deployed serverlessly on AWS, using technologies such as Terraform, AWS CodePipeline (for CI/CD), and the Serverless framework.",
                        "Followed an agile methodology and met frequently with the CTO and CEO to discuss design decisions.",
                        "Worked with a team of four"],
                    links:[],
                    contentClass: "Experience"
                };
        const exclusive = {title: "BCIT Practicum I", 
                        date: "2019", 
                        subtitle: "Exclusive Dry Cleaners", 
                        paragraphs: ["Created an API, and updated Android, iOS, and web applications to use our API.", 
                            "Used technologies such as PHP, Laravel, Java, and Swift.", "Worked with a team of four"],
                        links:[],
                        contentClass: "Experience"
                };
        const sap = {title: "Agile Developer Intern", 
                    date: "2018-2019", 
                    subtitle: "SAP", 
                    paragraphs: ["Worked on an infrastructure team for the SAP Cloud Analytics product.", `Added new features, monitored performance, 
                                and fixed bugs in APIs and microservices.`, "Participated in full software development lifecycle for internal tools.",
                                "Used technologies such as Java, Spring Boot, Python, Django, Bash, Linux, Docker, Jenkins, Jira, Nginx, and Gunicorn. ",
                                "Worked in an agile environment including standup meetings and worked on cross-team projects as well.",
                                "Won first prize on a team of four in the SAP IXP Intern Hackathon July 2018.",
                                "Original eight month co-op assignment was extended for an additional four months based on my performance."],
                    links:[],
                    contentClass: "Experience"
            };
        
        const entries = [yalty, exclusive, sap];
        return (
        <div className="TimelineContainer">
            <Timeline entries={entries}/>
        </div>
      )
    }
  }

  export default Experience;