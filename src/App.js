import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import CreatePlant from './components/CreatePlant';
import ShowPlantList from './components/ShowPlantList';
import ShowPlantDetails from './components/ShowPlantDetails';
import UpdatePlantInfo from './components/UpdatePlantInfo';


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<ShowPlantList/>} />
          <Route path='/create-plant' element={<CreatePlant/>} />
          <Route path='/edit-plant/:id' element={<UpdatePlantInfo/>} />
          <Route path='/show-plant/:id' element={<ShowPlantDetails/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;



