import React, { Component } from 'react';
import '../css/base.css';
import '../css/vendor.css';
import '../css/main.css';
import GlobalFunctions from './GlobalFunctions';
import Header from './Header';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import TechSection from './TechSection';
import RecentSection from './RecentSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Photoswipe from './Photoswipe';
import Preloader from './PreLoader';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <TechSection />
        <RecentSection />
        <ContactSection />
        <Footer />
        <Photoswipe />
        <Preloader />
        <GlobalFunctions />
      </div>
    );

  }
}

export default App;
