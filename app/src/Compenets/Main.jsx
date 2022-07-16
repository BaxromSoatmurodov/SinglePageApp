import "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import NotFound from "../Pages/NotFound";
import Movies from "../Pages/Movies";
import { Route, Switch } from "react-router-dom";

export default function Main() {
  return (
    <div className="MainSection">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contacts" component={Contacts} />
        <Route path="/movie/:id" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
