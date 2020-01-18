import React, { Component } from 'react';
import blue_polygon from './Icons/green-polygon.svg';
import red_polygon from './Icons/red-polygon.svg';
import Parallax from 'parallax-js';
import './LandingPage.css';
import Wave from './Wave/wave';
import NavBar from './navbar/navbar';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
  }

  componentDidMount(){
  	var scene1 = document.getElementById('scene1');
  	var parallaxInstance1 = new Parallax(scene1);
  	parallaxInstance1.invert(true, true);

    var scene2 = document.getElementById('scene2');
    var parallaxInstance2 = new Parallax(scene2);
    parallaxInstance2.invert(false, false);
  }

  render() {
    return (
    	<div ref={this.homeRef}>
        <NavBar homeRef={this.homeRef} aboutRef={this.aboutRef} contactRef={this.contactRef}/>
        <Wave/>
        <div className='refdiv' ref={this.aboutRef}/>
        <div id='about'>
          <div id="scene1">
            <div data-depth="0.2"><img className='movableImg1' src={blue_polygon} alt=' '/></div>
            <em data-depth="0.6" className='text'>
              DESI THULLA
              <div className='subText'>Because Your Security Matters</div>
              <div className='subsubText'>
                We aims to provide instant police report  
                <br/>
                in case of any emergency or crime
                <br/>
                by just clicking the image of crime
                <br/>
                scene and reporting it through our app.
              </div>
              <br/>
              Our Vision
              <div className='subsubText'>
                
                <br/> 
                
                <br/>
                
              </div>
            </em>
          </div>
        </div>
        <div className='refdiv' ref={this.contactRef}/>
        <div id='contact'>
          <div id="scene2">
            <div data-depth="0.2"><img className='movableImg2' src={red_polygon} alt=' '/></div>
            <em data-depth="0.6" className='text2'>
              Contact Info
              <br/>
              ___________
              <div>
                <br/>
                Vibhor
                <br/>
                Shudhanshu
                <br/>
                Devanshu
                <br/>
                Manvendra
                <br/>
                Gaurav
              </div>
            </em>
          </div>
        </div>
        <div className='refdiv'/>
		</div>
    );
  }
}

export default LandingPage;
