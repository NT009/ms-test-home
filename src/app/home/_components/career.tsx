import image from "@/assets/images/career-img.png";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "antd";
export default function Career() {
  return (
    <div
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={"career-container"}
    >
      <Container>
        <div className=" d-md-flex d-block justify-content-between align-items-center h-100">
          <Row>
            <Col lg={8} md={10} className="career-box1">
              <div className="career-txt1">Let’s work Together</div>
              <div className="career-txt2">
                Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla
                ornare tristique euismod rcu tristique nisl id nibh. viverra
                feugiat viverra.Lorem ipsum dolor sit amet consectetur
              </div>
            </Col>
          </Row>
          <Button className="career-btn1">View Vacancies</Button>
        </div>
      </Container>
    </div>
  );
}
