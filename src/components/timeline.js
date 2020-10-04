import React from 'react';
import {
    NavLink
  } from "react-router-dom";

function TimelineEntry(props) {
        const paragraphs = props.entry.paragraphs.map((item, index) => {
            return (<li key={index}>{item.join(" ")}</li>);
        });
        const links = props.entry.links.map((item, index) => {
            return item.isInternal ? (<li key={item.display}><NavLink exact to={item.url}>{item.display}</NavLink></li>)
            : (<li key={item.display}><a target="_blank" href={item.url} rel="noopener noreferrer">{item.display}</a></li>);
        });
        const divClass = props.isRight ? `TimelineBox TimelineRight ${props.entry.contentClass}` : `TimelineBox TimelineLeft ${props.entry.contentClass}`;
        return (<div key={props.entry.title} className={divClass}>
                  <div className="content">
                    <div className="EntryTopline">
                      <div className="EntryTitle"><h5>{props.entry.title}</h5></div><div className="EntryDate"><h5>{props.entry.date}</h5></div>
                    </div>
                    <div className="EntrySub"><h6>{props.entry.subtitle}</h6></div>
                    <div><ul className="EntryPoints">{paragraphs}</ul></div>
                    <ul className="LinksList">{links}</ul>
                  </div>
                </div>); 
    }
function Timeline(props) {
        const entries = props.entries;
        const entryDisplays = entries.map((item, index) => { 
            return (<TimelineEntry entry = {item} isRight= {index % 2 === 0}/>);
          });
        return (
              <div className="timeline">
                  {entryDisplays}
              </div>
        )
    }
  
export default Timeline;