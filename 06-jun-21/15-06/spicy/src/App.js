import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./data.json";
import About from "./components/About";
import Menu from "./components/Menu";
import Home from "./components/Home";
import ProductInfo from "./components/ProductInfo";
import Products from "./components/Products";
import Soon from "./components/Soon";
function App() {
  return (
    <Router>
      <Menu />
      <h1 className="jumbotron">Online Store</h1>
      <Switch>
        {/* the order of the <Route>components matters!! */}
        {/* <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />  >>> if there a problems*/}
        <Route path="/" exact component={Home} />
        <Route path="/products" component={() => <Products data={Data} />} />
        <Route
          path="/products/:id"
          component={({ match }) => (
            <ProductInfo data={Data} id={match.params.id} />
          )}
        />
        <Route path="/about" component={About} />
        {/* must be last route */}
        <Route path={() => "/main" || "/admin" || "/any-other-word"}>
          <Soon />
        </Route>{" "}
      </Switch>
    </Router>
  );
}

export default App;
