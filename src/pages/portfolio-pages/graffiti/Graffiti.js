import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './Graffiti.css';

import leadin from '../../../media/portfolio/graffiti/graffiti-leadin.jpg'
import PortfolioPiece from '../../../components/portfolio-piece/PortfolioPiece';
import front from '../../../media/portfolio/graffiti/front.jpg';
import back from '../../../media/portfolio/graffiti/back.jpg';
import screens from '../../../media/portfolio/graffiti/screens.png';
import GraffitiMid from '../../../media/portfolio/graffiti/graffiti_mid.jpg';
import GraffitiView from '../../../media/portfolio/graffiti/graffiti_view.jpg';
import GraffitiOther from '../../../media/portfolio/graffiti/view_other.jpg';

class Graffiti extends Component {

  render() {
    return (
      <PortfolioPiece
        title="Graffiti"
        github="https://github.com/sayalvarun/graffiti"
        devpost="https://devpost.com/software/graffiti-l3v85w"
        prototype="http://share.framerjs.com/e5fgdt2bh6l9"
        nextProject="/portfolio/dots"
        content={
          <span>
            <h2>What is it?</h2>
            <p>
              An augmented reality iOS app that allows you to draw virtual graffiti onto the real world.
            </p>
            <img src={leadin} alt="graffiti sneak peak" />

            <h2>Origins</h2>
             <p className="starting-paragraph">
               Want to make your mark on the world? Then try out Graffiti, a new app which lets you leave your virtual tag on any real life environment.
             </p>
             <p>
               The concept of Graffiti came about by thinking about what avenues of social media haven't been explored to their full potential yet, and my friends and I all agreed we were most interested in the aspect of anonymous socializing, in the vein of YikYak or Secret, as well as the "in the moment" feeling of platforms like Snapchat and Twitter. We tried to think of the best way we could combine these two aspects, and add in a creative aspect to these ideas through art.
             </p>
            <h2>Implementation</h2>
            <p className="starting-paragraph">
               We eventually landed on an augmented reality app that allows you to draw on any surface around you, and when you or anyone else with the app comes by that same spot they can see what you drew! All drawings are anonymous, and can only be viewed by those in the same location as you looking at the same wall, ceiling, floor, what have you. In order for graffiti to work we used the gyroscope and GPS to gather location and orientation data to maintain the context the graffiti is drawn on so that you don't see random drawings floating in the air (unless intended to be placed there!)
            </p>

            <h2>What I Did</h2>
            <p>
              For this project I coded the front-end in Swift using AVFoundation and some invaluable cocoapods (<a href="https://github.com/SnapKit/SnapKit" target="_blanl">SnapKit</a>, <a href="https://github.com/gizmosachin/ColorSlider" target="_blank">ColorSlider</a>, jot, and <a href="https://github.com/scalessec/Toast-Swift" target="_blank">Toast-Swift</a>). I also created all the assets and screens you see. Much help to <a href="https://github.com/IFTTT/jot" target="_blank">IFTTT's jot libary</a> which was instrumental in finishing the app within 48 hours.
            </p>
            <h2>Design Sketches</h2>
            <Carousel className="carousel">
              <div>
                <img src={front} alt="front end logic of graffiti" className="portrait" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p className="sketches-description">Sketches of the initial screens of graffiti, and the front end logic of a drawing layer, a camera layer, and the main activity layer. Struggled for a bit to separate out the code for all three screens whilst displaying them all at the same time.</p>
              </div>
              <div>
                <img src={back} alt="back end logic of graffiti" className="portrait" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
                <p className="sketches-description">The black magic that is the backend. Involves uploading the image you drew to the cloud along with all the geolocation data, and then pulling it down if a different user is at the same spot looking in the same direction.</p>
              </div>
            </Carousel>

            <h2>Wireframes</h2>
            <img src={screens} alt="drawing and tagging screens" className="screens" />
            <p>The end product, simply two screens, one to view others' graffiti with a spray can to start drawing, and another to actually create your art and then tag it into the world. Users can select stroke, color, and also add text to their graffiti.</p>

            <h2>Prototype</h2>
             <iframe  className="framer-embed" src="http://share.framerjs.com/e5fgdt2bh6l9/" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>

            <h2>In the Wild</h2>
            <Carousel className="carousel">
              <div>
                <img src={GraffitiMid} alt="real life use of graffiti" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>A person writing their own graffiti on a wall.</p>
              </div>
              <div>
                <img src={GraffitiView} alt="viewing graffiti" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>Now they can view the graffiti they just drew.</p>
              </div>
              <div>
                <img src={GraffitiOther} alt="viewing other's graffiti" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>Hey, they found someone else's graffiti!</p>
              </div>
            </Carousel>
          </span>
        }
      />
    );
  }
}

export default Graffiti;
