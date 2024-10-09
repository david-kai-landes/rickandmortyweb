import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterOptions = ({ item, setStatus, setPageNumber, setGender }) => {
  //
  const [checked, setChecked] = useState(false);
  //
  const handleFilterChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    if (setStatus) {
      setStatus(isChecked ? item : "");
    }
    if (setGender) {
      setGender(isChecked ? item : "");
    }
    setPageNumber(1);
  };
  //
  return (
    <div className="filterOpt-checkCont">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleFilterChange}
              sx={{
                color: "#30d5c8",
                "&.Mui-checked": {
                  color: "#30d5c8",
                },
                "&:hover": {
                  boxShadow: "0 0 10px #00ff00",
                },
              }}
            />
          }
          label={item}
          sx={{
            color: "#30d5c8",
            "& .MuiFormControlLabel-label": {
              fontWeight: "bold",
            },
          }}
        />
      </FormGroup>
    </div>
  );
};

export default FilterOptions;
