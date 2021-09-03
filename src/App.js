import React from 'react'

import Home from './component/Home';
import Find_Country from './component/Find_Country';
import './App.css'
import { BrowserRouter , Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/find-country" component={Find_Country} />

   </Switch>
   </BrowserRouter>
       
        
      

    

      
    </>
  )
}

export default App
