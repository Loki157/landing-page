import React from "react";
import "../styles/content.scss";
import UiDesignImage from "../assets/images/ui-design.png";
import { iconsPackage } from "../assets/svgIcons";
import {
  Box,
  Grid,
  Typography,
  Button,
  easing,
  Card,
  Divider,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";
import PlanCard1 from "./SubscriptionPlan/PlanCard1";
import PlanCard2 from "./SubscriptionPlan/PlanCard2";
import PlanCard3 from "./SubscriptionPlan/PlanCard3";
function UiDesign() {
  const MotionTypography = motion(Typography);
  const MotionButton = motion(Button);
  const MotionBox = motion(Box);
  return (
    <>
      <div className="ui-design">
        <img className="img-uidesign" src={UiDesignImage} />
        <Box className="content">
          <MotionTypography
            initial={{ y: 100, filter: "blur(1px)" }}
            whileInView={{ y: -10, filter: "blur(0)" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, amount: 0.8 }}
            variant="div"
            className="new-small"
          >
            PROFESSIONAL KIT
          </MotionTypography>
          <MotionTypography
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.8 }}
            variant="div"
            className="new-big"
          >
            For Designer
          </MotionTypography>
          <MotionButton
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="btn"
            sx={{ marginTop: "20px" }}
          >
            Figma Workspace <OpenInNewIcon />
          </MotionButton>
        </Box>
        <Box
          sx={{
            marginTop: "-90px",
            width: "100%",
            textAlign: "center",
            // marginLeft: "30%",
            // marginRight: "30%",
          }}
        >
          <MotionTypography
            initial={{ y: 0 }}
            whileInView={{ y: 40 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="new-small"
          >
            PRICING PLANS
          </MotionTypography>
          <MotionTypography
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 60, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="new-big"
          >
            The Right Plan
          </MotionTypography>
          <MotionTypography
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 60, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="new-big"
          >
            For Your Business
          </MotionTypography>
          <MotionTypography
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 80, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="new-medium"
          >
            Choose the perfect plan for your needs. Always flexible to grow
          </MotionTypography>
        </Box>
        <Box sx={{ marginTop: 20 }}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item>
              <MotionBox
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <PlanCard1 />
              </MotionBox>
            </Grid>

            <Grid item>
              <MotionBox
                initial={{ y: 180, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <PlanCard2 />
              </MotionBox>
            </Grid>
            <Grid item>
              <MotionBox
                initial={{ y: 260, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <PlanCard3 />
              </MotionBox>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default UiDesign;
