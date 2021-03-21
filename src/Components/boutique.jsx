import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
class Boutique extends Component{
    render() {
        return(
            <React.Fragment>
                <Header/>

                <section id="portfolio" className="portfolio">
                    {/*<div>*/}
                    {/*    <div className="navvv">*/}

                    {/*        <p>CATÉGORIES</p> <br/><hr/>*/}
                    {/*        <div className="p1">*/}
                    {/*        <p >Lame Composite</p></div> <br/><hr/>*/}
                    {/*        Fonctions utiles<br/>*/}
                    {/*        Publications<br/>*/}

                    {/*    </div>*/}

                    {/*</div>*/}
            <div className="container" >
                <div className="row gy-4 portfolio-container"  data-aos-delay="200">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="assets/img/a0bf6d779fc943f48a5539a86eeae534.png" alt="Card image cap"/>
                            <div className="card-body">

                                <p className="card-text">Lame terrasse bois Pin Sylvestre traité classe 4 </p><br/>
                                <p className="detail">39,89 € ML</p>

                            </div>
                        </div>
                    </div>




                </div>

            </div>

        </section>
                <Footer/>
            </React.Fragment>);
    }
}
export default Boutique;