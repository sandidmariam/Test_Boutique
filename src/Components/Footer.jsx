import React, {Component} from "react";

class Footer extends Component{
    render() {
        return(
            <React.Fragment>

            <footer id="footer" className="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <div className=" align-items-center">

                                   <span
                                       className="gr-text2 pt-bold">Mon</span> <span className="gr-text3"> Extérieur.fr</span> </div>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Lien Utiles</h4>
                                <ul>
                                    <li><i className="bi "/> <a href="#">Configurateur</a></li>
                                    <li><i className="bi "/> <a href="#">Notre magasin</a></li>
                                    <li><i className="bi "/> <a href="#">Notice et installation</a></li>
                                    <li><i className="bi "/> <a href="#">Livraison Transport</a></li>

                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Nous Contacter</h4>
                                <ul>
                                    <li><i className="bi "/> <strong>adresse :</strong></li>
                                    <li><i className="bi"/> <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p></li>
                                    <li><i className="bi "/> <strong>Telephone :</strong></li>
                                    <li><i className="bi"/> <p>+33 2 43 57 00 87</p></li>

                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Horaires</h4>
                                <ul>
                                    <li><i className="bi "/> <strong>lundi a vendredi</strong></li>
                                    <li><i className="bi"/> <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p></li>
                                    <li><i className="bi "/> <strong>Telephone :</strong></li>
                                    <li><i className="bi"/> <p>+33 2 43 57 00 87</p></li>

                                </ul>

                            </div>

                        </div>
                    </div>
                </div>


            </footer>
            </React.Fragment>
        );
    }
}
export default Footer;