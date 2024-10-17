import { Col, Row } from "react-bootstrap";
import "./styles.scss";
export default function AboutSection() {
  return (
    <div className="about-section-container">
      <Row>
        <Col md={7}>
          <div className="about-section-box1">
            <div className="home-heading1">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </div>
            <div className="home-dscription1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
              congue non sem et efficitur. Donec in dolor nec tellus iaculis
              sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non
              convallis accumsan, nibh odio gravida felis, vitae mollis massa
              lectus a neque. Mauris mollis elit quis iaculis iaculis.
              Vestibulum molestie nisl eget aliquet scelerisque. Vivamus
              efficitur dui eget velit interdum, non dapibus nisi fringilla.
              Mauris fermentum venenatis volutpat. Quisque efficitur ultricies
              erat eget rutrum. Phasellus feugiat quam eget est dapibus, non
              eleifend justo fermentum. Sed et commodo arcu, id euismod dui.
            </div>
          </div>
        </Col>
        <Col md={5} className="about-section-box4">
          <div className="about-section-box3">
            <div className="about-section-box2">
              <div className="about-section-txt2 ">Lorem ipsum</div>
              <div className="home-dscription2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem.
              </div>
            </div>
            <hr className=""/>
            <div className="about-section-box2">
              <div className="about-section-txt2 ">Lorem ipsum</div>
              <div className="home-dscription2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
