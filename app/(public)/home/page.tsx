import { AboutUs } from "./about-us-page";
import { FeaturesPage } from "./features-page";
import { LandingPage } from "./landing-page";

const HomePage = () => {
  return (
    <section>
      <LandingPage />
      <AboutUs />
      <FeaturesPage />
    </section>
  );
};

export default HomePage;
