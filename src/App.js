import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./app.css";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
