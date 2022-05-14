import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const MemoPage = () => {
  let { id: memoId } = useParams();
  const navigate = useNavigate();

  const savedMemoList = localStorage.getItem("memoList");
  const parsedList = JSON.parse(savedMemoList) || [];
  const item = parsedList.find((x) => x.id === parseInt(memoId));

  const [title, setTitle] = useState(() => {
    return item.title;
  });
  const [content, setContent] = useState(() => {
    return item.content;
  });

  const editMemo = () => {
    const idx = parsedList.findIndex((x) => x.id === parseInt(memoId));
    parsedList[idx].title = title;
    parsedList[idx].content = content;

    localStorage.setItem("memoList", JSON.stringify(parsedList));
    navigate("/memoList");
  };

  const deleteMemo = () => {
    if (window.confirm("Do you want to delete this memo?")) {
      const idx = parsedList.findIndex((x) => x.id === parseInt(memoId));

      parsedList.splice(idx, 1);
      localStorage.setItem("memoList", JSON.stringify(parsedList));
      navigate("/memoList");
      alert("deleted");
    }
  };

  return (
    <>
      <TextField
        value={title}
        required
        id="title"
        label="Title"
        defaultValue=""
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <TextField
        multiline
        rows={5}
        required
        id="content"
        label="content"
        defaultValue=""
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button variant="contained" color="primary" onClick={editMemo}>
          Save
        </Button>
        <Button variant="contained" color="primary" onClick={deleteMemo}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default MemoPage;
