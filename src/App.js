import React, { Component, Fragment } from 'react';
import logo from './images/cocktail_summer.jpg';
import photo from './images/cocktail_trio.jpg';
import photo2 from './images/cocktail_skulls.jpg';
import photo3 from './images/cocktail_4glasses.jpg';
import photo4 from './images/cocktail_summer.jpg';


import Header from "./components/Header";
import HideableText from "./components/HideableText";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
// import Hero from './components/Hero';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

/*import logo from './logo.svg';*/
import './App.css';



// class App extends Component {
//   state = {
    
//   };



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           **PROJECT COCKTAIL**
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render() {

  return(
    <Fragment>
    
    <div className="jumbotron">
     
      <div className="container-full-bg" >
        <Header />
        <Greet /> 
          <h1 className="alternate-font text-white" >MAKE ME A DRINK!</h1>
        </div>


        <Footer />
        {/* <HideableText /> */}
     
      {/* <img src={photo} width="150" alt="" className="d-inline-block align-middle mr-12" /> */}

        {/* <div className="container"> 
           <img src={photo} width="150" alt="" className="d-inline-block align-middle mr-12" />
           
          </div> */}
            
      </div>
        
        <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                <i class="fas fa-cocktail fa-3x"></i>
              </div>
              <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
                <p>search.</p>
              </div>
              <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                <i class="fas fa-cocktail fa-3x"></i>
              </div>
              <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
                <p>search.</p>
              </div>
              <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                <i class="fas fa-cocktail fa-3x"></i>              
                </div>
              <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
                <p>search.</p>
              </div>
            </div>
          </div>
        </div>




  

      <div className="container-fluid text-block">

        <span className="overlay-text maintxt alternate-font text-white">INSPIRE ME</span>
        {/* <h1 className="maintxt alternate-font text-white" >DRINKS</h1> */}
        <img className="img-responsive" src={photo3} width="1450" alt="" />
          

          
      </div> 

      <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-block">
        <span className="overlay-text maintxt alternate-font text-white">MAKE ME ONE</span>


        <img img class="img-responsive" src={photo} width="1450" alt="" />

      </div> 

      <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid"> 
        <span className="overlay-text maintxt alternate-font text-white">SEARCH</span>

       
        <img img class="img-responsive" src={photo2} width="1450" alt="" />

      </div> 

      <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
        <span className="overlay-text maintxt alternate-font text-white">MORE</span>


        <img img class="img-responsive" src={photo3} width="1450" alt="" />

      </div>  */}
      {/* <Hero /> */}
     
      
      </Fragment>


 
);
}

}
export default App;


