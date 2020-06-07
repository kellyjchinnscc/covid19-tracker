import React from 'react'
import './header.footer.styles.css'
function Header() {
    // JSX
    return (
        // <div className="Header">
            <div className="row Header">
                <div className="col-sm-12">
                    <h1>COVID-19 Tracker</h1>
                </div>
            </div>
      
    )
}

function Footer() {
    // JSX
    return (
        
            <div className="row Footer">
                <div className="col-sm-12">
                    <h1>Kelly Chin | Web Developer | API - <a href="https://covid19api.com/">https://covid19api.com/</a></h1>
                </div>
            </div>
     
    )
}
export default Header
export{
    Header,
    Footer
}