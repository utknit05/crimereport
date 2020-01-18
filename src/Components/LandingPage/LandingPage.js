import React, { Component } from 'react';
import './LandingPage.css';
import NavBar from './navbar/navbar';
import security from './Icons/security.png';
import home from './Icons/home.jpg';
import polygon from './Icons/polygon.png';
import vision from './Icons/vision.png';
import cctv from './Icons/cctv.jpg';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
  }

  render() {
    return (
    <div ref={this.homeRef}>
      <NavBar homeRef={this.homeRef} aboutRef={this.aboutRef} contactRef={this.contactRef}/>
      <img src={home} alt='#' className='home'/>
      <div ref={this.aboutRef} className='text' style={{height: 400, display: 'flex'}}>
        <img src={polygon} alt='#' height={250} width={250} />
        <div className='pa4'>
          <h1>CRIME REPORT</h1>
          <h4>Because your security matters.</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <img src={security} alt='#' height={350} width='auto' className='security' />
      </div>
      <img src={polygon} alt='#' height={350} width='auto' className='polygon' />
      <div ref={this.contactRef} className='text'>
        <div style={{display: 'flex'}}>
          <img src={vision} alt='#' height={350} width='auto'/>
          <div className='vision'>
            <h1>OUR VISION</h1>
            <h4>Because your security matters.</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div className='feature'>
            <h1>FEATURES</h1>
            <h4>Kuch bhi daalo</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <img src={polygon} alt='#' height={200} width='auto' />
          <img src={polygon} alt='#' height={400} width='auto' />
        </div>
      </div>
      <img src={cctv} alt='#' className='cctv'/>
      <div className='footer'/>
    </div>
    );
  }
}

export default LandingPage;
