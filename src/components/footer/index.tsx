import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { Button } from "antd";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box3">
        <Container className="footer-box1">
          <div className="footer-txt1">Quick Links</div>
          <div className="footer-box2">
            <div className="footer-txt2">Home</div>
            <div className="footer-txt2">About Us</div>
            <div className="footer-txt2">Pricing</div>
            <div className="footer-txt2">Portfolios</div>
            <div className="footer-txt2">Insights</div>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={4} md={6} className="footer-box6">
            <div className="footer-txt3">Lorem ipsum dolor sit amet</div>
            <div className="footer-txt3">Lorem ipsum dolor sit amet</div>
            <div className="footer-txt3">Lorem ipsum dolor sit amet</div>
          </Col>
          <Col lg={4} md={6} className="footer-box6 ">
            <div className="footer-txt3">Lorem</div>
            <div className="footer-txt3">Ipsum</div>
            <div className="footer-txt3">Consectetur</div>
            <div className="footer-txt3">Efficitur</div>
          </Col>
          <Col lg={4} md={12} className="footer-box6">
            <div className="footer-txt4">Contact Us</div>
            <div className="footer-txt5">
              Lorem Ipsum,
              <br /> Iso lorem,Iso Lorem Posum
            </div>
            <div className="d-flex flex-column gap-1">
              <div className="footer-txt6">+91 00000 00000</div>
              <div className="footer-txt6">info@demo.com</div>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="footer-txt6">Follow us on</div>
              <div className="d-flex gap-2 justify-content-center justify-content-lg-start">
                <Button
                  icon={<FaFacebookF />}
                  size="small"
                  className="footer-btn1"
                />
                <Button
                  icon={<FaXTwitter />}
                  size="small"
                  className="footer-btn1"
                />
                <Button
                  icon={<FaLinkedinIn />}
                  size="small"
                  className="footer-btn1"
                />

                <Button
                  icon={<FaYoutube />}
                  size="small"
                  className="footer-btn1"
                />
                <Button
                  icon={<FaInstagram />}
                  size="small"
                  className="footer-btn1"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-box4">
        <Container>&copy;2024 Demo. All rights reserved.</Container>
      </div>
    </div>
  );
}
