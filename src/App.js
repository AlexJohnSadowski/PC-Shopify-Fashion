import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();



function App() {
  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <Router>
        <Route path='/'>
          <Homepage />
        </Route>
        <Route path='/product'>

        </Route>
      </Router>
    </StyletronProvider>
      

  );
}

export default App;
