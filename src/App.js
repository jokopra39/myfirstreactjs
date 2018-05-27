//import App from './components/App';
//import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import { createStore } from 'redux'
import filter from 'lodash'

function todos(state = [], action){
  switch (action.type) {
    case 'ADD_TODO':
    return state.concat([action.text])
    default:
    return state
  }
}

const store = createStore(todos,  [{m:'Use Redux'},{m:'mimi'},{m:'mintuno'}])

store.dispatch({
  type : 'ADD_TODO',
//  {name : 'joko  bos', alamat : 'wajaklor'}
  text : {m:'mimi'}
})


var sfilter =  store.getState()
var kan = "ffff"
function yuhu(){
  sfilter = store.getState().filter(function(o){
    if (o.m == 'mimi')
    return o
  })
 
  console.log(sfilter)
  // {sfilter.map(function(name, index){
  //   return <li key={index} > {name.m}</li>
  // })}
 kan = "dfvefe"
}

class App extends Component {
 

  render() {
    
    
    //console.log(StateMixin)
    return (
      <div className="App">
        <header className="App-header">
          <img src="/static/media/logo.5d5d9eef.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul id="isi">
          {kan/* {sfilter.map(function(name, index){
            return <li key={index} > {name.m}</li>
          })} */}
        </ul>
        <button onClick={yuhu}>sss</button>
        <p className="App-intro">
          To get started, ddedit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

//ReactDOM.render(<App/>, document.getElementById('app'))

export default App;
