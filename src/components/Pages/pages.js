import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../../Styling/pages.css";

export default function Pages({ info, pageNumber, setPageNumber }) {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={info?.pages}
        size="large"
        page={pageNumber}
        onChange={(event, value) => setPageNumber(value)}
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: "#1e1e1e",
            color: "#00ff00",
            borderRadius: "50%",
            boxShadow: "0 0 10px #00ff00",
            "&:hover": {
              backgroundColor: "#333",
              boxShadow: "0 0 15px #00ff00",
            },
            "&.Mui-selected": {
              backgroundColor: "#00ff00",
              color: "#000",
              boxShadow: "0 0 20px #00ff00",
              "&:hover": {
                backgroundColor: "#00cc00",
              },
            },
          },
        }}
      />
    </Stack>
  );
}
