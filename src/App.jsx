import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AllRoutingData } from "./components/RoutingDatas";
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
      <div>
        <Header />
        <Routes>
          <Route path={AllRoutingData.HOME} element={<Content />} />
          <Route path={AllRoutingData.SIGNIN} element={<SignIn />} />
          <Route path={AllRoutingData.SIGNUP} element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
