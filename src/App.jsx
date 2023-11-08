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

import Footer from "./components/Footer";

import TalentSignUp from "./components/TalentSignUp";
import Dashboard from "./components/Dashboard";
import WorkInProgress from "./components/WorkInProgress";
import Business from "./components/Business";
import SuccessPage from "./components/SuccessPage";
import { ToastContainer } from "react-toastify";
import ForTalents from "./components/ForTalents";
import Students from "./components/Students";
import RegistrationForm from "./components/RegistrationForm";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Homes from "./pages/Homes";
import EditPost from "./pages/EditPost";
import FullPost from './pages/FullPost'
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
            {/* <Route path="/login" element={<TalentLogin />} /> */}
            <Route path="/signup" element={<TalentSignUp />} />
            <Route path="/business" element={<Business />} />
            <Route path="/dashboard" element={<Dashboard />} />{" "}
            <Route path="/students" element={<Students />} />
            {/* <Route path="/freelancer-signup" element={<FreelancerSignUp />} /> */}
            <Route path="/workinprogress" element={<WorkInProgress />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/fortalents" element={<ForTalents />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/blog" element={<Homes isAuth={isAuth} />} />
            <Route
              path="/createpost"
              element={<CreatePost isAuth={isAuth} />}
            />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/edit-post/:postId" element={<EditPost />} />
          </Route>
           {/* Add a new route for displaying full posts */}
           <Route path="/full-post/:postId" element={<FullPost isAuth={isAuth}/>} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>{" "}
      <ToastContainer autoClose={2000}/>
      <div
        className="fixed top-[80%] md:right-16 right-4 z-40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <a href="https://wa.me/+27824277902" target="_blank" rel="noreferrer">
          <div className="relative">
            <FaWhatsapp
              data-aos="zoom-in"
              className="hover:text-green-500 w-8 h-8 text-green-600 font-extrabold cursor-pointer"
            />
            {isHovered && (
              <div className="absolute text-[10px] text-black mb-4 rounded-md  bottom-full">
                Contact us now!
              </div>
            )}
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
