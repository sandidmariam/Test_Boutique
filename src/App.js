import React,{Component} from 'react';

import home from '../src/pages/home';
import boutique from '../src/Components/boutique';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";




class App extends Component {


  render() {
    return (
        <div>
            <Router>

                <div>
                    {/*{!props.loading ?}*/}
                    <Switch>
                        <div>
                            <Route exact path='/' component={home} />
                            <Route exact path='/boutique' component={boutique}/>



                        </div>
                    </Switch>
                </div>
            </Router>
        </div>
    );
  }


}

export default App;
