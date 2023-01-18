import { Box, Button, Container, Divider, IconButton } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../../src/assets/logo.svg";
import mainLogo from "../../src/assets/mainLogo.svg";
import { AllRoutingData } from "./RoutingDatas";
import SearchIcon from "@mui/icons-material/Search";

import LanguageIcon from "@mui/icons-material/Language";
function LoginRegisterCover() {
  const navigate = useNavigate();
  let stickingTheHeader = React.useRef();
  React.useLayoutEffect(() => {
    const headerTag = document.querySelector(".head-login");
    const pageHeadFixed = stickingTheHeader.current.scrollTop;
    const fixedTheFinal = () => {
      if (window.scrollY > pageHeadFixed) {
        headerTag.classList.add("shrink");
      } else {
        headerTag.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", fixedTheFinal);
  }, []);
  //   const activeStyle=({isActive})=>{
  // color:"#ffffff",

  //   }
  return (
    <>
      <header className="head" ref={stickingTheHeader}>
        <svg
          style={{ marginTop: "5px", cursor: "pointer" }}
          xmlns="http://www.w3.org/2000/svg "
          width="130px"
          height="25px"
          fill="none"
          viewBox="0 0 1080 288"
          onClick={() => navigate(AllRoutingData.HOME)}
        >
          <ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60"></ellipse>
          <path
            fill="#fff"
            d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
          ></path>
        </svg>
        {/* <Container maxWidth>
          <nav>
            <NavLink to={AllRoutingData.HOME}> Home</NavLink>

            <NavLink to={AllRoutingData.FORGOT}>Components</NavLink>

            <NavLink to={AllRoutingData.PAGES}>Pages</NavLink>
            <NavLink to={AllRoutingData.DOCUMENT}>Documentation</NavLink>
          </nav>
        </Container> */}
        {/* <div className="btnGrp"> */}
        {/* <IconButton sx={{ color: "#f2f2f2" }}>
            <SearchIcon />
          </IconButton> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <IconButton
            sx={{
              marginRight: "10px",
            }}
          >
            <LanguageIcon
              sx={{
                color: "#8d9bad ",
                "&:hover": { color: "#ffffff", filter: "blur(1px)" },
              }}
            />
          </IconButton>

          <Divider
            sx={{
              marginRight: "10px",
              "&": {
                borderColor: "#ffffff",
              },
            }}
            orientation="vertical"
          />
          <NavLink className="support">Support</NavLink>
        </Box>
        {/* <button
            className="btn signin"
            onClick={() => navigate(AllRoutingData.SIGNIN)}
            >
            Sign In
            </button>
            <button
            className="btn signup"
            onClick={() => navigate(AllRoutingData.SIGNUP)}
            >
            Sign Up
        </button> */}
        {/* </div> */}
      </header>
    </>
  );
}

export default LoginRegisterCover;
