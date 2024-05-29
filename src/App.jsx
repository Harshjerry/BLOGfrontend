import React from "react";
import {  Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context.js";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import "./app.css";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Topbar />
      <Routes>
        <Route
          path="/"
          element={
              <Homepage />
          }
        />
        <Route
          path="/register"
          element={user ? <Homepage /> : <Register />}
        />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
