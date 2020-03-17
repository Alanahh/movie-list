import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import NewMovie from './component/form-new-movie';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as movieActions from './actions/add.movie';
import {withRouter} from 'react-router-dom';


class Element extends React.Component{
    constructor(props){
        super(props);
       
        this.handleClick = this.handleClick.bind(this);
       
        this.display=this.display.bind(this);
    }
    display(){
        this.props.showClose("active");
    }
    handleClick(event) {
        this.props.changePage(Number(event.target.id));
        let pg = Number(event.target.id);
        this.props.history.push(`/page/${this.props.currentPage}`);
      
        
      }
     
    
    
    render(){
        
        const { movies, currentPage, moviesPerPage } = this.props.state;
        const indexOfLastMovie = currentPage * moviesPerPage;
        const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
        const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

        const renderMovies = currentMovies.map((dynamicData, index) => {
            return(
                <div>
                <li key={index}>
                    <div className='flex-container'>
                        <div className='title-poster'> <h3>{dynamicData.title}</h3>
                        <img alt='poster' src={dynamicData.url} className='poster' width='150'/></div>
                        <div className='plot'>{dynamicData.plot}</div>
                    </div>
                </li>
                <div className='stick'></div>
                </div>
            ) 
          });

          const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
             pageNumbers.push(i);
          
             }
             
             const renderPageNumbers = pageNumbers.map(number => {
                
                return (
                    <button class="btn btn-sm btn-outline-secondary page" type="button"><li className='list-pages'
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                  >
                    {number}
                  </li></button>
                );
              });
          
        return(
            <div>
            <div className='header'>
                 <nav class="navbar navbar-light bg-light" >
                    <form class="form-inline">
                    
                        <button class="btn btn-outline-success addMovie" type="button" onClick={this.display}>Add New Movie</button>
                       
                     </form>
                     <form class="form-inline">
                            <ul id="page-numbers">
                                {renderPageNumbers}
                            </ul>
                     </form>
                 </nav>
            </div>    
            <div className='wrap'>
            <div className={`new-movie ${this.props.display}`}>

                 <NewMovie/>
            </div>
                <div className='movies'>
                   
                        <ul>
                            {renderMovies}
                         
                        </ul>
                    
                    
                </div>
                
                
            </div>
           
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        state,
        display: state.display,
        currentPage: state.currentPage
    }
}
function mapDispatchToProps(dispatch) {
    return {
        showClose: bindActionCreators(movieActions.Actions.showClose, dispatch),
        changePage : bindActionCreators(movieActions.Actions.changePage, dispatch),
        updateCur: bindActionCreators(movieActions.Actions.updateCur, dispatch),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Element));