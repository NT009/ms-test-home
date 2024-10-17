import Bg from "@/assets/images/heroBanner.png";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="hero-container">
      <div
        style={{
          backgroundImage: `url(${Bg.src})`, // Keep only the background image
          backgroundSize: "cover", // Ensure the background image covers the entire div
          backgroundPosition: "center", // Center the background image
        }}
        className="hero-banner"
      >
        <Container>
          <div>
            <Row>
              <Col md={8} className="hero-banner-box1">
                <div>
                  <div className="hero-banner-txt2">
                    Lorem ipsum dolor sit amet
                  </div>
                </div>

                <div className="hero-banner-txt1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst. Fusce
                  non venenatis velit. Proin luctus malesuada mauris vitae
                  mattis. Pellentesque iaculis elit lorem, et varius ipsum
                  dictum. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Donec mattis velit nulla. In hac habitasse platea
                  dictumst.
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
