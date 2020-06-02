import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import {Message, Statblock} from './Globalstats'
import {Leftcolumn, Rightcolumn} from './Countrypicker'
import { useState, useEffect } from 'react';

function App() {
 
 // State Management and Initialization
  const[globalData, setGlobalData] = useState({});
  const[currentDate, setCurrentDate] = useState('');
  const[countryData, setCountryData] = useState([]);
  const[selectedCountryName, setSelectedCountryName] = useState('')
  const[selectedCountryData, setSelectedCountryData] = useState({})


 // API Fetching
  const getData = async () => {
    const response = await fetch('https://api.covid19api.com/summary')
    const data = await response.json()
    const globalStats = data.Global
    setGlobalData(globalStats)
    setCurrentDate(data.Date)
    setCountryData(data.Countries)
  }
  useEffect( () => { // Calling useEffect to use the getData function to make sure the data isn't fetched hundreds of times
    getData()
  }, [])


 // Func Decl and Impl
  function displayCountryNameInRightColumn () {
      let selectedCountryLeftColumn = document.querySelector('.country-menu')
      let selectedCountryString = selectedCountryLeftColumn.value
      setSelectedCountryName(selectedCountryString)
      let selectedCountryDataArr = countryData.filter(currentCountry => {
        if(currentCountry.Country === selectedCountryString){
          return currentCountry
        }
      })
      let selectedCountryData = selectedCountryDataArr[0]
      setSelectedCountryData(selectedCountryData)
  }

  // Data Manipulation
  // Used to calculate the current active cases, store it in a variable to be converted to a string when being passed in
  const currentActiveCases = globalData.TotalConfirmed - (globalData.TotalRecovered + globalData.TotalDeaths)
  console.log(selectedCountryData)
 
  // JSX
  return (
    <div className="App">
      <Header />
      <br></br>  
      <Message date={currentDate.substring(0, 10)}/>
      <br></br>
      <div className="container">
          <div className="row">
            <Statblock head={'Confirmed Cases'} globalStats={globalData.TotalConfirmed}/>
            <Statblock head={'Recovered'} globalStats={globalData.TotalRecovered}/>
            <Statblock head={'Deaths'} globalStats={globalData.TotalDeaths}/>
            <Statblock head={'Active Cases'} globalStats={currentActiveCases}/>
          </div>      
      </div>
      <br/>
      <div className="row">
          <Leftcolumn countries={countryData} displayNameOnRight={displayCountryNameInRightColumn}/>
          <Rightcolumn 
            selectedCountryName={selectedCountryName}
            selectedCountryData={selectedCountryData}
          />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
