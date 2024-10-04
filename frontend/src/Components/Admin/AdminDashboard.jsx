import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar.jsx';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/reports');
        setReports(response.data.map(report => ({ ...report, checked: false })));
      } catch (error) {
        console.error('Error fetching reports:', error.message);
      }
    };

    fetchReports();
  }, []);

  const handleVerify = (reportId) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report._id === reportId ? { ...report, checked: !report.checked } : report
      )
    );
  };

  const handleHandle = (reportId) => {
    setReports((prevReports) => prevReports.filter((report) => report._id !== reportId));
  };

  return (
    <div className="admin-dashboard-container">
      <ul className="report-list">
        {reports.map((report) => (
          <li key={report.id}>
            <Card>
              <Card.Body>
                <Card.Title className="post-title">
                  <Link to={`/admin/post/${report._id}`}>{report.title}</Link>
                </Card.Title>
                  
                <Form.Check
                  type="checkbox"
                  label="Verify"
                  checked={report.checked}
                  onChange={() => handleVerify(report._id)}
                  className="verify-checkbox"
                />

                <Form.Check
                  type="checkbox"
                  label="Handle"
                  onChange={() => handleHandle(report._id)}
                  className="handle-checkbox"
                />
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;