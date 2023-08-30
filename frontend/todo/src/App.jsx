//REACT

//REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTES
import Home from "./components/pages/Home";
import Todo from "./components/pages/Todo";

//LAYOUT
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

//CSS
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Todo" element={<Todo />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
