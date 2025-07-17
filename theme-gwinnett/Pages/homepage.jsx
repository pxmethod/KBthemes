import React from 'react';
import Page from '../Components/Page';
import HeroSection from '../Components/HeroSection';
import CategoriesSection from '../Components/CategoriesSection';
import PopularTopics from '../Components/PopularTopics';
import ContactUs from '../Components/ContactUs';

const Homepage = () => {
  return (
    <Page title="">
      <HeroSection 
        title="How can we help you today?"
        subtitle="Search our comprehensive knowledge base or browse categories to find the answers you need. Our modern help center is designed to get you the information you need quickly and efficiently."
        showSearch={true}
      />
      <CategoriesSection />
      <PopularTopics />
      <ContactUs />
    </Page>
  );
};

export default Homepage; 