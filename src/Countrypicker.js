import React from 'react'
import './countrypicker.css'

// 2 Components to be exported
function Leftcolumn({countries, displayNameOnRight}) {

    // Javascript Code here
    // JSX
    return(
        <div className="col-md-5 left-col-countrypicker country-picker">
           <h3>Select a country from below to see its most up-to-date COVID Stats</h3>
            <select className="container country-menu" onChange={displayNameOnRight}>
               <option defaultValue="Pick a country" disabled selected>Pick a country!</option>
               {countries.map(country => (
                    <option key={country.CountryCode}>{country.Country}</option>
               ))}
            </select>     
        </div>
    )
}

function Rightcolumn({selectedCountryName, selectedCountryData}) {
    // JSX
    return(
            <div className="col-md-7 right-col-countrypicker country-picker">
                {selectedCountryName !== '' && <h3>Current Stats for {selectedCountryName}</h3>}
                <br/>
                <div className="row">
                    <div className="col-md-4 mr-auto block">
                        <h4>Total Confirmed Cases:</h4>
                        <h4>{selectedCountryData.TotalConfirmed}</h4>
                    </div>
                    <div className="col-md-4 mr-auto block">
                        <h4>Total Recovered:</h4>
                        <h4>{selectedCountryData.TotalRecovered}</h4>
                    </div>
                    <div className="col-md-4 mr-auto block">
                        <h4>Total Deaths:</h4>
                        <h4>{selectedCountryData.TotalDeaths}</h4>
                    </div>
                </div>
               <br/> 
                <div className="row">
                    <div className="col-md-12">
                        <h4>Total Active Cases: </h4>
                        <h4>{selectedCountryName !== '' && selectedCountryData.TotalConfirmed - (selectedCountryData.TotalRecovered + selectedCountryData.TotalDeaths)}</h4>
                    </div>
                </div>     
            </div>
    )
}
export default Leftcolumn
export{
    Leftcolumn,
    Rightcolumn
}