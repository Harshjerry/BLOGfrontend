import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
//import Sidebar from "../../components/sidebar/Sidebar";
import Newsletter from "../../components/newsletter/Newsletter";
import CategoryBar from "../../components/categoryBar/CategoryBar";
import Front from "../../components/Front2/Front2";
import Parallax from "../../components/Parallax/parallax";
import "./homepage.css";
import { useLocation } from "react-router";


export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://blogbackend-nd5j.onrender.com/api/posts${search}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
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
