import React from "react";
import "./flag.css";


const Flag = function(props){
    return (
            <div className="flagWrapper" style={{backgroundImage: "url("+props.pic+")"}}>
            </div>
        );
    
};


export default Flag;