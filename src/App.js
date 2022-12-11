import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recherche from "./pages/Recherche";
import Accueil from "./pages/Accueil";
import Film from "./pages/Film";
import { useEffect } from "react";
import $ from "jquery";
import Acteurs from "./pages/Acteurs";
import Categories from "./pages/Categories";
import Populaires from "./pages/Populaires";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    function preloader() {
      $("#preloader").delay(0).fadeOut();
    }
    $(window).on("load", function () {
      preloader();
    });
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Accueil />
          </Route>
          <Route path="/Film/:idMovie">
            <Film />
          </Route>
          <Route exact={true} path="/Acteurs">
            <Acteurs />
          </Route>
          <Route exact={true} path="/Categories">
            <Categories />
          </Route>
          <Route exact={true} path="/Populaires">
            <Populaires />
          </Route>
          <Route exact={true} path="/contact">
            <Contact />
          </Route>
          <Route exact={true} path="/Recherche">
            <Recherche />
          </Route>
          <Route exact={true} path="/NotFound">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
