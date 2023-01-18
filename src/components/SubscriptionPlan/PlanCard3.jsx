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
function PlanCard3() {
  return (
    <>
      <div>
        {" "}
        <Card className="plan-card">
          <Box className="head-line">
            <Typography className="type">EXTENDED</Typography>
            <Typography className="price">
              <sup>$</sup>249
            </Typography>
          </Box>
          <Box>
            <img src={iconsPackage.jsIcon} alt="" />
            <img src={iconsPackage.tsIcon} alt="" />
            <img src={iconsPackage.figmaColored} alt="" />
          </Box>
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
              TypeScript version
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
              Design resources
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

export default PlanCard3;
