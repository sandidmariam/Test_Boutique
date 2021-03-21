import React, {Component} from 'react';
class Contenu extends Component{
    render() {
        return(
            <React.Fragment>
                <section id="rectangleback">

                    <div className="container" >
                        <div className="row gx-0">

                            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos-delay="200">
                               <div className="rectangle1">
                                   <p className="textrec">Configurez votre espace</p>
                                   <p className="textrec2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br/> eirmod tempor invidu.</p>

                                   <img src="/assets/img/008-fence.svg" className="imgrec" alt=""/>
                                   <img src="/assets/img/Groupe 25.svg" className="imgrec2" alt=""/>
                                   <img src="/assets/img/arrow-left-line.svg" className="imgrec3" alt=""/>
                               </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br className="testgris"/>
                <br className="testgris"/>

                {/*    section 6 imagge*/}
                <section id="about" className="about">

                    <div className="container" >
                        <h1>Nos réalisation</h1>
                        <div className="row gx-0">
                            <div className="col-lg-6 d-flex flex-column justify-content-center "
                                 data-aos-delay="200">
                                <img src="assets/img/1e1fc50768fe089201a9d2f194ad33f1.png" className="imgsection3" alt=""/><br/>

                            </div>


                            <div className="col-lg-6 d-flex align-items-center" data-aos-delay="200">

                                <div className="back-img1">
                                    <h1>Panneau bois</h1>
                                    <p className="sectionimg12">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                    </p>
                                    {/*<img src="/assets/img/arrow-left-line.svg" className="imgrec4" alt=""/>*/}
                                    {/*<img src="/assets/img/arrow-left-line.svg" className="imgrec5" alt=""/>*/}

                                </div>
                            </div>




                        </div>
                    </div>

                </section>
            <section id="services" className="services">

            <div className="container" >

                <br className="testgris"/>


                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6"  data-aos-delay="200" style={{width: "352px",
                        height: "352px"}}>
                            <img src="/assets/img/308eb9bbde9f351e6297d201630f01de.svg" className="img-fluid" alt=""/>
                          <p className="heading">Notice &Installation</p><br/>
                          <br/>
                          <br/>
                        <p className="textimg1">Avant de commencer, calculez la quantité de bois, de béton et de quincaillerie dont vous aurez besoin.</p>

                    </div>

                    <div className="col-lg-4 col-md-6"  data-aos-delay="300" style={{width: "352px",
                        height: "352px"}}>
                        <img src="/assets/img/e500199212df6569618a2e3549b80fce.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos-delay="400" style={{width: "352px",
                        height: "352px"}}>
                         <img src="/assets/img/761facd5d3be9159ac1d143a44924e0f.png" className="img-fluid" alt=""/>


                    </div>
                    <div className="img-position">
                        <img src="/assets/img/Groupe 25.svg"  alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6"  data-aos-delay="500" style={{width: "352px",
                        height: "352px"}}>
                        <img src="/assets/img/afdc3dce7588e76f92d58352ab92564b.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-4 col-md-6"  data-aos-delay="600" style={{width: "352px",
                        height: "352px"}}>
                        <img src="/assets/img/f27f6de5647a9ecb5588ec65948ed071.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-4 col-md-6"  data-aos-delay="700" style={{width: "352px",
                        height: "352px"}}>
                        <img src="/assets/img/cc7e9c70feb22a4d36281429e5b05797.png" className="img-fluid" alt=""/>
                    </div>

                </div>

            </div>

        </section>
                <section id="about" className="about">

                    <div className="container" >
                        <div className="row gx-0">

                            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos-delay="200">
                                <img src="assets/img/c49410fcd941eb66349f9dd27fceebaf.png" className="imgsection" alt=""/>

                            </div>


                            <div className="col-lg-6 d-flex align-items-center "
                                 data-aos-delay="200">
                                <img src="assets/img/image.png" className="imgsection2" alt=""/><br/>
                                <div className="back-img">
                                    <p className="sectionimg">
                                        Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                        <br className="testgris"/>

                    <div className="rectangle"></div>
                </section>

            </React.Fragment>);
    }

}
export default Contenu;