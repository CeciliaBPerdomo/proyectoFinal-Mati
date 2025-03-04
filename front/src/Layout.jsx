import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import { Home } from "../src/pages/Home";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Profile  from "./pages/Profile";
import { SearchEvent } from "./pages/SearchEvent";
import { CreateEvent } from "./pages/CreateEvent";
import NavBar from "./components/NavBar";
import PrivateRoute from "./pages/PrivateRoute";

export const Layout = () => {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/searchevent" element={<SearchEvent />} />
        <Route path="/createevent" element={<CreateEvent />} />
      </Routes>
    </AuthProvider>
  );
};
