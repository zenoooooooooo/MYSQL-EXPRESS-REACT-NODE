import React from "react";
import { Home, Form, Edit } from "./pages";
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<Form />} />
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </>
  );
};

export default App;
