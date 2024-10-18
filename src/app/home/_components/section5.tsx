import image from "@/assets/images/section5-img.jpeg";
import image2 from "@/assets/images/section5-img2.png";
import { Button } from "antd";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdPlay } from "react-icons/io";
export default function Section5() {
  return (
    <div
      style={{
        backgroundImage: `
            linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
            linear-gradient(90deg, #FFFFFF 45.47%, rgba(255, 255, 255, 0) 80.23%),
            url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={"section5-container"}
    >
      <Container>
        <Row>
          <Col lg={6}>
            <div className="section5-box1">
              <div className="home-heading1 ">
                Lorem Ipsum
                <br />
                dolor sit consectetur
              </div>
              <div className="home-dscription1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
                velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem, et varius ipsum dictum.
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-start justify-content-xxl-end  justify-content-xl-end justify-content-lg-end justify-content-md-start justify-content-sm-start"
          >
            <div className="section5-box3">
              <div className="d-flex section5-txt1">Lorem Ipsum?</div>
              <div className="section5-img1-wrapper">
                <Image src={image2} alt="image2" className="section5-img1" />
                <div className="section5-img1-gradient"></div>
                <div className="section5-box2">
                  <div className="section5-txt2">Lorem Ipsum</div>
                  <div className="section5-txt3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis velit nulla. In hac habitasse platea dictumst.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <Button
                  icon={<IoMdPlay color="black" size={23} />}
                  className="section5-btn1"
                  shape="circle"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
