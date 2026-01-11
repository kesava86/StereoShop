import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProfileNavigate from './Navigation/ProfileNavigate';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Header />
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
    </>
  );
}
