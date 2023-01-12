import React from "react";
import {
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import github from "../assets/github.svg";
import fb from "../assets/fb.svg";
import { AllRoutingData } from "./RoutingDatas";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import * as yup from "yup";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import "../styles/SignUp.scss";
import { Link } from "react-router-dom";
// import { formik } from "./components/FormikData";
function SignUp() {
  const formik = useFormik({
    initialValues: {
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      fullName: "",
      cPassword: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      //   firstName: yup
      //     .string()
      //     .max(15, "Max !5 characters allowed")
      //     .min(3, "min 4 character must")
      //     .required("Enter First Name"),
      //   lastName: yup
      //     .string()
      //     .max(15, "Max !5 characters allowed")
      //     .required("Enter Last Name"),
      email: yup
        .string()
        .email("Enter Valid Email")
        .required("Email Shouldn't be Empty"),
      password: yup.string().required("required"),
      cPassword: yup
        .string()

        .required("pass Shouldn't be empty"),
      fullName: yup
        .string()

        .required("Name Shouldn't be Empty"),
    }),
    onSubmit: (datas) => {
      console.log("Formik Datas", datas);
      formik.handleReset();
    },
  });
  return (
    <>
      <div className="all">
        <Grid sx={{ transform: "translate(0%,20%)" }} container md={12}>
          <Grid item md={8}>
            <img src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_login.svg" />
            {/* <svg href="https://zone-assets-api.vercel.app/assets/illustrations/illustration_login.svg"></svg> */}
          </Grid>
          <Grid item md={4}>
            <Card
              sx={{
                lineHeight: "60px",
                backgroundColor: "#161c24",
                // boxShadow: 0,
                boxShadow: "rgba(0,0,0,0.24) -24px 24px 72px -8px",
                width: "360px",
                borderRadius: "8px",
                height: "760px",
                padding: "25px",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <p
                  style={{
                    fontFamily: "Poppins-Regular",
                    color: "#ffffff",
                    fontSize: "26px",
                  }}
                >
                  Get Started
                </p>
                <p
                  style={{
                    fontFamily: "Poppins-Regular",
                    color: "#919eab",
                    fontSize: "14px",
                  }}
                >
                  Already Have An Account?{" "}
                  <Link className="link" to={AllRoutingData.SIGNIN}>
                    Login
                  </Link>{" "}
                </p>
                <Grid item md={12}>
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
                        width: "310px",
                        "& label.Mui-focused": { color: "#637389" },
                        "& label": { color: "#637389" },
                      }}
                      type="text"
                      variant="outlined"
                      label="FullName"
                      name="fullName"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.fullName && formik.touched.fullName ? (
                      <Typography
                        sx={{
                          color: "rgb(255,72,66)",
                          fontFamily: "Poppins-Regular",
                          fontSize: "12px",
                        }}
                      >
                        {formik.errors.fullName}
                      </Typography>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item md={12}>
                  <FormControl>
                    <TextField
                      sx={{
                        marginTop: "20px",
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
                        width: "310px",
                        "& label.Mui-focused": { color: "#637389" },
                        "& label": { color: "#637389" },
                      }}
                      type="email"
                      variant="outlined"
                      label="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <Typography
                        sx={{
                          color: "rgb(255,72,66)",
                          fontFamily: "Poppins-Regular",
                          fontSize: "12px",
                        }}
                      >
                        {formik.errors.email}
                      </Typography>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item md={12}>
                  <FormControl>
                    <TextField
                      // error={formik.touched.password}
                      type="password"
                      variant="outlined"
                      sx={{
                        marginTop: "20px",

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
                        width: "310px",
                        "& label.Mui-focused": { color: "#637389" },
                        "& label": { color: "#637389" },
                        // width: "100%",
                      }}
                      label="Password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <Typography
                        sx={{
                          color: "rgb(255,72,66)",
                          fontFamily: "Poppins-Regular",
                          fontSize: "12px",
                        }}
                      >
                        {formik.errors.password}
                      </Typography>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item md={12}>
                  <FormControl>
                    <TextField
                      // error={formik.touched.password}
                      type="password"
                      variant="outlined"
                      sx={{
                        marginTop: "20px",

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
                        width: "310px",
                        "& label.Mui-focused": { color: "#637389" },
                        "& label": { color: "#637389" },
                        // width: "100%",
                      }}
                      label="Confirm Password"
                      name="cPassword"
                      value={formik.values.cPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.cPassword && formik.touched.cPassword ? (
                      <Typography
                        sx={{
                          color: "rgb(255,72,66)",
                          fontFamily: "Poppins-Regular",
                          fontSize: "12px",
                        }}
                      >
                        {formik.errors.cPassword}
                      </Typography>
                    ) : null}
                  </FormControl>
                </Grid>
                {/* <Link
                  style={{
                    fontFamily: "Poppins-Regular",
                    color: "#919eab",
                    fontSize: "14px",
                    float: "right",
                  }}
                  to={AllRoutingData.SIGNUP}
                >
                  Forgot Password?
                </Link> */}

                <Button
                  type="submit"
                  sx={{
                    padding: "8px 22px",
                    marginTop: "15px",
                    borderRadius: "10px",
                    width: "100%",
                    backgroundColor: "#fa541c",
                    fontFamily: "Poppins-Regular",
                    "&:hover": { backgroundColor: "#d13d0c" },
                  }}
                  variant="contained"
                >
                  Login
                </Button>
              </form>
              <p
                style={{
                  fontFamily: "Poppins-Regular",
                  color: "#919eab",
                  fontSize: "12px",
                }}
              >
                I agree to{" "}
                <Link
                  style={{
                    fontFamily: "Poppins-Regular",
                    color: "#ffffff",
                    fontSize: "12px",
                  }}
                  to={AllRoutingData.SIGNUP}
                >
                  Terms Of Service
                </Link>{" "}
                and{" "}
                <Link
                  style={{
                    fontFamily: "Poppins-Regular",
                    color: "#ffffff",
                    fontSize: "12px",
                  }}
                  to={AllRoutingData.SIGNUP}
                >
                  Privacy Policy
                </Link>{" "}
              </p>
              {/* End Of Form  */}
              <Divider
                sx={{
                  fontFamily: "Poppins-Regular",
                  color: "#919eab",
                  fontSize: "14px",
                  "&::before, &::after": {
                    borderColor: "#919eab",
                  },
                }}
              >
                or continue with
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    // width: "30%",
                    boxShadow: 0,
                    padding: "10px 30px",
                    paddingRight: "20px",
                    backgroundColor: "rgba(145,158,171,0.08)",
                  }}
                >
                  <img
                    width="100%"
                    src="https://zone-assets-api.vercel.app/assets/icons/ic_google.svg"
                    alt=""
                    style={{ marginRight: "18px" }}
                  />
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    // width: "30%",
                    boxShadow: 0,
                    padding: "10px 30px",
                    paddingRight: "20px",
                    backgroundColor: "rgba(145,158,171,0.08)",
                  }}
                >
                  <img
                    src={fb}
                    width="100%"
                    style={{ marginRight: "18px" }}
                    alt=""
                  />
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    // width: "30%",
                    boxShadow: 0,
                    padding: "10px 30px",
                    paddingRight: "20px",
                    backgroundColor: "rgba(145,158,171,0.08)",
                  }}
                >
                  <img
                    src={github}
                    width="100%"
                    style={{ marginRight: "18px" }}
                    alt=""
                  />
                </Button>
              </Box>
            </Card>
            {/* <Box
            sx={{
              backgroundColor: "#faf9f6",
              height: "100vh",

              display: "flex",
              flexDirection: "column",
              width: "50%",

              // alignItems: "center",
              top: 0,
              left: 0,
              transform: "translate(50%,0%)",
            }}
          >
            
          </Box> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default SignUp;
