"use client";
import Image from "next/image";
import "./styles.scss";
import logo from "@/assets/images/logo.png";
import { Button, Drawer } from "antd";
import { Container } from "react-bootstrap";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header-container">
      <Container className="header-container2">
        <Button
          icon={<IoMdMenu />}
          onClick={showDrawer}
          type="text"
          className="header-btn2"
        />
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
          <Button className="header-btn21">Contact Us</Button>
        </div>
      </Container>

      {/* drawer for mobile */}
      <Drawer title="Home" onClose={onClose} open={open} placement="left">
        <div className="header-txt1 text-black">About Us</div>
        <br />
        <div className="header-txt1 text-black">How We Help</div>
        <br />
        <div className="header-txt1 text-black">Pricing</div>
        <br />
        <div className="header-txt1 text-black">Portfolios</div>
        <br />
        <div className="header-txt1 text-black">Testimonials</div>
        <br />
        <div className="header-txt1 text-black">Insights</div>
      </Drawer>
    </div>
  );
}
