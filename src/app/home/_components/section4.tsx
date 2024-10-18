import { Col, Row } from "react-bootstrap";
import "./styles.scss";

export default function Section4() {
  function DescCard(props: { number: string; selected: boolean }) {
    return (
      <div
        className={
          "section4-card " + (props?.selected ? "section4-card-selected" : "")
        }
      >
        <div className={"home-txt1" + (props?.selected ? " text-light" : "")}>
          {props?.number}
        </div>
        <div
          className={
            props?.selected
              ? "section4-card-line-selected"
              : "section4-card-line"
          }
        />
        <div
          className={
            "section4-card-txt1" + (props?.selected ? " text-light" : "")
          }
        >
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <div
          className={
            "home-dscription2" + (props?.selected ? " text-light" : "")
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et
          efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet
          aliquam augue.
        </div>
      </div>
    );
  }

  return (
    <div className="section4-container">
      <Row>
        <Col md={7}>
          <div className="home-heading1">Lorem Ipsum</div>
          <br />
          <div className="home-dscription1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum.
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <DescCard number="01" selected={false} />
        </Col>
        <Col md={4}>
          <br className="d-md-none" />
          <DescCard number="02" selected={false} />
          <br className="d-md-none" />
        </Col>
        <Col md={4}>
          <DescCard number="03" selected={true} />
        </Col>
      </Row>
    </div>
  );
}
