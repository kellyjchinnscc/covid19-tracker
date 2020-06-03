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

function Rightcolumn({selectedCountryName, selectedCountryConfirmed, selectedCountryRecovered, selectedCountryDeaths}) {
    let activeCases = selectedCountryConfirmed - (selectedCountryRecovered + selectedCountryDeaths)

    // JSX
    return(
            <div className="col-md-7 right-col-countrypicker country-picker">
                {selectedCountryName !== '' && <h4>Current Stats for {selectedCountryName}</h4>}
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 block country-block confirmed-cases">
                            <h3>Total Confirmed Cases:</h3>
                            <h4>{selectedCountryConfirmed.toLocaleString()}</h4>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 block country-block recovered-cases">
                            <h3>Total Recovered:</h3>
                            <h4>{selectedCountryRecovered.toLocaleString()}</h4>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 block country-block death-cases">
                            <h3>Total Deaths:</h3>
                            <h4>{selectedCountryDeaths.toLocaleString()}</h4>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    <br/>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 block country-block active-cases">
                            <h3>Total Active Cases: </h3>
                            <h4>{!isNaN(activeCases) && activeCases.toLocaleString()}</h4>
                        </div>
                        <div className="col-md-4"></div>
                    </div>     
            </div>
    )
}
export default Leftcolumn
export{
    Leftcolumn,
    Rightcolumn
}