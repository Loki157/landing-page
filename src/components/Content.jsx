import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { iconsPackage } from "../assets/svgIcons";
import "../styles/content.scss";
import componentImage from "../assets/images/componentImages.png";
import { easeInOut, motion } from "framer-motion";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { border } from "@mui/system";
import FeatureHighLights from "./FeatureHighLights";
import UiDesign from "./UiDesign";
import Footer from "./Footer";
import PerfectCombination from "./PerfectCombination";
import Header from "./Header";
function Content() {
  const TypographyMotion = motion(Typography);
  const ButtonMotion = motion(Button);
  // const imageMotion = motion(img);
  return (
    <>
      <Header />
      <div className="all">
        <Grid container md={12}>
          <Grid item md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                textAlign: "left",
                width: "70%",
                paddingTop: "120px",
                paddingBottom: "120px",
                transform: "translate(90%,0%)",
              }}
            >
              <Typography
                variant="div"
                sx={{
                  fontFamily: "Barlow-Bold",
                  fontSize: "64px",
                  color: "#ffffff",
                }}
              >
                Create Your Website Today with{" "}
                <span data-aos="fade-down" style={{ color: "#fa541c" }}>
                  ZONE
                </span>
              </Typography>
              <Typography className="new-medium" sx={{ marginTop: "30px" }}>
                The ZONE is built on top of MUI, a powerful library that
                provides flexible, customizable, and easy-to-use components.
              </Typography>
              <Button
                sx={{
                  marginTop: "30px",
                  color: "#212b36",
                  backgroundColor: "#ffffff",
                  fontSize: "15px",
                  width: "50%",
                  height: 50,
                  fontFamily: "Poppins-SemiBold",
                  textTransform: "lowercase",
                  borderRadius: "10px",
                  transition: "all 0.3s",
                  "&:hover": { backgroundColor: "#8d9bad" },
                }}
              >
                Figma Workspace
                <OpenInNewIcon
                  sx={{
                    color: "#212b36",
                    paddingLeft: "4px",
                  }}
                />{" "}
              </Button>
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img src={iconsPackage.figmaIcon} alt="" />
                <img className="img-icon" src={iconsPackage.jsIcon} alt="" />
                <img className="img-icon" src={iconsPackage.tsIcon} alt="" />
                <img className="img-icon" src={iconsPackage.muiIcon} alt="" />
                <img className="img-icon" src={iconsPackage.reactIcon} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item md={8}>
            <img className="illustration" src={iconsPackage.homeImg} />
          </Grid>
        </Grid>

        {/* !------------ZONE KIT------------- */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#919eab1f",
            width: "58%",
            height: "720px",
            transform: "translate(37%,10%)",
            borderRadius: "25px",
          }}
        >
          <motion.img
            className="img-toolkit"
            whileInView={{ y: 70, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            // style={{
            //   height: "520px",
            //   width: "640px",
            //   transform: "translate(37%,-10%)",
            //   // opacity: 1,
            // }}
            src={iconsPackage.toolKit}
          />
          <Box
            sx={{
              // marginTop: "24px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "40px",
              paddingRight: "40px",
              maxWidth: "560px",
              textAlign: "center",
            }}
          >
            <TypographyMotion
              initial={{ y: -50, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              className="new-small"
            >
              NEW START
            </TypographyMotion>
            <TypographyMotion
              initial={{ y: -100, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              // variant="div"
              className="new-big"
            >
              The <span style={{ color: "#fa541c" }}>ZONE</span> UI Kit
            </TypographyMotion>
            <TypographyMotion
              initial={{ y: -200, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              className="new-medium"
              sx={{ marginTop: "20px" }}
            >
              Modern ui kit to save your time, boost your creativity. Neat and
              super stylish layout ready to help with your projects
            </TypographyMotion>
          </Box>
        </Paper>
        {/* !--------INTERFACE STARTER KIt-------- */}
        <Box sx={{ transform: "translate(31%,20%)", width: "70%" }}>
          <Grid container>
            <Grid item md={4}>
              <Box sx={{ width: "90%" }}>
                <TypographyMotion
                  initial={{ y: -50, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="new-small"
                >
                  INTERFACE STARTER KIT
                </TypographyMotion>
                <TypographyMotion
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="new-big"
                >
                  Flexible Components
                </TypographyMotion>
                <TypographyMotion
                  initial={{ y: -200, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="new-medium"
                >
                  {" "}
                  Pre-set components are easy to customize and use.
                </TypographyMotion>
                <TypographyMotion
                  initial={{ y: -200, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="new-medium"
                >
                  {" "}
                  We collected most popular elements. Menu, sliders, buttons,
                  inputs etc. are all here. Just dive in!
                </TypographyMotion>
                <ButtonMotion
                  initial={{ y: -180, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  sx={{
                    fontSize: "15px",
                    // width: "50%",
                    // height: 50,
                    padding: "8px 22px",
                    fontFamily: "Poppins-SemiBold",
                    textTransform: "lowercase",
                    borderRadius: "10px",
                    transition: " 0.3s",
                    backgroundColor: "#161c24",
                    border: "2px solid grey",
                    color: "#ffffff",
                    marginTop: "30px",
                    "&:hover": {
                      backgroundColor: "grey",
                      border: "2px solid #ffffff",
                      padding: "8px 22px",
                    },
                  }}
                >
                  Browse Components
                  <KeyboardArrowRightIcon />
                </ButtonMotion>
              </Box>
            </Grid>
            <Grid item md={7}>
              <img
                style={{
                  transform: "translate(15%,0%)",
                  border: "0.3px dashed #919eab ",
                  borderRadius: "10px",
                }}
                src={componentImage}
              />
            </Grid>
          </Grid>
        </Box>
        <FeatureHighLights />
        <UiDesign />
        <PerfectCombination />
        <Footer />
      </div>
    </>
  );
}

export default Content;
