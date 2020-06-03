import React from 'react';
import './globalstats.css'
// This Component will have not one but TWO stateless component functions!
function Message({date}) {
    return(
        <div className='headline'>
            <div className="row">
                <div className="col-12"> 
                    <h1>Global Stats as of {date}</h1>
                </div>
            </div>
        </div>
    )
}

function Statblock({head, globalStats }){
    
    return(
        <div className="col-auto mr-auto block global-block">
                <h5>Total {head}:</h5>
                <strong>{!isNaN(globalStats) && globalStats.toLocaleString()}</strong>
        </div>
    )
}

export default Message
export{
    Message,
    Statblock
}