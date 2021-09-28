// By default, this project supports all modern browsers.
// Support for Internet Explorer 11 requires polyfills.
// For to support Internet Explorer 11, install react-app-polyfill,
// https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import 'typeface-muli';
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from 'app/App';
import $ from 'jquery'
import Config from './app/main/components/common/Config';
import Cache from './app/main/components/common/Cache';
import initTranslation from './app/main/components/common/localize';

var loadingPage = true
var initialized = false

$(function(){
    initTranslation()
    Config.init((err, ret)=>{
        if(ret) {           
            Cache.init((err, ret)=>{
                console.log("index.js -> cache init", err, ret);
                if(err) {
                    $.error('cache init: error');
                    return;
                }
                render();
                initialized = true
                if(!loadingPage) {
                    $(".loading-landing-panel").remove();
                }
            })            
        } else {
            console.log("Cannot load configuration")
        }
    })
  
})

/**************************************************   *************************************************/


const render = () => {
    console.log("ReactDOM.render")
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
};

window.onload = () => {
    //render();
};



// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
