import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


const Footers = () => {
  return (
    <footer className="shadow " style={{background:"#425d83",color:"#fff"}}>
      <Container className="py-5" style={{ maxWidth: '90%' }}>
        <Row className="justify-content-between flex-wrap">
          <Col>
            <a href="/" className=" reset-link-style d-flex align-items-center text-dark">
            
              <span className="  ms-3 h5 font-weight-bold">E-Jantaa</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              
EJANTA empowers community decision-making, transparent issue resolution, and prioritized 
problem-solving through votes. 
            </p>
          </Col>
          <Col>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Feature
            </p>
            <ul className="list-unstyled" style={{ cursor: 'pointer' } }>
              <li><a href="/" className="reset-link-style">Report</a></li>
              <li><a href="/" className="reset-link-style">Event</a></li>
              <li><a href="/"className="reset-link-style">Alert</a></li>
              
            </ul>
          </Col>
          <Col>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <ul className="list-unstyled" style={{ cursor: 'pointer' }}>
              <li><a href="/" className="reset-link-style">Community Guidelines</a></li>
              <li><a href="/"className="reset-link-style">Rules</a></li>
              <li><a href="/" className="reset-link-style">Register</a></li>
            </ul>
          </Col>
          
        </Row>
        <Row className="justify-content-center align-items-center mt-4">
          <small className="text-center" style={{ width: '50%' }}>
            &copy; E-jantaa, 2024. All rights reserved.
          </small>
         
        </Row>
      </Container>
    </footer>
  );
};

export default Footers;
