import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context.js";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Front from "./components/Front/Front.jsx";
import Write from "./pages/write/Write";
import "./app.css";

function App() {
  const { user } = useContext(Context);
  const location = useLocation();

  return (
    <Router>
      <Topbar />
      {location.pathname === "/" && <Front />}
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
    </Router>
  );
}

export default App;
//
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ContextProvider } from "./context/context.js";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
