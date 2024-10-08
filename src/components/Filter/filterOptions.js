// import * as React from "react";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// const FilterOptions = () => {
//   return (
//     <div className="filterOpt-checkCont">
//       <FormGroup>
//         <FormControlLabel control={<Checkbox />} label="Male" />
//       </FormGroup>
//     </div>
//   );
// };

// export default FilterOptions;

import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterOptions = ({ item }) => {
  return (
    <div className="filterOpt-checkCont">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
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
