import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Action from "./components/Action";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Students from "./components/Home";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import TeacherAction from "./components/Teacheraction";
import Provider from "./Provider";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Teachers"
              element={<Teachers  />}
            />
            <Route path="/action/" element={<Action />} />
            <Route
              path="/teacheraction/"
              element={<TeacherAction />}
            />
            <Route path="/action/:id" element={<Action />} />
            <Route path="/teacheraction/:id" element={<TeacherAction />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
