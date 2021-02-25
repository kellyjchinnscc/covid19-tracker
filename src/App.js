import React from 'react';
import './App.css';
import {Header, Footer} from './HeaderFooter'
import {Message, Statblock} from './Globalstats'
import {Leftcolumn, Rightcolumn} from './Countrypicker'
import { useState, useEffect } from 'react';

function App() {
 
 // State Management and Initialization
  const[globalData, setGlobalData] = useState({});
  const[currentDate, setCurrentDate] = useState('');
  const[countryData, setCountryData] = useState([]);
  const[selectedCountryName, setSelectedCountryName] = useState('')
  const[selectedCountryData, setSelectedCountryData] = useState()
  const[selectedCountryConfirmed, setSelectedCountryConfirmed] = useState(0)
  const[selectedCountryRecovered, setSelectedCountryRecovered] = useState(0)
  const[selectedCountryDeaths, setSelectedCountryDeaths] = useState(0)

 // API Fetching
  const getData = async () => {
    try{
      const response = await fetch('https://api.covid19api.com/summary')
      const data = await response.json()
      const globalStats = data.Global
      setGlobalData(globalStats)
      setCurrentDate(data.Date)
      setCountryData(data.Countries)
    }catch(err){
      document.write(`Please refresh the page. If you're seeing this lackluster webpage, it's because there was an error loading the data! The API is likely down -.-. Just refresh a few times and the REAL page should show up! ^.^`)
    }
  }
  useEffect( () => { // Calling useEffect to use the getData function to make sure the data isn't fetched hundreds of times
    getData()
  }, [])
 
 // Func Decl and Impl
 // This function displays all of the stats and name of the selected country in the right pane
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
      let countryBlocks = document.querySelectorAll('.country-block')
      countryBlocks.forEach(block => {block.setAttribute('style', 'display: initial')})
      setSelectedCountryConfirmed(selectedCountryData.TotalConfirmed)
      setSelectedCountryRecovered(selectedCountryData.TotalRecovered)
      setSelectedCountryDeaths(selectedCountryData.TotalDeaths)
  }

  // Data Manipulation
  // Used to calculate the current active cases, store it in a variable to be converted to a string when being passed in
  const currentActiveCases = globalData.TotalConfirmed - (globalData.TotalRecovered + globalData.TotalDeaths)
  
  // JSX
  return (
    <div className="App">
      <Header /> 
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
            selectedCountryConfirmed={selectedCountryConfirmed}
            selectedCountryRecovered={selectedCountryRecovered}
            selectedCountryDeaths={selectedCountryDeaths}
          />
      </div>
      <Footer/>
    </div>
  );
}
export default App;