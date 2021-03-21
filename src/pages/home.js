import React,{Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contenu from "../Components/Contenu";
import Section1 from "../Components/Section1";



class Home extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Section1/>
                <Contenu/>
                <Footer/>

            </div>
        )
    }
}
export default Home;
