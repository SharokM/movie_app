import React, { Component } from 'react';
import './App.css'
import MovieComponent from './MovieComponent.jsx'
import Header from './Header.jsx';



class App extends Component {

  state = {
    searchText: ""
  }

  render() {
    return (
      <>
      <div className='App'>
        <Header />
        <MovieComponent />      
      </div>
    
      </>
  )
}  
}

export default App;


