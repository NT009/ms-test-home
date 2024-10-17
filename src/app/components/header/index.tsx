import Image from "next/image";
import "./styles.scss";
import logo from "@/assets/images/logo.png";
import { Button } from "antd";
import { Container } from "react-bootstrap";
export default function Header() {
  return (
    <div className="header-container">
      <Container className="header-container2">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="header-logo"
            priority
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="header-box1">
          <div className="header-txt1">About Us</div>
          <div className="header-txt1">How We Help</div>
          <div className="header-txt1">Pricing</div>
          <div className="header-txt1">Portfolios</div>
          <div className="header-txt1">Testimonials</div>
          <div className="header-txt1">Insights</div>
        </div>
        <div>
          <Button className="header-btn1">Contact Us</Button>
        </div>
      </Container>
    </div>
  );
}
