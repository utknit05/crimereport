import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage'; 
import signin from './Components/signin/signin';
import './App.css';

class App extends Component{
  render(){
  return (
    <Router>
		<div>
			<Route exact path='/' component={LandingPage}/>
			<Route exact path='/signin' component={signin}/>
		</div>
	</Router>
  );
}
}

export default App;
