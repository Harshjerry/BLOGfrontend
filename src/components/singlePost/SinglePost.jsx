import { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./singlePost.css";
import { Context } from "../../context/context.js";
import { useNavigate } from "react-router-dom";

export default function SinglePost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "https://blogbackend-nd5j.onrender.com/images/";
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`https://blogbackend-nd5j.onrender.com/api/posts/${path}`);
      const data = await res.json();
      setPost(data);
      setTitle(data.title);
      setDesc(data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://blogbackend-nd5j.onrender.com/api/posts/${path}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: user.username }),
      });
      navigate("/");
      console.log("post deleted successfully");
    } catch (err) {
      console.log(err);
    }
  };
  
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://blogbackend-nd5j.onrender.com/api/posts/${path}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: user.username, title, desc }),
      });
      setUpdateMode(false);
      console.log("post updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && <img src={PF + post.photo} alt="" className="singlePostImg" />}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/posts?username=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode ? <button className="singlePostButton" onClick={handleUpdate}>Update</button> : null}
      </div>
    </div>
  );
}
