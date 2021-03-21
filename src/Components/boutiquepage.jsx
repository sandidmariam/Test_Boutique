import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import PhotoContainer from "./PhotoContainer";
class Boutiquepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          photos:[]
        };
    }

    componentDidMount() {

        /*global fetch */
        fetch('https://api.mocki.io/v1/af37df01')
            .then(response => {
                console.log('response', response);
                if (!response.ok) {
                    throw Error("Error fetching");
                }
                return response.json().then(allData=>{
                    this.setState({photos:allData});
                })
                    .catch(err=>{
                        throw Error(err.message);
                    })
            });
    }
    render() {

        return(
            <React.Fragment>
                <Header/>
<section><PhotoContainer photos={this.state.photos}/></section>
                <h14>hello</h14>
            <Footer/>
            </React.Fragment>
        );
    }
}export default Boutiquepage