import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
//import Sidebar from "../../components/sidebar/Sidebar";
import Newsletter from "../../components/newsletter/Newsletter";
import CategoryBar from "../../components/categoryBar/CategoryBar";
import Front from "../../components/Front2/Front2";
import Parallax from "../../components/Parallax/parallax";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router";


export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+ search );
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      
    <Front/>
    <CategoryBar/>
      <div className="home">
        <Posts posts={posts} />
      </div>
      <Parallax/>
      <Newsletter/>

    </>
  );
}
