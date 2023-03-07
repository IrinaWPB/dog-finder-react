import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import Nav from './Nav'
import DogList from './DogList'
import DogDetails from './DogDetails'

import DOGS from './dogs.js'

function App() {
  return (
    <div>
      <Nav dogs = {DOGS}/>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={DOGS}/>} />
        <Route path="/dogs/:name" element={<DogDetails dogs={DOGS}/>} />
        <Route path="*" element={<Navigate to='/dogs' />} />
      </Routes>
    </div>
  );
}

export default App;
