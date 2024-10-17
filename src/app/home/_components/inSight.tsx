import { Col, Row } from "react-bootstrap";
import { IoMdPlay } from "react-icons/io";
import image1 from "@/assets/images/insight1.png";
import image2 from "@/assets/images/insight2.png";
import image3 from "@/assets/images/insight3.png";

export default function InSight() {
  function ItemCard(props: { image: string }) {
    return (
      <div
        style={{
          backgroundImage: `url(${props?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={
         "insight-card-box1" 
        }
      >
        <div>21 March 2023</div>
        <div className="insight-card-txt1">
          dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris
          vitae mattis
        </div>
        <div>Read More</div>
      </div>
    );
  }
  return (
    <div className="insight-container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="home-heading1">Latest Insights</div>
        <div className="d-flex align-items-center gap-3">
          <div className="insight-box1">
            <IoMdPlay className="insight-icon1" />
          </div>
          <div className="insight-box1">
            <IoMdPlay />
          </div>
        </div>
      </div>
      <br />
      <div>
        <Row>
          <Col md={4}>
            <ItemCard image={image1.src} />
          </Col>
          <Col md={4}>
            <ItemCard image={image2.src} />
          </Col>
          <Col md={4}>
            <ItemCard image={image3.src} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
