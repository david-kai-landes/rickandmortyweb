import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const StyledAccordion = styled(Accordion)({
  backgroundColor: "#1e1e1e", // Dark background
  color: "#00ff00", // Neon green text
  fontWeight: "bold",
  fontSize: 24,
  width: "60%", // Custom width of 400px
  boxShadow: "0 0 15px #00ff00", // Neon glow effect
  "&:hover": {
    boxShadow: "0 0 20px #00ff00",
  },
  "& .MuiAccordionSummary-root": {
    backgroundColor: "#333", // Darker background for summary
    "&:hover": {
      backgroundColor: "#444", // Hover effect on summary
    },
  },
  "& .MuiAccordionDetails-root": {
    backgroundColor: "#000", // Black background for details
    color: "#00ff00", // Matching neon green text
  },
  "& .Mui-expanded": {
    color: "#00cc00", // Lighter green when expanded
  },
});

const Species = () => {
  return (
    <div className="species-mainContainer">
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#00ff00" }} />} // Neon green icon
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Species
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default Species;
