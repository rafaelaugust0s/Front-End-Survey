import React from "react";

const Header=()=>{

    return (
        <div class='container'>
            <div class='row'>
                <div class='col-12'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Taxes</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="/">Customers Info</a>
                                <a className="nav-item nav-link" href="#">Spouse Info</a>
                                <a className="nav-item nav-link" href="#">Dependents Info</a>
                            </div>
                        </div>
                    </nav>
                </div>

                </div>

            </div>




       )
}

export default Header