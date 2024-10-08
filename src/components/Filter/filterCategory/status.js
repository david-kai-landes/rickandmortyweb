import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import FilterOptions from "../filterOptions";

const StyledAccordion = styled(Accordion)({
  backgroundColor: "#1e1e1e",
  color: "#00ff00",
  fontWeight: "bold",
  fontSize: 24,
  // width: "60%",
  margin: "0 auto",
  boxShadow: "0 0 15px #00ff00",
  "&:hover": {
    boxShadow: "0 0 20px #00ff00",
  },
  "& .MuiAccordionSummary-root": {
    backgroundColor: "#333",
    "&:hover": {
      backgroundColor: "#444",
    },
  },
  "& .MuiAccordionDetails-root": {
    backgroundColor: "#000",
    color: "#00ff00",
  },
  "& .Mui-expanded": {
    color: "#00cc00",
  },
});

const Status = ({ setStatus, setPageNumber }) => {
  let status = ["Alive", "Dead", "unknown"];
  return (
    <div className="status-mainContainer">
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#00ff00" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Status
        </AccordionSummary>
        <AccordionDetails className="accordionDetails">
          {status.map((item, index) => (
            <FilterOptions
              setStatus={setStatus}
              setPageNumber={setPageNumber}
              key={item}
              index={index}
              item={item}
            />
          ))}
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default Status;
