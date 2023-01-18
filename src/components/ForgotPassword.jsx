import {
  Box,
  Card,
  Container,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import "../styles/ForgotPassword.scss";
import LoginRegisterCover from "./LoginRegisterCover";

function ForgotPassword() {
  return (
    <>
      <LoginRegisterCover />
      <div className="all">
        <Box>
          <Card
            sx={{
              width: "28%",
              transform: "translate(135%,28%)",
              height: "500px",
              backgroundColor: "#161c24",
              boxShadow: 0,
            }}
          >
            <Container>
              <img
                style={{ transform: "translate(200%,0%)" }}
                src="https://zone-assets-api.vercel.app/assets/icons/ic_lock_password.svg"
                alt=""
              />

              <Typography
                sx={{
                  marginTop: "40px",
                  color: "#ffffffff",
                  textAlign: "center",
                  fontFamily: "Barlow-Bold",
                  fontSize: "32px",
                }}
                // variant="h1"
              >
                Forgot Your Password?
              </Typography>
              <Typography
                sx={{
                  marginTop: "20px",
                  color: "#919eab",
                  fontSize: "14px",
                  fontFamily: "Poppins-Regular",
                  textAlign: "center",
                }}
              >
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </Typography>
              <FormControl>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: 0,
                        borderRadius: "10px",
                        backgroundColor: "rgba(145,158,171,0.08)",
                      },
                      "&.Mui-focused fieldset": {
                        border: 0,
                      },
                    },
                    width: "480px",
                    "& label.Mui-focused": { color: "#637389" },
                    "& label": { color: "#637389" },
                    marginTop: "40px",
                  }}
                  type="email"
                  variant="outlined"
                  label="email address  "
                  name="email"
                  //   value={formik.values.email}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                />
              </FormControl>
              <Button
                type="submit"
                sx={{
                  padding: "8px 22px",
                  borderRadius: "10px",
                  width: "100%",
                  height: 50,
                  backgroundColor: "#fa541c",
                  marginTop: "20px",
                  fontFamily: "Poppins-Regular",
                  "&:hover": { backgroundColor: "#d13d0c" },
                }}
                variant="contained"
              >
                Login
              </Button>
            </Container>
          </Card>
        </Box>
      </div>
    </>
  );
}

export default ForgotPassword;
