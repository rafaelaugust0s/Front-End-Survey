import React from "react";
const Header=()=>{

    return (
        <div class='container-header t'>
            <div class='row'>
                <div class='col-12 header '>
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <a className="navbar-brand" href="#">Taxes</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link text-white" href="/MyForm">Customers Info</a>
                                <a className="nav-item nav-link text-white" href="#">Spouse Info</a>
                                <a className="nav-item nav-link text-white" href="#">Dependents Info</a>
                            </div>
                        </div>
                    </nav>
                </div>

                </div>

            </div>




       )
}

export default Header