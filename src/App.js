import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./common/Footer";
import ListaPersonajes from "./components/ListaPersonajes";

function App() {

  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Switch>
            <Route exact path="/">
              <ListaPersonajes />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
