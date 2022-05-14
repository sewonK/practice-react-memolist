import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function CreateMemoPage() {
  const [title, setTitle] = useState("title");
  const [content, setContent] = useState("content");
  const navigate = useNavigate();

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateContent = (e) => {
    setContent(e.target.value);
  };

  const saveData = () => {
    const saved = localStorage.getItem("memoList");
    //초기에 undefined일 수도 있기 때문에 || [] (or array)
    const currentMemoList = JSON.parse(saved) || [];

    currentMemoList.push({
      title: title,
      content: content,
      id: parseInt(Math.random() * 10000)
    });
    localStorage.setItem("memoList", JSON.stringify(currentMemoList));
  };

  const onClickHandle = (e) => {
    saveData();
    navigate("/memoList");
  };

  return (
    <div className="App">
      <br />
      <TextField label="title" value={title} onChange={(e) => updateTitle(e)} />
      <br />
      <TextField
        multiline
        rows={5}
        required
        id="content"
        label="content"
        defaultValue=""
        value={content}
        onChange={(e) => updateContent(e)}
      />
      <br />
      <button onClick={(e) => onClickHandle(e)}> create </button>
    </div>
  );
}
