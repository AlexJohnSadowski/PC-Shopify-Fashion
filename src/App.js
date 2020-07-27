import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import './App.scss'

import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import ProductsPage from './pages/ProductsPage'

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
              <Homepage />
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
