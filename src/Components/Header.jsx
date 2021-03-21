import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">

                    <a className="navbar-brand pt-bold" href="#"><span
                        className="gr-text pt-bold">Mon</span> Extérieur.fr </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="search-container">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                            </form>
                        </div>
                        <a href="#" className="nav-item medium-text">
                            Notre magasins
                        </a>
                        <a href="#" className="nav-item medium-text config">Configurateur</a>


                    </div>
                </nav>
                <div className="banner-container">
                    <img src="/assets/img/644f2a92d0893d909051469bf4dd3f29.png" className="img-fluid" alt=""/>
                </div>
                <nav className="navbar navbar-expand-md navbar-light bg-light nav-2">
                    <div className="collapse navbar-collapse" id="nav-2">
                        <a href="#" className="nav-item medium-text configv">
                            Accueil
                        </a>
                        <Link to="/boutique" className="nav-item medium-text">Boutique</Link>
                        <a href="#" className="nav-item medium-text configv">Nos réalisations</a>
                        <a href="#" className="nav-item medium-text">Contactez-nous</a>


                    </div>
                </nav>
                </header>

            </React.Fragment>


        );
    }
}
export default Header;