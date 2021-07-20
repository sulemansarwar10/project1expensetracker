import React from 'react';
import Child from "./Child";
import { ContextProvider } from './transContext';


function App() {
  return (
    <ContextProvider>
    
     <Child />   
      
   
  </ContextProvider>
  );
}

export default App;
