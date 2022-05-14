import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const MemoListPage = () => {
  const navigate = useNavigate();

  //1. local Storage data fetch
  const [memoList, setMemoList] = useState(() => {
    const saved = localStorage.getItem("memoList");
    return JSON.parse(saved) || [];
  });

  //2. rendering...
  const moveToMemo = (id) => {
    navigate("/memo/" + id);
  };

  return (
    <>
      <button onClick={(e) => navigate("/createMemo")}>
        go to create a new memo!
      </button>

      {memoList.map((x) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1">
                {x.title}[{x.id}]
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <IconButton onClick={(e) => moveToMemo(x.id)}>
                <EditOutlinedIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2">{x.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default MemoListPage;
