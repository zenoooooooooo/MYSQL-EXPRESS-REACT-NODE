import React from "react";
import { Home } from "./pages";
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Edit" element={<></>}/>
      </Routes>
    </>
  );
};

export default App;
