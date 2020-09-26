import React from 'react';
import Walkthrough from './walkthrough.js';

import ControlLines from "../images/control_lines.jpg";
import Settings from "../images/settings.jpg";
import Player from "../images/player.jpg";
import Morph from "../images/youngoldyoung.gif";

import ImageMorpherContent from '../content/imageMorpher.json';

function ImageMorpher(props) {
        const imagesMap = {"controlLines": ControlLines, "settings": Settings, "player" : Player, "morph": Morph};
        const imageMorpherContentWithImages = ImageMorpherContent.map(item => {
            item.screenshot = imagesMap[item.screenshotName.trim()];
            return item;
        });
        return (<div className="TimelineContainer">
                    <Walkthrough entries={imageMorpherContentWithImages} 
                        disclaimer={[`Source and destination images from `, <a key="3" href="https://generated.photos/">&nbsp;generated.photos</a>]}
                        title="Image Morpher"    
                    />
                </div>);
  }

  export default ImageMorpher;