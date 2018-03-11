import React from "react";
import "./flag.css";

var imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUINP1UMay2F4mgO9vfgMtcyzb3NQRXjmFp8CdZOTNtQPfwdHkfA";

const Flag = function(props){
    return (
            <div className="flagWrapper" style={{backgroundImage: "url("+props.pic.flag+")"}}>
            </div>
        );
    
};

Flag.defaultProps = {
    pic: imgURL
}


export default Flag;