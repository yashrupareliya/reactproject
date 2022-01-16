import React from 'react';
import Header from './Header';
import HeroBody from './HeroBody';
import ProductCategories from './ProductCategories';
import FetaureProducts from './FetaureProducts';
import LatestProducts from './LatestProducts';
import Banner from './Banner';
import TheBlog from './TheBlog';
import Footer from './Footer';
import Category from './Category';


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroBody />
      <Category />
      <ProductCategories />
      <FetaureProducts />
      <Banner />
      <LatestProducts />
      <TheBlog />
      <Footer />
    </div>
  );
}

export default HomePage;