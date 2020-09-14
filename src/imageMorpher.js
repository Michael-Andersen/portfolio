import React from 'react';
import controlLines from "./control_lines.jpg"
import settings from "./settings.jpg"
import player from "./player.jpg"
import morph from "./youngoldyoung.gif"

class ImageMorpher extends React.Component {
    render() {
        return (
        <div className="ProjectWalkthrough">
          <div className="WalkthroughTitle"><h3>Image Morpher</h3></div>
          <div className="WalkthroughSection">
            <div><img src={controlLines} alt="screenshot of control lines" className="Screenshot"/></div>
            <div className="WalkthroughDescription">Start creating a new project and select your source and destination images.
             Now draw control lines with the mouse and drag them into the position to map out the morph from
             source to destination.</div>
             </div>
             <div className="WalkthroughSection">
            <img src={settings} alt="screenshot of settings menu" className="Screenshot"/>
            <div className="WalkthroughDescription">Use the settings menu to customize the control line interface, 
            number of frames in the morph, performance enhancements, and more.</div>
            </div>
            <div className="WalkthroughSection">
            <img src={player} alt="screenshot of morph viewer" className="Screenshot"/>
            <div className="WalkthroughDescription">Create a new morph and view it in the morph viewer.</div>
            </div>
            <div className="WalkthroughSection">
            <img src={morph} alt="gif of morph"/>
            <div className="WalkthroughDescription">A sample morph turned into a gif
            (using source and destination images from <a href="https://generated.photos/">generated.photos</a>)</div>
            </div>
        </div>
      )
    }
  }

  export default ImageMorpher;