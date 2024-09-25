// app/page.js

import styles from './globals.css';
// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PopularProducts from '../components/PopularProducts';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <PopularProducts />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;

