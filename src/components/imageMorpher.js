import React from 'react';
import Walkthrough from './Walkthrough.js'
import controlLines from "../images/control_lines.jpg"
import settings from "../images/settings.jpg"
import player from "../images/player.jpg"
import morph from "../images/youngoldyoung.gif"

class ImageMorpher extends React.Component {
  
    render() {
        const controlStep = {screenshot: controlLines, alt:"screenshot of control lines", description:`Start creating a new project and select your source and destination images.
        Now draw control lines with the mouse and drag them into position to map out the morph from
        source to destination.`};
        const settingStep = {screenshot: settings, alt:"screenshot of settings menu", description:`Use the settings menu to customize the control line interface, 
        number of frames in the morph, performance enhancements, and more.`};
        const playerStep = {screenshot: player, alt:"screenshot of morph viewer", description:`Create a new morph and view it in the morph viewer!`};
        const morphStep = {screenshot: morph, alt:"gif of morph", description:[`A sample morph turned into a gif
        (using source and destination images from `, <a key="3" href="https://generated.photos/">generated.photos</a>,`)`]};
        const entries = [controlStep, settingStep, playerStep, morphStep]
        return (<div className="TimelineContainer">
        <Walkthrough entries={entries} title="Image Morpher"/>
    </div>);
    }
  }

  export default ImageMorpher;