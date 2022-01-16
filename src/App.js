import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Homepage/HomePage";
import Blog from "./pages/Homepage/Blog";
import Contact from "./pages/Homepage/Contact";
import Shop from "./pages/Homepage/Shop";
import SecCategory from "./pages/Homepage/SecCategory";
import Page from "./pages/Homepage/Page";




const App = () => {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
            <Route path="/category/:name" render={(props) => <SecCategory{...props}/>} />
            <Route path="/page" component={Page} />

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
