import React from 'react';
import './navbar.css';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const NavBar = ({homeRef, aboutRef, contactRef}) => {
	return (
		<div>
			<nav>
				<div className="logo">DESI THULLA</div>
				<div className='navigation'>
					<ul>
						<li><span onClick={() => scrollToRef(homeRef)} className='pointer'>Home</span></li>
						<li><span onClick={() => scrollToRef(aboutRef)} className='pointer'>About</span></li>
						<li><span onClick={() => scrollToRef(contactRef)} className='pointer'>Contact</span></li>
					</ul>
				</div>
			</nav>
			<div className='bottomNavBar'>
				<i onClick={() => scrollToRef(homeRef)} className="fa fa-home home"></i>
				<i onClick={() => scrollToRef(aboutRef)} className="fa fa-info about"></i>
				<i onClick={() => scrollToRef(contactRef)} className="fa fa-envelope-o contact"></i>
			</div>
		</div>
	);
}

export default NavBar;