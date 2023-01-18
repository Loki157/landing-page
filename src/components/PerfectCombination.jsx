import { Box, Paper, Button, Typography, Grid } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function PerfectCombination() {
  return (
    <>
      <div>
        <Paper
          className="card-template"
          elevation={0}
          sx={{
            backgroundColor: "#919eab1f",
            width: "60%",
            padding: "64px",
            height: "500px",
            transform: "translate(30%,0%)",
            borderRadius: "25px",
            marginTop: "8%",
            marginBottom: "8%",
          }}
        >
          <Grid container md={12}>
            <Grid item md={4}>
              <Box className="text-template">
                <Typography
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -140, opacity: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  component={motion.div}
                  className="new-small"
                >
                  PERFECT COMBINATION
                </Typography>
                <Typography
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -180, opacity: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  component={motion.div}
                  className="new-big"
                  sx={{ fontSize: "32px !important" }}
                >
                  Looking For a Dashboard Template?
                </Typography>
                <Typography
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -240, opacity: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  component={motion.div}
                  className="new-medium"
                >
                  Minimal UI Kit is a professional dashboard used by many of our
                  clients.
                </Typography>
                <Button
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -280, opacity: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  component={motion.button}
                  className="btn-template"
                >
                  Visit Minimal Dashboard
                  <KeyboardArrowRightIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item md={7}>
              <motion.img
                whileInView={{ x: 0, opacity: 1, y: -120 }}
                initial={{ x: 280, y: -120, opacity: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="img-template"
                src="https://zone-assets-api.vercel.app/assets/images/home/minimal_dashboard.png"
                height={600}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
      ;
    </>
  );
}

export default PerfectCombination;
