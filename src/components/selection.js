import React from "react";
import "./selection.css";


/*
// 0 -> 10
Math.floor(Math.random() * 11);
*/
var answer="stuff";
var selections=[];
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
       if(answer!== this.state.answer){
           alert("incorrect");
       }
       else{
           alert("correct");
       }
        
       
    }
    componentWillReceiveProps(nextProps){
        //alert(nextProps.correctAnswer.name);
        var first = Math.floor(Math.random()*251);//--->get random country for the incorrect answers
        selections.push(nextProps.name[first].name.substring(0,15));
        
        var second= Math.floor(Math.random()*251);
        selections.push(nextProps.name[second].name.substring(0,15));
        
        var third = Math.floor(Math.random()*251);
        selections.push(nextProps.name[third].name.substring(0,15));
        //alert(selections);
        this.setState({answer:nextProps.correctAnswer.name.substring(0,15)});
        
        
        
    }
    
    render(){
        return (
            <div className="selectWrapper">
                    
            <input type="radio" onClick={this.handleClick} value={this.state.answer} name="answer"/> {this.state.answer}
            <input type="radio" onClick={this.handleClick} value={selections[0]} name="answer"/> {selections[0]}
            <input type="radio" onClick={this.handleClick} value={selections[1]} name="answer"/> {selections[1]}
            <input type="radio" onClick={this.handleClick} value={selections[2]} name="answer"/> {selections[2]}
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