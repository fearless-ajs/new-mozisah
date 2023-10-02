import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import About from "./components/About";

import Testimonial from "./components/Testimonial";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import WhyMozisha from "./components/WhyMozisha";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/testimonials" element={<Testimonial />} />
          </Route>
            <Route path="/whyMozisha" element={<WhyMozisha />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>

      
        <Footer />
      </Router>
    </div>
  );
}

export default App;
