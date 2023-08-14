import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header1 from "./components/Header1.jsx";
import "./styles/app.scss";
import "./styles/Header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/Contact.scss";
import "./styles/services.scss";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
function App() {
  return(
    <>
      <Router>
        <Header1/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
