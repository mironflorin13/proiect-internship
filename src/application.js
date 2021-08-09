import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import LeftHandPanel from "./components/left-hand-panel/left-hand-panel";
import Navigation from "./utils/navigation.js";
import ContextProvider from "./context/context-provider.js";
import "./application.scss";

function App() {
  return (
    <ContextProvider>
      <Router>
        <LeftHandPanel />
        <div className="cards-overview-container">
          <Navigation />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
