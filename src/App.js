//this app.jsx is the place where context api was made so that import createContext is done
//similarly jun thau ma createContext banayo tei thau ma provider pani use garera value pass garnu parchha




import './App.css';
import React from 'react';
import { createContext } from 'react';
import ChildA from './components/ChildA';
export const userContext = createContext();
function App() {
  return (
    <div className="App">
      <userContext.Provider value={"coding"}>
        <ChildA/>
      </userContext.Provider>
    </div>
  );
}

export default App;
