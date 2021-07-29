import React from 'react';
import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Index from './Componets/Index';
import Signin from './Componets/Signin'
import { Route, Switch} from "react-router-dom";
import Buses from './Componets/Admin/Buses';
import Dates from './Componets/Admin/Dates';
import Home from './Componets/Admin/Home';
import Success from './Componets/Success';



function App() {
  return (
    <div  className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/admin" exact component={Signin} />
        <Route path="/admin/home" component={Home}/>
        <Route path="/admin/buses" component={Buses} />
        <Route path="/admin/dates" component={Dates} />
        <Route path="/success" component={Success} />
        
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
