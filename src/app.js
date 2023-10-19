import React, {useRef} from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Landing from './pages/landing/landing';
import FAQ from './pages/faq/faq';

import {
  ROOT,
  MEETPTM,
  RESOURCES,
  FAQQ,
  PRIVACY,
} from './components/utils/routes';

import reportWebVitals from './reportWebVitals';
import PrivacyPolicy from './pages/privacy/privacy-policy';
// import PageUp from './components/utils/gototop'


function App() {

  const welcomeRef = useRef(null);
  const meetingRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  
  return(
    <React.StrictMode>
      <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
        {/* <PageUp /> */}
        <Header refs={{welcomeRef, contactRef, meetingRef, testimonialRef }}/>

        <Routes>
          <Route exact path={ROOT} element={<Landing refs={{welcomeRef, contactRef, meetingRef, testimonialRef }} />} />
          <Route path={MEETPTM} element={<FAQ />} />
          <Route path={RESOURCES} element={<FAQ />} />
          <Route path={FAQQ} element={<FAQ />} />
          <Route path={PRIVACY} element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </HashRouter>
    </React.StrictMode>
  );
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
