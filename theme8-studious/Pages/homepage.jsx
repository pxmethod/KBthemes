import Page from '../Components/Page.jsx';
import HeroSection from '../Components/HeroSection.jsx';
import CategoryGrid from '../Components/CategoryGrid.jsx';
import VideoDemo from '../Components/VideoDemo.jsx';
import PopularArticles from '../Components/PopularArticles.jsx';

const Homepage = () => {
  return (
    <Page className="homepage">
      <HeroSection />
      <CategoryGrid />
      <VideoDemo />
      <PopularArticles />
    </Page>
  );
};

export default Homepage; 