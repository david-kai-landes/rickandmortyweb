import React from "react";
import "../../Styling/pages.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

//------------------------------------------------------------//
const ShakeButton = styled(Button)({
  background: "linear-gradient(45deg, #00ff00, #1e1e1e, #00131a)",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  textTransform: "uppercase",
  transition: "0.2s",
  "&:hover": {
    animation: "shake 0.5s infinite",
  },
  "@keyframes shake": {
    "0%, 100%": {
      transform: "translateX(0)",
    },
    "25%": {
      transform: "translateX(-4px)",
    },
    "50%": {
      transform: "translateX(4px)",
    },
    "75%": {
      transform: "translateX(-4px)",
    },
  },
});

export default function Pages({ pageNumber, setPageNumber }) {
  const next = () => {
    setPageNumber((val) => val + 1);
  };
  const prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((val) => val - 1);
  };

  return (
    <div className="shakeButton-Container">
      <ShakeButton onClick={prev} variant="contained">
        Prev
      </ShakeButton>
      <ShakeButton onClick={next} variant="contained">
        Next
      </ShakeButton>
    </div>
  );
}
