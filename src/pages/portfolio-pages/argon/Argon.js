import React, { Component } from 'react';
import './Argon.css';

import PortfolioPiece from '../../../components/portfolio-piece/PortfolioPiece';
import Carousel from 'nuka-carousel';

import leadin from '../../../media/portfolio/argon/argon-leadin.png';
import eyetap from '../../../media/portfolio/argon/eyetap.png';
import argon from '../../../media/portfolio/argon/argon.png';
import google_glass from '../../../media/portfolio/argon/google_glass.jpg';
import quake_live from '../../../media/portfolio/argon/quake_live.jpg';
import quake from '../../../media/portfolio/argon/quake.jpg';

class Argon extends Component {

  render() {
    return (
      <PortfolioPiece
        title="Understanding AR"
        github="https://github.com/LinkCable/understanding-ar-twine"
        nextProject="/portfolio/graffiti"
        content={
          <span>
            <h2>What is it?</h2>
            <p>
              An augmented reality storybook telling the history of augmented reality. (meta huh?)
            </p>
            <img src={leadin} alt="book sneak peak" className="portrait"/>
            <h2>Origins</h2>
             <p className="starting-paragraph">
              Over the summer, I, like many others, became obsessed with the augmented reality game known as Pokemon Go, and found myself every day after my internship trekking through Central Park to hunt some Pokemon. During this playtime, and after the craze died down, I was interested in designing and developing an augmented reality experience of my own for people to try out.
            </p>
            <p>
              Upon arriving to Georgia Tech, I discovered that there was a lab dedicated to augmented reality in the <a href="http://ael.gatech.edu/lab/" target="_blank">Augmented Environments lab</a>. One of my fellow classmates was going to work on a project for the lab and she invited me to come to her next meeting with the professor. I accompanied her, met <a href="http://www.jdbolter.net/" target="_blank">Jay Bolter</a>, and began work on Understanding AR.
            </p>
            <h2>Concept</h2>
            <p className="starting-paragraph">
              Understanding AR is a project inspired by Scott McCloud's book <a href="https://en.wikipedia.org/wiki/Understanding_Comics" target="blank">Understanding Comics</a>, which is a meta work that describes how to write and draw comics through the use of comics. Professor Bolter really liked this work, and wondered if we could do the same with augmented reality: create an augmented reality application about augmented reality. My partner, Victoria, and I took up this challenge and sought to create an AR book about the history and development of AR. We identified what we considered key moments in augmented history worth representing:
              <ul className="list">
                <li><a href="https://en.wikipedia.org/wiki/The_Sword_of_Damocles_(virtual_reality)" target="_blank">Sword of Damocles by Ivan Sutherland (1968)</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Videoplace" target="_blank">Videoplace by Myron Kreuger (1975)</a></li>
                <li><a href="https://en.wikipedia.org/wiki/EyeTap" target="_blank">EyeTap by Steve Mann (1980)</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Augmented_reality" target="_blank">Augmented Reality term invented by Thomas Caudell (1990)</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Virtual_fixture" target="_blank">Virtual Fixtures by Louis Rosenburg for Air Force (1992)</a></li>
                <li><a href="http://artoolkit.org/" target="_blank">ARToolkit by Hirokazu Kato (1999)</a></li>
                <li><a href="http://wearables.unisa.edu.au/projects/arquake/" target="_blank">ARQuake by Bruce Thomas (2000)</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Google_Glass" target="_blank">Google Glass beta test (2013)</a></li>
                <li><a href="https://www.microsoft.com/microsoft-hololens/en-us" target="_blank">Hololens (2015)</a></li>
                <li><a href="http://www.pokemongo.com/" target="_blank">PokemonGO (2016)</a></li>
              </ul>
            </p>
            <p>
              With these 10 milestones in mind, we set out to develop a book that could tell this history of how augmented reality came to be in today's day and age.
            </p>
            <h2>Implementation</h2>
            <p className="starting-paragraph">
              In order to create our storybook, we used the augmented reality framework developed by the lab called <a href="http://argonjs.io/" target="_blank">Argon.js</a>. It's a javascript framework developed by <a href="https://blairmacintyre.me/" target="_blank">Blair MacIntyre</a>, the head of the Augmented Environments lab. We used Argon along with <a href="https://twinery.org/">Twine</a> and <a href="https://aframe.io/">a-frames</a> to create our AR experience.
            </p>
            <p>
              The general workflow was that I would create 3D models of the historical event we wanted to signify, and save them as .obj format so that they could be plugged into an a-frame and be rendered on the web. Once we had the model, we would write up a description of the event in Twine, and link it all up to a main storyline. We also had to save the images we wanted in <a href="https://www.vuforia.com/" target="_blank">Vuforia</a>, so that looking at an image would trigger the correct model to render.
            </p>
            <h2>What I Did</h2>
            <p>
              Determined the list of projects to represent, designed 3D models in Blender, and developed code in Twine for storybook features.
            </p>
            <h2>Some Models</h2>
            <Carousel className="carousel">
              <div>
                <img src={eyetap} alt="eyetap model" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>3D model of EyeTap in Blender</p>
              </div>
              <div>
                <img src={argon} alt="argon model" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>3D model of Argon logo in Blender</p>
              </div>
            </Carousel>
            <h2>In Action</h2>
            <Carousel className="carousel">
              <div>
                <img src={google_glass} alt="eyetap live" className="portrait" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>Presenting to Professor Bolter with the Google Glass model</p>
              </div>
              <div>
                <img src={quake_live} alt="quake live" className="portrait" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>Presenting to Professor Bolter with the Quake model</p>
              </div>
               <div>
                <img src={quake} alt="quake" className="portrait" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>What you actually see from the iPhone itself</p>
              </div>
            </Carousel>
          </span>
        }
      />
    );
  }
}

export default Argon;
