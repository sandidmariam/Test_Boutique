import React, {Component} from 'react';
class Section1 extends Component{
    render() {
        return( <section id="hero">

            <div className="row">
                <div className="col">

                    <div className="contain">

                        <img src="/assets/img/img.png" className="test " style={{marginLeft:"5rem"}} alt=""/>
                        <div className="overlay">
                            <div className="text-block">
                                <p>Lame<br/> commposite</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">

                    <img src="/assets/img/img1.png" style={{marginLeft:"3rem"}}  alt=""/>
                    <div className="overlay1">
                        <div className="text-1">
                            <p>Lame en bois</p>
                        </div>
                    </div>

                </div>
                <div className="col">

                    <img src="/assets/img/img2.png" style={{marginLeft:"2rem"}} alt=""/>
                    <div className="text-2">
                        <p>Panneau bois</p>
                    </div>
                </div>
                <div className="col">

                    <img src="/assets/img/img3.png"  className="img-fluid1" alt=""/>
                    <div className="text-3">
                        <p>Grille rigide</p>
                    </div>
                </div>
                <div className="col">

                    <img src="/assets/img/img4.png" style={{marginLeft:"-2rem"}} alt=""/>
                    <div className="text-4">
                        <p>Gabion</p>
                    </div>
                </div>
            </div>

        </section>);
    }
}export default Section1;