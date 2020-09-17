import React from 'react';
import styled from 'styled-components'
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
        const circle = isRight ? styled.div`
                    padding: 10px 40px;
                    position: relative;
                    background-color: inherit;
                    width: 50%;
                    left: 50%;
                    &::after {
                    content: '';
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    right: -17px;
                    background-color: white;
                    border: 4px solid #FF9F55;
                    top: 15px;
                    border-radius: 50%;
                    z-index: 1;
                    left: 15px;
                    left: -16px;
                    width: 100%;
                    padding-left: 70px;
                    padding-right: 25px;
                    }
                    &::before {
                        left: 60px;
                        border: medium solid white;
                        border-width: 10px 10px 10px 0;
                        border-color: transparent white transparent transparent;
                        content: " ";
                        height: 0;
                        position: absolute;
                        top: 22px;
                        width: 0;
                        z-index: 1;
                        left: 30px;
                        border: medium solid white;
                        border-width: 10px 10px 10px 0;
                        border-color: transparent white transparent transparent;

                    }` :
                    styled.div`
                    padding: 10px 40px;
                    position: relative;
                    background-color: inherit;
                    width: 50%;
                    left: 0;
                    width: 100%;
                    padding-left: 70px;
                    padding-right: 25px;
                    &::after {
                    content: '';
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    right: -17px;
                    background-color: white;
                    border: 4px solid #FF9F55;
                    top: 15px;
                    border-radius: 50%;
                    z-index: 1;
                    left: 15px;
                    }
                    &::before {
                        content: " ";
                        height: 0;
                        position: absolute;
                        top: 22px;
                        width: 0;
                        z-index: 1;
                        right: 30px;
                        border: medium solid white;
                        border-width: 10px 0 10px 10px;
                        border-color: transparent transparent transparent white;
                    }
                    ` 
            return (<div key={entry.title} className={divClass}>
                      <div className="content">
                      <div className="EntryTopline">
                        <div className="EntryTitle"><h5>{entry.title}</h5></div><div className="EntryDate"><h5>{entry.date}</h5></div>
                      </div>
                      <div className="EntrySub"><h6>{entry.subtitle}</h6></div>
                      <ul>{paragraphs}</ul>
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