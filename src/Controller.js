import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Movies from "./components/screens/movies/Movies";
import Series from "./components/screens/series/Series";

const Controller = () =>{
    return(
            <Router>
                <Switch>
                   
                    <Route exact path="/" render={() => <Movies/>} />
                     <Route path="/series" render={() => <Series/>} />
                </Switch>
            </Router>
    )
}
export default Controller;