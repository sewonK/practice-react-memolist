import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemoListPage = () => {
  //1. local Storage data fetch

  //2. rendering...
  const navigate = useNavigate();

  const [memoList, setMemoList] = useState(() => {
    const saved = localStorage.getItem("memoList");
    return JSON.parse(saved) || [];
  });

  const moveToMemo = (id) => {
    navigate("/memo/" + id);
  };
  return (
    <>
      {memoList.map((x) => {
        return (
          <>
            title: {x.title}
            <br />
            content: {x.content}
            <br />
          </>
        );
      })}
    </>
  );
};

export default MemoListPage;
