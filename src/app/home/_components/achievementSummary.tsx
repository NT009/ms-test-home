import { Col, Row } from "react-bootstrap";

export default function AchievementSummary() {
  return (
    <div className="achievement-summary-container">
      <Row>
        <Col md={3} className="achievement-summary-box1">
          <div className="achievement-summary-txt1">8 Years</div>
          <div className="achievement-summary-txt2">of Success</div>
        </Col>
        <Col md={3} className="achievement-summary-box1">
          <div className="achievement-summary-txt1">200+</div>
          <div className="achievement-summary-txt2">Members</div>
        </Col>
        <Col md={3} className="achievement-summary-box1">
          <div className="achievement-summary-txt1">155+</div>
          <div className="achievement-summary-txt2">All Over The USA</div>
        </Col>
        <Col md={3} className="achievement-summary-box1">
          <div className="achievement-summary-txt1">200K</div>
          <div className="achievement-summary-txt2">Satisfied Clients</div>
        </Col>
      </Row>
    </div>
  );
}
