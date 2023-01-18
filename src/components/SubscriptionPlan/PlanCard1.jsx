import React from "react";
import "../../styles/PlanCard.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Grid,
  Typography,
  Button,
  easing,
  Card,
  Divider,
} from "@mui/material";
import { iconsPackage } from "../../assets/svgIcons";
function PlanCard1() {
  return (
    <>
      <div>
        {" "}
        <Card className="plan-card">
          <Box className="head-line">
            <Typography className="type">STANDARD</Typography>
            <Typography className="price">
              <sup>$</sup>59
            </Typography>
          </Box>

          <img src={iconsPackage.jsIcon} alt="" />
          <Box className="first-three">
            <Typography className="first-three-texts" variant="div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-12cikyn"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415l-9 8.999z"
                ></path>
                <path
                  fill="currentColor"
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
                ></path>
              </svg>{" "}
              one end products
            </Typography>
            <Typography className="first-three-texts" variant="div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-12cikyn"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415l-9 8.999z"
                ></path>
                <path
                  fill="currentColor"
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
                ></path>
              </svg>
              12 months updates
            </Typography>
            <Typography className="first-three-texts" variant="div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-12cikyn"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415l-9 8.999z"
                ></path>
                <path
                  fill="currentColor"
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
                ></path>
              </svg>{" "}
              6 months of support
            </Typography>
          </Box>
          <Divider className="divider-middle" />
          <Box className="last-four">
            <Typography className="first-three-texts" variant="div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-12cikyn"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415l-9 8.999z"
                ></path>
                <path
                  fill="currentColor"
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
                ></path>
              </svg>{" "}
              JavaScript version
            </Typography>
            <Typography className="last-four-texts" variant="div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-udi382"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"
                ></path>
                <path
                  fill="currentColor"
                  d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                ></path>
              </svg>{" "}
              TypeScript version
            </Typography>
            <Typography className="last-four-texts" variant="div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-udi382"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"
                ></path>
                <path
                  fill="currentColor"
                  d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                ></path>
              </svg>{" "}
              Design resources
            </Typography>
            <Typography className="last-four-texts" variant="div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-udi382"
                sx="[object Object]"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"
                ></path>
                <path
                  fill="currentColor"
                  d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                ></path>
              </svg>{" "}
              Commercial applications
            </Typography>
          </Box>
          <Button className="btn-white">Choose Package</Button>
          <Typography variant="div" className="link-click">
            Read license
            <ArrowForwardIosIcon sx={{ fontSize: "12px", color: "#576774" }} />
          </Typography>
          {/* <a href="">
            Read license <ArrowForwardIosIcon />
          </a> */}
        </Card>
      </div>
    </>
  );
}

export default PlanCard1;
