import React, { useRef } from 'react';
import { HashRouter } from 'react-router-dom';
import stringResource from './resources/strings';
import CookieConsent from 'react-cookie-consent';
import About from './components/About/About';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';
import MusicWidget from './components/MusicWidget/MusicWidget';
import LinkMe from './components/LinkMe/LinkMe';
import './App.scss';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const linkMeRef = useRef(null);
  const shopRef = useRef(null);

  return (
    <div ref={homeRef} className='app'>
      <HashRouter>
        <Header refs={{ aboutRef, contactRef, linkMeRef, shopRef, homeRef }} />

        <MusicWidget />

        <About ref={aboutRef} />
        {<Shop ref={shopRef} />}
        <Contact ref={contactRef} />
        <LinkMe ref={linkMeRef} />
      </HashRouter>
      <Footer />
      <CookieConsent
        location='bottom'
        buttonText={stringResource.portfolio.gdprbutton}
        cookieName='gdprCookie'
        style={{
          background: '#ffe5b4',
          fontSize: '1em',
          color: 'rgba(0, 0, 0, 0.87)',
        }}
        buttonStyle={{
          margin: '1em',
          border: 0,
          fontWeight: 'bold',
          fontSize: '1em',
          background: '#3071e8ff',
          padding: '0 2em',
          height: '3em',
          lineHeight: '3em',
          borderRadius: '2.5em',
          color: '#ffffff',
          fontfamily: 'Roboto',
        }}
        expires={150}
      >
        {stringResource.portfolio.gdpr}
      </CookieConsent>
    </div>
  );
}

export default App;
