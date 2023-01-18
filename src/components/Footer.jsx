import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import "../styles/content.scss";
function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#212b36",
          width: "100%",
          padding: "64px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="60px"
            fill="none"
            viewBox="0 0 512 512"
          >
            <ellipse
              cx="405.143"
              cy="338.571"
              fill="#FA541C"
              rx="82.857"
              ry="82.857"
            ></ellipse>
            <path
              fill="#fff"
              d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
            ></path>
          </svg>

          <Typography className="new-small" sx={{ marginTop: "10px" }}>
            &copy;2021.All rights reserved
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Footer;
