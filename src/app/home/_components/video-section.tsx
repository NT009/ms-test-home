import Bg from "@/assets/images/image-video.png";
import { IoMdPlay } from "react-icons/io";

export default function VideoSection() {
  return (
    <div className="video-section-container">
      <div
        style={{
          backgroundImage: `url(${Bg.src})`, // Keep only the background image
          backgroundSize: "cover", // Ensure the background image covers the entire div
          backgroundPosition: "center", // Center the background image
        }}
        className="video-section-img1"
      >
        <div className="video-section-box1">
          <div className="d-block">
            <div className="video-section-btn1">
              <IoMdPlay className="video-section-icon1" />
            </div>
          </div>

          <div className="video-section-txt1">Lorem ipsum dolor sit amet.</div>
          <div className="video-section-box2">
            <div className="video-section-txt2">Sanchez Alexis</div>
            <div className="video-section-txt3">CEO & Founder of Demo</div>
          </div>
        </div>
        {/* <div>
          <Row>
            <Col md={8} className="hero-banner-box1">
              <div className="hero-banner-txt2">Lorem ipsum dolor sit amet</div>
              <div className="hero-banner-txt1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
                velit nulla. In hac habitasse platea dictumst.
              </div>
            </Col>
          </Row>
        </div> */}
      </div>
    </div>
  );
}
