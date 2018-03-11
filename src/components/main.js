import React from "react";
import Selection from "./selection.js";
import Flag from "./flag.js";
import "./main.css"

var imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUINP1UMay2F4mgO9vfgMtcyzb3NQRXjmFp8CdZOTNtQPfwdHkfA";

class Main extends React.Component{
    
    componentDidMount(){
        console.log("mounted");
    }
    
    render(){
        return (
                <div className="mainWrapper">
                <Selection />
                <Flag pic={imgURL}/>
                </div>
            );
    }
}

export default Main;