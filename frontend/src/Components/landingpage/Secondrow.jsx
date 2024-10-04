import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Landing.css";
function Secondrow() {
  return (
    <div className="secondrow">
      <h3 className="text-center ">Why Choose E-jantaa??</h3>
      <Row className="mt-4 ">
        <Col md={3}>
          <div class="cards">
            <p class="card-titles">Empower Communities</p>
            <p class="small-desc">
            EJANTA encourages active community involvement in decision-making. Your input is essential for building a better, safer, and more vibrant community.
            </p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="cards">
            <p class="card-titles">Enhanced Transparency</p>
            <p class="small-desc">
            Our platform ensures transparent issue resolution by allowing you to track the status of reported problems. This fosters trust between the community 
            </p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="cards">
            <p class="card-titles">Optimized Resource Use</p>
            <p class="small-desc">
              Prioritize problems through community votes to optimize resource
              allocation. This ensures authorities address the most pressing
              concerns promptly.
            </p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="cards">
            <p class="card-titles">Community-Driven Impact</p>
            <p class="small-desc">
              Join EJANTA today to contribute to a community-driven approach to
              problem-solving. Together, let's create a positive impact on our
              neighborhoods
            </p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Secondrow;
