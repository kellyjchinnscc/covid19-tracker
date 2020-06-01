import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import {Message, Statblock} from './Globalstats'

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>  
      <Message/>
      <br></br>
      <div className="container">
          <div className="row">
            <Statblock head={'Confirmed Cases'}/>
            <Statblock head={'Recovered'}/>
            <Statblock head={'Deaths'}/>
            <Statblock head={'Active Cases'}/>
          </div>      
      </div>

      <div className="row">
          <h1 className="col-4">Left Column</h1>
          <h1 className="col-8">Right Column</h1>
      </div>

    
      
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
