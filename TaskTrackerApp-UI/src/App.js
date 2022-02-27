import React from "react";
import "./styles/App.css";
import "./styles/css.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./auth/signIn";
import SignOut from "./auth/signOut";

import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="auth">
            <Route path="signIn" element={<SignIn />} />
            <Route path="signOut" element={<SignOut />} />
          </Route>

          <Route path="DashBoard" element={<Dashboard />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
