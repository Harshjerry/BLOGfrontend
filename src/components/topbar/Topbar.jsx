import { Link } from "react-router-dom";
import "./topbar.css";
import {useContext} from "react";
import {Context} from "../../context/context.js";

export default function Topbar() {
  const{user,dispatch} = useContext(Context);


  const handleLogOut= ()=>{
dispatch({type:"LOGOUT"});
};

  return (
    <div className="top">
      <div className="topLeft">
      HARSH
      </div>
      <div className="topCenter">
      <div className="Whitebar">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem"  onClick={handleLogOut}>LOGOUT</li>}
        </ul>
        </div>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
