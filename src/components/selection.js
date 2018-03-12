import React from "react";
import "./selection.css";


/*
// 0 -> 10
Math.floor(Math.random() * 11);
*/
var resultMessage;
var selections=[];
class Selection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            choice:"",
            correct:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleReset=this.handleReset.bind(this);
    }
    handleClick(e){
       var answer=e.target.value;
        
       this.setState({choice:answer});
       if(answer!== this.state.answer){
           resultMessage="Incorrect Guess";
           this.setState({correct:true});
           //alert("incorrect");
       }
       else{
           //alert("correct");
           resultMessage="Correct";
           this.setState({correct:true});
       }
        
       
    }
    handleReset(){
        this.props.reset();
        this.setState({correct:false});
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
        
        var answerSelection = (
                <div>
                <input type="radio" onClick={this.handleClick} value={this.state.answer} name="answer"/> {this.state.answer}
                <input type="radio" onClick={this.handleClick} value={selections[0]} name="answer"/> {selections[0]}
                <input type="radio" onClick={this.handleClick} value={selections[1]} name="answer"/> {selections[1]}
                <input type="radio" onClick={this.handleClick} value={selections[2]} name="answer"/> {selections[2]}
                </div>
            );
            
        var messageAlert = (
                    <div className="correctMessage">
                    <h1>{resultMessage}</h1>
                    <input onClick={this.handleReset} type="button" value="Next" />
                    </div>
            );
        
        
        return (
            <div className="selectWrapper">
                    
                {this.state.correct===true ? messageAlert: answerSelection}
            
                    
        
            </div>
            );
    }
}

/*Selection.defaultProps ={
    country: {},
    answer: {}
}*/


export default Selection;

/*

<input type="radio" onClick={this.handleClick} value={this.state.answer} name="answer"/> {this.state.answer}
                <input type="radio" onClick={this.handleClick} value={selections[0]} name="answer"/> {selections[0]}
                <input type="radio" onClick={this.handleClick} value={selections[1]} name="answer"/> {selections[1]}
                <input type="radio" onClick={this.handleClick} value={selections[2]} name="answer"/> {selections[2]}




*/