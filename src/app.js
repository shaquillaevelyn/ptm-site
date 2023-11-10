import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Landing from './pages/landing/landing';
import FAQ from './pages/faq/faq';
import Content from './components/utils/layout';

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

  return(
    <React.StrictMode>
      <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
        {/* <PageUp /> */}
        <Content>
          <Header/>
          <Routes>
            <Route exact path={ROOT} element={<Landing />}/>
            <Route path={MEETPTM} element={<FAQ />} />
            <Route path={RESOURCES} element={<FAQ />} />
            <Route path={FAQQ} element={<FAQ />} />
            <Route path={PRIVACY} element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </Content>
      </HashRouter>
    </React.StrictMode>
  );
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
