import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header1 from "./components/Header1.jsx";
import "./styles/app.scss";
import "./styles/Header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return(
    <>
      <Router>
        <Header1/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
