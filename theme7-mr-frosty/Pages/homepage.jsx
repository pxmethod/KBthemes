import React from 'react';
import Page from '../Components/Page';
import HeroSection from '../Components/HeroSection';
import CategoryGrid from '../Components/CategoryGrid';
import PopularTopics from '../Components/PopularTopics';
import ContactSupport from '../Components/ContactSupport';

const Homepage = () => {
  return (
    <Page 
      currentPage="home"
      siteTitle="Help Center"
      companyName="Your Company"
    >
      <HeroSection 
        title="Need some help?"
        subtitle="Find articles, help and advice for getting the most out of our platform. We're here to help you succeed and answer any questions you might have."
        searchPlaceholder="Search for articles, guides, or FAQs..."
      />
      
      <CategoryGrid 
        title="Categories you may like"
        subtitle="Browse through our comprehensive help categories to find exactly what you're looking for."
      />
      
      <PopularTopics 
        title="Popular topics"
        subtitle="Get quick answers to the most frequently asked questions from our community."
      />
      
      <ContactSupport 
        title="Still need help?"
        subtitle="Can't find what you're looking for? Our dedicated support team is here to help you get the answers you need."
      />
    </Page>
  );
};

export default Homepage; 