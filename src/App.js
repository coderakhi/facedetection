import './App.css';
import React from 'react'; 
import Navigation from './Components/Navigation/Navigation';
import "tachyons";
import Logo from './Components/Logo/Logo';
import "react-parallax-tilt"
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg';

class App extends React.Component{


  
  render() {
    return(
    <div className="App">
    
    <ParticlesBg type="cobweb" bg={true} num={"120"} color={["#f6fbfb"]} />
  
    {/* The navigation component goes here */}
    <Navigation />
    
    {/* The logo component goes here */}
    {/* <Logo/> */}
   
    <Rank/>
  
   {/* This were the url goes in */}
   <ImageLinkForm/>

  

    {/* <Signout />
    
    <Image/>   */}
    </div>
  )
  }
}

export default App;
