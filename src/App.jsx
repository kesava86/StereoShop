import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProfileNavigate from "./Navigation/ProfileNavigate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Header onProfileClick={() => setShowLogin(true)} />
      <ProfileNavigate />
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSignupOpen={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onLoginOpen={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}
