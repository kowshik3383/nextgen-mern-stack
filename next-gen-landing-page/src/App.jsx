import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components';
import Login from './pages/Login';
import Sign from './pages/Sign';
import styles from './style';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats />
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
              <Footer />
            </div>
          </div>
        </div>
      } />

      <Route path="/signup" element={<Sign />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
