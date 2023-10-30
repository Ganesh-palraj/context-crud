import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Action from "./components/Action";

import "bootstrap/dist/css/bootstrap.min.css";
//import Students from "./components/Home";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import Teacheraction from "./components/Teacheraction";
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
              path="/teachers"
              element={<Teachers  />}
            />
            <Route path="/action/" element={<Action />} />
            <Route
              path="/teacheraction/"
              element={<Teacheraction />}
            />
            <Route path="/action/:id" element={<Action />} />
            <Route path="/teacheraction/:id" element={<Teacheraction />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
