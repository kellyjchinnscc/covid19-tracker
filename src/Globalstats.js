import React from 'react';
import './globalstats.css'
// This Component will have not one but TWO stateless component functions!

function Message() {
    return(
        <div className='headline'>
            <h1>Global Stats</h1>
        </div>
    )
}

// TO DO - MUST FIND WAY TO SPACE OUT BLOCKS!
function Statblock({head}){
    return(
        <div className="col-auto mr-auto block">
                <h4>Total {head}:</h4>
                <h4>Placeholder</h4>
        </div>
    )
}

export default Message
export{
    Message,
    Statblock
}