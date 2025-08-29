import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from "./components/Navbar/Layout";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Errorpage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/Private/PrivateRoute";
import PreventLoggedInRoute from "./components/Private/PreventLoggedInRoute";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <PreventLoggedInRoute>
              <Login />
            </PreventLoggedInRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PreventLoggedInRoute>
              <Register />
            </PreventLoggedInRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndPrivacy />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
