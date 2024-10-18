"use client";
import { IoMdPlay } from "react-icons/io";
import { useRef } from "react";
import image1 from "@/assets/images/insight1.png";
import image2 from "@/assets/images/insight2.png";
import image3 from "@/assets/images/insight3.png";
import { Button } from "antd";

export default function InSight() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  function ItemCard(props: { image: string }) {
    return (
      <div
        style={{
          backgroundImage: `url(${props?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={"insight-card-box1"}
      >
        <div className="insight-card-txt2">21 March 2023</div>
        <div className="insight-card-txt1">
          dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris
          vitae mattis
        </div>
        <div className="insight-card-txt3">Read More</div>
      </div>
    );
  }

  return (
    <div className="insight-container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="home-heading1">Latest Insights</div>
        <div className="d-flex align-items-center gap-3">
          <Button
            shape="round"
            icon={<IoMdPlay className="insight-icon1" />}
            className="insight-btn1"
            onClick={scrollLeft}
          />
          <Button
            icon={<IoMdPlay />}
            className="insight-btn1"
            shape="round"
            onClick={scrollRight}
          />
        </div>
      </div>
      <div className="insight-scrolling-wrapper">
        <div className="insight-scroll-content" ref={scrollContainerRef}>
          <ItemCard image={image1.src} />
          <ItemCard image={image2.src} />
          <ItemCard image={image3.src} />
          <ItemCard image={image1.src} />
          <ItemCard image={image2.src} />
          <ItemCard image={image3.src} />
          <ItemCard image={image1.src} />
          <ItemCard image={image2.src} />
          <ItemCard image={image3.src} />
        </div>
      </div>
    </div>
  );
}
