import React, { Component, Fragment } from 'react';
import logo from './images/cocktail_summer.jpg';
import photo from './images/cocktail_trio.jpg';
import photo2 from './images/cocktail_skulls.jpg';
import photo3 from './images/cocktail_4glasses.jpg';
import photo4 from './images/cocktail_summer.jpg';
import photo5 from './images/dark_background_for_text.png';
import photo6 from './images/cocktail_skulls_thin.jpg';
import photo7 from './images/cocktail_trio_thin.jpg';

import SearchCocktailByName from './components/SearchCocktailByName';
import DropDown from './components/DropDown';
import SearchByDrink from './components/SearchByDrink';
import SearchResults from './components/SearchResults';

import Header from "./components/Header";
import HideableText from "./components/HideableText";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
// import Hero from './components/Hero';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

/*import logo from './logo.svg';*/
import './App.css';

const axios = require('axios');






class App extends React.Component {

  state = {
    cocktailDetails: [],
    cocktailList: [],
    cocktailByDrink: [],
    cocktailRecipe: "",
    cocktailName: ""
  }

  componentDidMount() {
    //Make async request to get data
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getallcocktails/')
      .then((response) => {

        this.setState({
          cocktailList: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  searchCocktailByName = (cocktailName) => {
    // axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktailbyname/' + cocktailName)
    //   .then((response) => {

    //     this.setState({
    //       cocktailDetails: response.data.cocktails
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    let found = false;

    this.state.cocktailList.map(item => {
      if (cocktailName === item.name.toLowerCase()) {
        this.showRecipe(item.name, item.recipe);
        found = true;
      }
    })
    if (!found) {

      alert("ERROR: No cocktail by this name has been found");
    }
  }

  searchCocktailByDrink = (drink1, drink2, drink3) => {
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktaildrink/' + drink1 + "/" + drink2 + "/" + drink3)
      .then((response) => {

        console.log(response.data.cocktails);

        this.setState({
          cocktailByDrink: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  getAllCocktails = () => {
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getallcocktails/')
      .then((response) => {

        console.log(response.data);
        this.setState({
          cocktailList: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  showRecipe = (cocktailName, recipe) => {
    console.log("IN REcipe");
    let tempRecipe = "";

    if (recipe !== "") {
      tempRecipe = recipe;
    }
    else {
      tempRecipe = this.state.cocktailList.map(item => {
        if (item.name === cocktailName) {
          return item.recipe;
        };
      })
    }
    this.setState({
      cocktailRecipe: tempRecipe,
      cocktailName: cocktailName
    })
    recipe = "";
    console.log(cocktailName);
  }




  render() {

    const alcoholicCocktails = this.state.cocktailList.filter(item => item.alcoholic);
    const nonAlcoholicCocktails = this.state.cocktailList.filter(item => !item.alcoholic);



  return(
    <Fragment>
    
    <div className="jumbotron">
     
      <div className="container-bg-sm" >
        <Header />
        <Greet /> 
          {/* <h1 className="alternate-font text-white" >MAKE ME A DRINK!</h1> */}
        </div>


        <Footer />
        {/* <HideableText /> */}
     
      {/* <img src={photo} width="150" alt="" className="d-inline-block align-middle mr-12" /> */}

        {/* <div className="container"> 
           <img src={photo} width="150" alt="" className="d-inline-block align-middle mr-12" />
           
          </div> */}
            
      </div>

      <div className="feature-wrapper3 bg-white pt-5 pb-5 mt-5 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center mb-3 mb-md-0">
              {/* <i class="fas fa-cocktail fa-3x"></i> */}
            </div>
            <div className="col-sm-12 col-md-12 text-center text-md-center text-uppercase mb-3 mb-md-0">

              <h2>INSPIRE ME</h2>
            


              {/* <p>search.</p> */}
            </div>
            {/* <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
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
            </div> */}
          </div>
        </div>
      </div>



      {/* <div className="container-fluid text-block">

        <span className="overlay-text maintxt2 alternate-font text-blue">INSPIRE ME!
        <h1>INSPIRE ME </h1> */}
        {/* <h1 className="maintxt alternate-font text-white" >DRINKS</h1> */}
        {/* <img className="img-responsive" src={photo6} width="1450" alt="" /> */}
       
        {/* </span> */}
        {/* <span className="overlay-text maintxt2 alternate-font text-blue mg-responsive" src={photo6} width="1450" alt="""/> >INSPIRE ME!
        </span> */}
       
        {/* <br />

      </div> */}
        
        <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                <i class="fas fa-cocktail fa-3x"></i>
              </div>
              <div className="col-sm-12 col-md-3 text-center text-md-center text-uppercase mb-3 mb-md-0">
              <div className="row">
                <SearchCocktailByName
                  searchCocktailFunc={this.searchCocktailByName}
                  showRecipeFunc={this.showRecipe}
                  key="0" />


              </div>
                
                {/* <p>search.</p> */}
              </div>
              <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                {/* <i class="fas fa-cocktail fa-3x"></i> */}
              </div>
              <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
               
              <DropDown
                cocktailArray={alcoholicCocktails}
                label="Alcoholic" style={{ width: "160px" }}
                showRecipeFunc={this.showRecipe}
                key="2"

              />
                {/* <p>search.</p> */}
              </div>
              <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                {/* <i class="fas fa-cocktail fa-3x"></i>               */}
                </div>
              <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
                
              <DropDown
                cocktailArray={nonAlcoholicCocktails}
                label="Non-Alcoholic" style={{ width: "160px" }}
                showRecipeFunc={this.showRecipe}
                key="3"

              />
                
                {/* <p>search.</p> */}
              </div>
            </div>
          </div>
        </div>




      <div className="feature-wrapper4 bg-white pt-5 pb-5 mt-5 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center mb-3 mb-md-0">
              {/* <i class="fas fa-cocktail fa-3x"></i> */}
            </div>
            <div className="col-sm-12 col-md-12 text-center text-md-center text-uppercase mb-3 mb-md-0">

              <h2>MAKE ME ONE</h2>

            </div>
          </div>
        </div>
        </div>





        


      {/* <div className="container-fluid text-block">

        <span className="overlay-text maintxt2 alternate-font text-blue">MAKE ME ONE!</span> */}
        {/* <h1 className="maintxt alternate-font text-white" >DRINKS</h1> */}
        {/* <img className="img-responsive" src={photo7} width="1450" alt="" />
        <br />
          
      </div>  */}

      <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-2x"></i>
            </div>
            <div className="col-sm-12 col-md-12 text-center text-md-center text-uppercase mb-3 mb-md-0">
              
              <SearchByDrink
                searchCocktailByDrinkFunc={this.searchCocktailByDrink}
                key="3" />
              
              {/* <p>search.</p> */}
            </div>
            {/* <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">
              <p>search.</p>
            </div> */}
            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
              {/* <i class="fas fa-cocktail fa-3x"></i> */}
            </div>
            <div className="col-sm-12 col-md-12 text-center text-md-center text-uppercase mb-3 mb-md-0">
              
              <SearchResults
                cocktailArray={this.state.cocktailByDrink}
                // label="Click to see Cocktails"
                showRecipeFunc={this.showRecipe}
                key="4"
              />
              
              {/* <p>search.</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid text-block">
        <span className="overlay-text maintxt alternate-font text-white">To make a : {this.state.cocktailName}</span>
        <br></br>
        <span className="overlay-text maintxt2 alternate-font2 text-white">{this.state.cocktailRecipe}</span>
        
    

        <img img class="img-responsive" src={photo5} width="1450" alt="" />

      </div>  */}

      <div className="feature-wrapper2 bg-white pt-5 pb-5 mt-5 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center mb-3 mb-md-0">
              <i class="fas fa-cocktail fa-3x"></i>
            </div>
            <div className="col-sm-12 col-md-12 text-center text-md-center text-uppercase mb-3 mb-md-0">
             
              <h2>TO MAKE A: {this.state.cocktailName}</h2>
              <h5>{this.state.cocktailRecipe}</h5>
             
             
              {/* <p>search.</p> */}
            </div>
            {/* <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
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
            </div> */}
          </div>
        </div>
      </div>


      <div className="container-fluid"> 
        <span className="overlay-text maintxt alternate-font text-white">SEARCH</span>

       
        <img img class="img-responsive" src={photo2} width="1450" alt="" />

      </div> 

      {/* <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
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
      </div> */}

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


