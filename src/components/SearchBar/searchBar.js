import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "../../Styling/searchBar.css";

const SearchBar = ({ setPageNumber, setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (setSearch) {
      setPageNumber(1);
      setSearch(event.target.value);
    }
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Character Name"
      value={searchTerm}
      onChange={handleChange}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              style={{
                color: "#288D28",
                fontSize: "2rem",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: "#1e1e1e",
        input: { color: "#ffffff" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#00ff00",
          },
          "&:hover fieldset": {
            borderColor: "#00cc00",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#00ff00",
          },
        },
      }}
    />
  );
};

export default SearchBar;
