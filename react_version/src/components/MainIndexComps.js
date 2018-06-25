import React, { Component } from 'react';
import GlobalFunctions from './GlobalFunctions';
import Header from './Header';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import TechSection from './TechSection';
import RecentSection from './RecentSection';
import ContactSection from './ContactSection';
import Photoswipe from './Photoswipe';
import Preloader from './PreLoader';
import Footer from './Footer';


const MainIndexComps = () => {
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
    )
}


export default MainIndexComps;