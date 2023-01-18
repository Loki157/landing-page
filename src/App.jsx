import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AllRoutingData } from "./components/RoutingDatas";
import ForgotPassword from "./components/ForgotPassword";
import Pages from "./components/Pages";
import Documentation from "./components/Documentation";
function App() {
  // window.onscroll = function () {

  //   const myHead = document.getElementById("head");
  //   // console.log("scroll", scroll);
  //   // scroll();
  //   if (
  //     document.body.scrollTop > 50 &&
  //     document.documentElement.scrollTop > 50
  //   ) {
  //     myHead.style.padding = "35px 0";
  //     console.log("object");
  //   } else {
  //     myHead.style.padding = "20px 0";
  //   }
  // };
  // const scroll = () => {};

  return (
    <>
      {/* <Header /> */}
      <div>
        <Routes>
          <Route path={AllRoutingData.HOME} element={<Content />} />
          <Route path={AllRoutingData.SIGNIN} element={<SignIn />} />
          <Route path={AllRoutingData.SIGNUP} element={<SignUp />} />
          <Route path={AllRoutingData.FORGOT} element={<ForgotPassword />} />
          <Route path={AllRoutingData.PAGES} element={<Pages />} />
          <Route path={AllRoutingData.DOCUMENT} element={<Documentation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
