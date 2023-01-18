import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import "../styles/content.scss";
function FeatureHighLights() {
  const TypographyMotion = motion(Typography);
  const ButtonMotion = motion(Button);
  return (
    <>
      <div className="alll">
        <Box sx={{ transform: "translateX(15%)" }}>
          <Grid container md={12}>
            <Grid item md={4}>
              <Box className="top" sx={{ width: "80%" }}>
                <TypographyMotion
                  initial={{ y: -50, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="new-small"
                >
                  FEATURE HIGHLIGHTS
                </TypographyMotion>
                <TypographyMotion
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="new-big"
                >
                  Have Everything You Need
                </TypographyMotion>
                <TypographyMotion
                  initial={{ y: -200, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="new-medium"
                >
                  Let's see what makes our theme super powerful and
                  user-friendly!
                </TypographyMotion>
                <ButtonMotion
                  initial={{ y: -200, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="btn"
                >
                  Purchase Now
                </ButtonMotion>
              </Box>
            </Grid>
            <Grid item md={7}>
              <Box className="griding ">
                <Box>
                  <motion.svg
                    initial={{ y: 30, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 30, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    4 Prebuilt Websites
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 50, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M8 30H2a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM2 14v14h6V14z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M20 30h-6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-6-16v14h6V14z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M27 21h-2V9h-8V7h8a2 2 0 0 1 2 2z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M32 16h-2V4h-8V2h8a2 2 0 0 1 2 2z"
                      fill="currentColor"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 50, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    50+ Demo Page
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 60, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 60, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Easy to Customize
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 70, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M26 4H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 26L26 6v20Z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 70, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Color Presets
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 80, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 80, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Dark Mode
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 90, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M23 23a7 7 0 1 1 7-7a7.008 7.008 0 0 1-7 7Zm0-12a5 5 0 1 0 5 5a5.005 5.005 0 0 0-5-5Z"
                    ></path>
                    <circle cx="9" cy="16" r="7" fill="currentColor"></circle>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 90, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Awesome Animation
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M25 12h-5v2h5a1 1 0 0 1 1 1v2h-4a3.003 3.003 0 0 0-3 3v1a3.003 3.003 0 0 0 3 3h6v-9a3.003 3.003 0 0 0-3-3zm-3 10a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4v3zm-6 2h2L12 7h-2L4 24h2l1.694-5h6.613zm-7.629-7l2.497-7.371h.266L13.63 17z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Google Fonts
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 110, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 2"
                    viewBox="0 0 35 35"
                    width="1em"
                    height="1em"
                    fill="#ffffff"
                  >
                    <path d="M22.92,13.42H12.08a6.59,6.59,0,0,1,0-13.17H22.92a6.59,6.59,0,0,1,0,13.17ZM12.08,2.75a4.09,4.09,0,0,0,0,8.17H22.92a4.09,4.09,0,0,0,0-8.17Z" />
                    <path d="M17.42,24.08H12.08a6.58,6.58,0,0,1,0-13.16,1.25,1.25,0,0,1,0,2.5,4.08,4.08,0,0,0,0,8.16h4.09V12.17a1.25,1.25,0,0,1,2.5,0V22.83A1.25,1.25,0,0,1,17.42,24.08Z" />
                    <path d="M12.16,34.75a6.59,6.59,0,1,1,0-13.17,1.25,1.25,0,0,1,0,2.5,4.09,4.09,0,1,0,4.08,4.09V22.83a1.25,1.25,0,0,1,2.5,0v5.34A6.59,6.59,0,0,1,12.16,34.75Z" />
                    <path d="M22.83,24.25a6.67,6.67,0,1,1,6.67-6.67A6.67,6.67,0,0,1,22.83,24.25Zm0-10.83A4.17,4.17,0,1,0,27,17.58,4.17,4.17,0,0,0,22.83,13.42Z" />
                    <path d="M17.42,13.42h0a1.25,1.25,0,0,1-1.24-1.26l.08-10.67A1.25,1.25,0,0,1,17.5.25h0a1.25,1.25,0,0,1,1.24,1.26l-.08,10.67A1.26,1.26,0,0,1,17.42,13.42Z" />
                  </motion.svg>
                  <TypographyMotion
                    initial={{ y: 110, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Figma Design
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 120, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M10 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 16v12h6V16Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M28 4H6a2 2 0 0 0-2 2v6h2V6h22v14H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 120, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Fully Responsive
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 130, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M26 6V2H2v10h9v18h19V6ZM4 10V4h20v2H11v4Zm24 18H13V8h15Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M15 11h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 130, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Mega Menu
                  </TypographyMotion>
                </Box>

                <Box>
                  <motion.svg
                    initial={{ y: 140, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="m18.83 26l2.58-2.58L20 22l-4 4l4 4l1.42-1.41L18.83 26zm8.34 0l-2.58 2.58L26 30l4-4l-4-4l-1.42 1.41L27.17 26z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M14 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v6h2v-8a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h6Zm4-23.6l5.6 5.6H18Z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 140, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Clean Markup
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 150, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="m27 25.586l-2-2V21h-2v3.414L25.586 27L27 25.586z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M24 31a7 7 0 1 1 7-7a7.008 7.008 0 0 1-7 7zm0-12a5 5 0 1 0 5 5a5.005 5.005 0 0 0-5-5zm-8 9A12.013 12.013 0 0 1 4 16H2a14.016 14.016 0 0 0 14 14zM12 8H7.078A11.984 11.984 0 0 1 28 16h2A13.978 13.978 0 0 0 6 6.234V2H4v8h8z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 150, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Free Updates
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 160, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M25 10h-.06a9 9 0 0 0-17.88 0H7a5 5 0 0 0 0 10h2v-9a7 7 0 0 1 14 0v10a4 4 0 0 1-3.17 3.91a4 4 0 1 0 .05 2A6 6 0 0 0 25 21v-1a5 5 0 0 0 0-10ZM4 15a3 3 0 0 1 3-3v6a3 3 0 0 1-3-3Zm12 13a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm9-10v-6a3 3 0 0 1 0 6Z"
                    ></path>
                  </motion.svg>

                  <TypographyMotion
                    initial={{ y: 160, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Fast Support
                  </TypographyMotion>
                </Box>
                <Box>
                  <motion.svg
                    initial={{ y: 170, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-0"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M28 5H4a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V7a2.002 2.002 0 0 0-2-2ZM4 7h11v18H4Zm13 18V7h11l.002 18Z"
                    ></path>
                  </motion.svg>
                  <TypographyMotion
                    initial={{ y: 170, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="svg-crct"
                    variant="div"
                  >
                    Well Documented
                  </TypographyMotion>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default FeatureHighLights;
