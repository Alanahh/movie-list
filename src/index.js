import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MainRouter from './router/main.router';
import {Provider} from "react-redux";
import {store} from "./store";




class MainComponent extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <MainRouter/>
            </Provider>
        )
    }
}

ReactDOM.render(<MainComponent/>, document.getElementById('root'));
registerServiceWorker();
