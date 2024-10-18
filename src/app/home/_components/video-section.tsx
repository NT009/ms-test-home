import Bg from "@/assets/images/image-video.png";
import { IoMdPlay } from "react-icons/io";

export default function VideoSection() {
  return (
    <div className="video-section-container">
      <div
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
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
      </div>
    </div>
  );
}
