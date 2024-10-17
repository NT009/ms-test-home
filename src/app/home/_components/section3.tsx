import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import Section3Card from "./section3Card";
import image1 from "@/assets/images/section-img1.png";
import image2 from "@/assets/images/section3-img2.png";
import image3 from "@/assets/images/section3-img3.png";
import image4 from "@/assets/images/section3-img4.png";

export default function Section3() {
  return (
    <div className="section3-container">
      <Container>
        <Row>
          <Col md={6}>
            <div className="home-heading1">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </div>
          </Col>
        </Row>
        <Row className="g-4 section3-box1">
          <Col md={6} >
            <Section3Card image={image1.src} type={"big"} />
            <br />
            <Section3Card image={image2.src} type={"small"} />
          </Col>
          <Col md={6}>
            <Section3Card image={image3.src} type={"small"} />
            <br />
            <Section3Card image={image4.src} type={"big"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
