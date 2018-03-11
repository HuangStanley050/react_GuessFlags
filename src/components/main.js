import React from "react";
import Selection from "./selection.js";
import Flag from "./flag.js";
import "./main.css";
import axios from 'axios';

//var imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUINP1UMay2F4mgO9vfgMtcyzb3NQRXjmFp8CdZOTNtQPfwdHkfA";
var flag;

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            countries:[]
        }
    }
    
    componentDidMount(){
        var url= 'https://restcountries.eu/rest/v2/all';
        axios.get(url)
        .then(function (response) {
         this.setState({countries:response.data});
          
         }.bind(this));
        
        
    }
   
    
    render(){
        return (
                <div className="mainWrapper">
                <Selection />
                <Flag pic={this.state.countries[0]}/>
                </div>
            );
    }
}

export default Main;