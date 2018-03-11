import React from "react";
import "./selection.css";


class Selection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            choice:""
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        var answer=e.target.value;
       
        this.setState({choice:answer});
        
       
    }
    componentWillReceiveProps(nextProp){
        alert(nextProp.correctAnswer.name);
        this.setState({answer:nextProp.correctAnswer.name});
        
    }
    
    render(){
        
        
        return (
            <div className="selectWrapper">
                    
                <input type="radio" onClick={this.handleClick} value="answer1"name="answer"/> An1
                <input type="radio" onClick={this.handleClick} value="answer2"name="answer"/> An2
                <input type="radio" onClick={this.handleClick} value="answer3"name="answer"/> An3
                <input type="radio" onClick={this.handleClick} value="answer4"name="answer"/> An4
                <input type="button" value="Guess" />
                    
        
            </div>
            );
    }
}

/*Selection.defaultProps ={
    country: {},
    answer: {}
}*/


export default Selection;