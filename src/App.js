import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import './App.scss'

import Mainpage from "./pages/Mainpage";
import ProductPage from "./pages/ProductPage";
import Cart from './components/Cart'
import Navbar from './components/Navbar/Navbar'
import ProductsPage from './pages/ProductsPage'
import About from './components/Homepage/About'
import Grid from './components/Homepage/Grid'
import Contact from './components/Homepage/Contact'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ShopProvider from "./context/shopContext";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <Navbar />
          <Cart />
          <Switch>
          <Route exact path="/">
              <Mainpage />
              <About />
              <Grid />
              <Contact />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
          </Switch>
        </Router>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
