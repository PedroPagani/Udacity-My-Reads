import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home.js'
import Search from './Search'
import './App.css'

const BooksApp = (props) => (
  <div className="app">
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search}/>
  </div>
)



/* class BooksApp extends React.Component {

  //COLOCAR EM STAILESS DOS CACETE
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
      </div>
    );
  }
} */

export default BooksApp