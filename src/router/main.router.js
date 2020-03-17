import React from 'react';
import '../index.css';
import Element from '../Container';
import newMovie from '../component/form-new-movie';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import { store } from '../store';

class MainRouter extends React.Component{
    
    render(){
        console.log(this.props);
       const page = this.props.currentPage;
        
        return(
            <BrowserRouter>
    <div>
           
       <Switch>
       <Route path={'/'} component={Element}/>
       <Route path={`/${page}`} component={Element}/>
           

       </Switch>
    </div>
</BrowserRouter>
        )
    }
}



function mapStateToProps(state) {
    return {
        currentPage:state.currentPage
        
    }
}


export default connect(mapStateToProps)(MainRouter);