import { useContext, useRef } from "react";
import { Context } from "../../context/context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.text(); // Read response as text first
      if (data.trim() === "") {
        throw new Error("Empty response");
      }
      const jsonData = JSON.parse(data); // Parse JSON if response is not empty
      dispatch({ type: "LOGIN_SUCCESS", payload: jsonData });
    } catch (err) {
      console.error("Login error:", err);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}
