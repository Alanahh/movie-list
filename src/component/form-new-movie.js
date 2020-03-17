import React from 'react';
import '../index.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as movieActions from '../actions/add.movie';
import {Button} from 'react-bootstrap';
class NewMovie extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movie:{},
            title:'',
            url:'',
            plot:'',
            id:6,
            status:"none"
        };
        
        this.submit = this.submit.bind(this);
        this.addPlot = this.addPlot.bind(this);
        this.addTitle = this.addTitle.bind(this);
        this.addUrl = this.addUrl.bind(this);
        this.display=this.display.bind(this);
    }
    display(){
        this.props.showClose("none");
    }
    addPlot(evt){
        return this.setState({
            plot:evt.target.value
        });
    }
    addTitle(evt){
        return this.setState({
            title:evt.target.value
        });
    }
    addUrl(evt){
        return this.setState({
            url:evt.target.value,
            id: this.state.id+1
        });
    }
    submit(evt){
        evt.preventDefault();
        this.state.movie.id = this.state.id+1;
        this.state.movie.title = this.state.title;
        this.state.movie.url = this.state.url;
        this.state.movie.plot = this.state.plot;
        if(this.state.title&&this.state.url&&this.state.plot){
        this.setState({status:"active"});
        this.props.showClose("none");
        
        return this.props.movieActions(this.state.title,this.state.url,this.state.plot);}
        else alert("Error! Empty field!")
     
        
        
    }
    render(){
        console.log(this.props.currentPage);
        return(
           <div className='wrap-form'>
                <button className='close' onClick={this.display}>x</button>
                <form className='form'>
                    <p>Print in a title of the movie:</p>
                   <p><input type='text' placeholder='Title Here' id="Form-pass1" class="form-control validate" value={this.state.title} onChange={this.addTitle}/></p>
                   <p>Print in a url of the poster:</p>
                   <p><input type='text' id="Form-pass1" placeholder='https://' class="form-control validate" value={this.state.url} onChange={this.addUrl}/></p>
                   <p>Print in a plot of the movie:</p>
                   <p><input type='text'id="Form-pass1" placeholder='Plot Here' class="form-control validate"  value={this.state.plot} onChange={this.addPlot}/></p>
                   <Button bsStyle="primary" className='button' onClick={this.submit}>Add New Movie</Button>
                  
                   
                </form>
               
           </div> 
        )
    }

}
function mapStateToProps(state) {
    return {
        movies: state.movies,
        display: state.display

    }
}

function mapDispatchToProps(dispatch) {
    return {
        movieActions: bindActionCreators(movieActions.Actions.addMovie, dispatch),
        showClose: bindActionCreators(movieActions.Actions.showClose, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewMovie)
