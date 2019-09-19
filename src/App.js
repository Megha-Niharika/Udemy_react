 import React from 'react';
//import logo from './logo.svg';
 import './index.css';
 

 function App(props)
 {
   return(
     <div className="person">
       <h1>{props.name}</h1>
       <p>{props.age}</p>
       </div>
   )
 }

 export default App;

