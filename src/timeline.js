import React from 'react';
import {
    NavLink
  } from "react-router-dom";

class Timeline extends React.Component {
    renderEntry(entry, isRight) {
        const paragraphs = entry.paragraphs.map((item, index) => {
            return (<li key={index}>{item}</li>);
        });
        const links = entry.links.map((item, index) => {
            return item.isInternal ? (<li key={item.display}><NavLink exact to={item.url}>{item.display}</NavLink></li>)
            : (<li key={item.display}><a target="_blank" href={item.url} rel="noopener noreferrer">{item.display}</a></li>);
        });
        const divClass = isRight ? `TimelineBox TimelineRight ${entry.contentClass}` : `TimelineBox TimelineLeft ${entry.contentClass}`;
        return (<div key={entry.title} className={divClass}>
                  <div className="content">
                  <div className="EntryTopline">
                    <div className="EntryTitle"><h5>{entry.title}</h5></div><div className="EntryDate"><h5>{entry.date}</h5></div>
                  </div>
                  <div className="EntrySub"><h6>{entry.subtitle}</h6></div>
                  <div><ul className="EntryPoints">{paragraphs}</ul></div>
                  <ul className="LinksList">{links}</ul>
                  </div>
                </div>); 
    }
    render() {
        const entries = this.props.entries;
        const entryDisplays = entries.map((item, index) => {
            return this.renderEntry(item, index % 2 === 0);
          });
        return (
              <div className="timeline">
                  {entryDisplays}
              </div>
        )
      }
    }
  
    export default Timeline;