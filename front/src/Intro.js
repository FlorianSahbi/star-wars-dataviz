import React, { Component } from "react";
import { TweenLite } from "gsap";
import { Power2, TimelineLite } from "gsap";

import './Intro.css';

import logo from './assets/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef();
    this.logo = React.createRef();
    this.content = React.createRef();
    this.audio = React.createRef();
    this.state = {
      muted: false,
    };
}

  componentDidMount() {
    const tl = new TimelineLite({paused: false});
    
    tl
      .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 1.5, { 
        opacity: 0, 
        onComplete: () => { 
          this.audio.current.play(); 
        }
      })
      .set(this.logo.current, { 
        opacity: 1,
        scale: 2.75,
        delay: 0.6
        })
      .to(this.logo.current, 8, { 
        scale: 0.05, 
        ease: Power2.easeOut
      })
      .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5")
      .to(this.content.current, 40, { top: "-170%" });
      
  }

render() {
  return (
    <div className="introContainer">
      <section className="intro" ref={this.intro}>
        <p>
          A long time ago, in a galaxy far,<br /> far away....
        </p>
      </section>
      <section className="logo" ref={this.logo}>
        <img src={logo} alt="Code Wars logo" draggable="false"/>
      </section>
      <section className="crawl">
        <div className="content" ref={this.content}>
          <h2 className="subtitle">AN INTERCONNECTED GALAXY</h2>
          <p>The Star Wars Galaxy is a vast and diverse system. Multiple characters of different species are spread across dozens of different planets.</p>
          <p>And through seven movies, the Star Wars saga showed us a lot of intricate relationship between characters...</p>
          <p>From light side to dark side, from human to droid, we seek to highlight these relationships by showing all the interactions that took place throughout this thrilling saga.</p>
        </div>
      </section>
      <audio ref={this.audio}>
      <source
        type="audio/mpeg"
        src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"
      />
    </audio>
    </div>
  );
}
}

export default App;