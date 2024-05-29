import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";
import {Context} from "../../context/context.js";


export default function SinglePost() {

const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");
const [updateMode, setUpdateMode]=useState(false);
  const PF = "http://localhost:5000/images/";
  const {user}=useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
  const getPost = async () => {
    const res = await axios.get("/posts/" + path);
    setPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
  };
  getPost();
}, [path]);

const handleDelete= async(e)=>{
e.preventDefault();
try{  await  axios.delete("/posts/" + path,{data:{username:user.username}});
window.location.replace("/");
console.log("post deleted succesfully");
}catch(err){
console.log(err);
}
}

const handleUpdate= async (e)=>{
  e.preventDefault();
  try{  await  axios.put("/posts/" + path,{username:user.username, title,desc});
  setUpdateMode(false);
  window.location.reload();
  console.log("post updated succesfully");

  }catch(err){
  console.log(err);
  }

}
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
{updateMode ?<input type="text"  value={title} className="singlePostTitleInput" autofocus onChange={(e)=>{ setTitle(e.target.value)
}} /> : ( <h1 className="singlePostTitle">
    {title}
    {post.username===user?.username&&(<div className="singlePostEdit">
      <i className="singlePostIcon far fa-edit"  onClick={()=>{setUpdateMode(true);}}></i>
      <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
    </div>)}
  </h1>)}


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
{updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>{ setDesc(e.target.value)
}}/> :(
        <p className="singlePostDesc">
        {desc}
        </p> )};

      {updateMode?(< button className="singlePostButton" onClick={handleUpdate}> Update</button>):null}
      </div>
    </div>
  );
}
