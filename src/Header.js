import React from 'react'
import './header.footer.styles.css'
function Header() {
    // JSX
    return (
        <div className="Header">
            <div className="row">
                <div className="col-12 left-col">
                    <h1>COVID-19 Tracker</h1>
                </div>

                {/* <div className="col-4 right-col">
                    <h1>Possible Curve Chart!</h1>
                </div> */}
            </div>
        </div>
    )
}
export default Header