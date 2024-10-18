import { Container } from "react-bootstrap";
import Header from "../../components/header";
import Hero from "./_components/hero";
import VideoSection from "./_components/video-section";
import AboutSection from "./_components/aboutSection";
import Section3 from "./_components/section3";
import AchievementSummary from "./_components/achievementSummary";
import Section4 from "./_components/section4";
import InSight from "./_components/inSight";
import Career from "./_components/career";
import Footer from "../../components/footer";
import Section5 from "./_components/section5";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Container>
        <VideoSection />
        <AboutSection />
      </Container>
      <Section3 />
      <Container>
        <AchievementSummary />
        <Section4 />
      </Container>
      <Section5 />
        <Container>
        <InSight />
      </Container>
      <Career />
      <Footer />
    </div>
  );
}
