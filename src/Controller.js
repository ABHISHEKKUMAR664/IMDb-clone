import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Header from "./components/common/header/Header";
import Anime from "./components/screens/anime/Anime";
import Movies from "./components/screens/movies/Movies";
import Series from "./components/screens/series/Series";

const Controller = () =>{
    return(
         
             
            <Router>
                <Header/>
                <Switch>
                   
                    <Route exact path="/" render={() => <Movies/>} />
                     <Route path="/series" render={() => <Series/>} />
                     <Route path="/anime" render={ () => <Anime/>} />
                </Switch>
            </Router>
           
    )
}
export default Controller;