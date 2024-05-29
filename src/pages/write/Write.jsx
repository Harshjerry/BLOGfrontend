import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../context/context.js";
import "./write.css";

export default function Write() {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const baseApiUrl = "https://blogbackend-nd5j.onrender.com/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };
  
    if (file) {
      const formData = new FormData();
      const fileName = Date.now() + file.name;
      formData.append("name", fileName);
      formData.append("file", file);
      newPost.photo = fileName;
  
      try {
        await fetch(`${baseApiUrl}/upload`, {
          method: "POST",
          body: formData,
        });
      } catch (err) {
        console.log("Error occurred while uploading:", err);
      }
    }
  
    try {
      const res = await fetch(`${baseApiUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await res.json();
      navigate("/post/" + data._id);
    } catch (err) {
      console.log("Error occurred while posting:", err);
    }
  };
  

  return (
    <div className="write">
      {file && <img className="writeImg" src={URL.createObjectURL(file)} alt="" />}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />

          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="writeFormGroup">
        <input
  className="writeInput1"
  placeholder="Categories (comma- or space-separated)"
  type="text"
  onChange={(e) => {
    setCategories(
      e.target.value
        .split(/[,\s]+/) // split by commas or spaces
        .map((cat) => cat.trim())
        .filter((cat) => cat !== "") // filter out empty strings
    );
  }}
/>
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
