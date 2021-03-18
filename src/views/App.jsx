import React, { useState } from "react";
import "./App.css";
import Content from "../components/layout/Content";
import DataContext, { data } from "../data/dataContext";
import Menu from "../components/layout/Menu";

import { BrowserRouter as Router } from "react-router-dom";
import Store from "../data/Store";

const App = (props) => {
  const [state, setState] = useState(data);
  return (
    <Store>
        <DataContext.Provider value={{state, setState}}> 
        <div className="App">
            <Router>
            <Menu />
            <Content />
            </Router>
        </div>
        </DataContext.Provider>
    </Store>
  );
};

export default App;
