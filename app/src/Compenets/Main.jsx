import "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import NotFound from "../Pages/NotFound";
import Recipe from "../Pages/Recipe";
import Category from "../Pages/Category";
import { Route, Switch } from "react-router-dom";

export default function Main() {
  return (
    <div className="MainSection">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contacts" component={Contacts} />
        <Route path="/Category/:name" component={Category} />
        <Route path="/recipe/:id" component={Recipe} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
