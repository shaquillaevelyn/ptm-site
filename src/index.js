import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/navigation/header";
import Footer from "./components/footer/footer";
import Landing from "./pages/landing/landing";
// import ScrollTop from "./components/utils/scrollTo";

import FAQ from "./pages/faq/faq";

import { ROOT, FAQQ, PRIVACY } from "../src/components/utils/routes";

import reportWebVitals from "./reportWebVitals";
import PrivacyPolicy from "./pages/privacy/privacy-policy";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Header />
      {/* <ScrollTop /> */}
      <Routes>
        <Route exact path={ROOT} element={<Landing />} />
        <Route path={FAQQ} element={<FAQ />} />
        <Route path={PRIVACY} element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
