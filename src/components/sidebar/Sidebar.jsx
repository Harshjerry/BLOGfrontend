import axios from "axios";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {useState,useEffect} from "react";

export default function Sidebar() {


  const [cats, setCats] = useState([]);

  useEffect(() => {
  const getCat = async () => {
    const res = await axios.get("/categories");
    setCats(res.data);
  };
  getCat();
}, []);



  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.blogs.es/89f3c1/kendall-jenner-polemica/1366_2000.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>

        <ul className="sidebarList">
                {cats.map((c) => (
                  <Link to={`/?cat=${c.name}`} className="link">
                  <li className="sidebarListItem">{c.name}</li>
                  </Link>
                ))}
              </ul>
    
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
