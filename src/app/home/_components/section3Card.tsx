import { Col, Row } from "react-bootstrap";

type Props = {
  image: string;
  type: "big" | "small";
};
export default function Section3Card(props: Props) {
  return (
    <div className="hero-container">
      <div
        style={{
          backgroundImage: `url(${props?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={
          props?.type === "big" ? "sectiion3-card-box1" : "sectiion3-card-box2"
        }
      >
        <div>
          <Row>
            <Col md={10} className="sectiion3-card-box3">
              <div>
                <div className="sectiion3-card-txt2">
                  Consectetur adipiscing elit
                </div>
              </div>

              <div className="sectiion3-card-txt1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst.
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
