// UserDashboard.jsx

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function UserDashboard() {
  // Simulating user data
  const userDashboardData = {
    userName: "Suju12",
    address: "Balkumari",
    reportedProblems: [
      {
        id: 1,
        Title: "Water Problem",
        description:"Balkumari, a community nestled in near koteshwor , is grappling with a severe water scarcity issue, posing significant challenges to the well-being and livelihoods of its residents. The existing water infrastructure is unable to meet the growing demands of the population, leading to irregular water supply, particularly during peak hours.",
        status: "Solved",
      },
      {
        id: 2,
        Title: "Road problem",
        description: "Balkumari, a vibrant community situated in balkumari, is currently grappling with significant road-related challenges that adversely impact the daily lives of its residents. The existing road infrastructure is showing signs of deterioration, leading to safety concerns and contributing to increased traffic congestion. The inadequate road conditions are impeding the smooth flow of traffic, resulting in delays, heightened pollution levels, and safety hazards.",
        status: "Solved",
      },
      // ... more reported problems
    ],
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>User Dashboard</h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="mb-3">
                <strong>{userDashboardData.userName}</strong>
              </Card.Title>
              <Card.Text>
                <strong>Address:</strong> {userDashboardData.address}
              </Card.Text>
            </Card.Body>
          </Card>

          <h3>Reported Problems</h3>
          {userDashboardData.reportedProblems.map((problem) => (
            <Card key={problem.id} className="mb-4">
              <Card.Body>
                <Card.Text>
                  <strong>Description:</strong> {problem.description}
                </Card.Text>
                <Button variant="info">{problem.status}</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default UserDashboard;
