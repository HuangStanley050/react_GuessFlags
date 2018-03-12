import React from "react";
import Selection from "./selection.js";
import Flag from "./flag.js";
import "./main.css";
import axios from 'axios';

//var imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUINP1UMay2F4mgO9vfgMtcyzb3NQRXjmFp8CdZOTNtQPfwdHkfA";
/*
// 0 -> 10
Math.floor(Math.random() * 11);
*/

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            countries:[]
            
        }
        this.resetGame=this.resetGame.bind(this);
    }
    randomNumber(){
        var valueR=Math.floor(Math.random()*251);
        return valueR;
    }
    
    resetGame(){
        var seed=this.randomNumber();
        var url= 'https://restcountries.eu/rest/v2/all';
        axios.get(url)
        .then(function (response) {
         this.setState({countries:response.data, random:seed, name:response.data[seed].name});
         
          
         }.bind(this));
    
    }
    
    componentDidMount(){
        var seed=this.randomNumber();
        var url= 'https://restcountries.eu/rest/v2/all';
        axios.get(url)
        .then(function (response) {
         this.setState({countries:response.data, random:seed, name:response.data[seed].name});
         
          
         }.bind(this));
        
        
    }
   
    
    render(){
        var country=this.state.countries[this.state.random];
        var world=this.state.countries;
        
        return (
                <div className="mainWrapper">
                <Selection name={world} correctAnswer={country} reset={this.resetGame}/>
                <Flag pic={country}/>
                </div>
            );
    }
}

export default Main;