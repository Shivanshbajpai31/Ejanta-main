import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminNavbar from './Components/Admin/AdminNavbar.jsx';
import AdminDashboard from './Components/Admin/AdminDashboard.jsx';
import SendEvent from './Components/Admin/SendEvent.jsx';
import SendAlert from './Components/Admin/SendAlert.jsx';
import IndividualPost from './/Components/Admin/IndividualPost';

const Admin = () => {
  return (
    <Router>
      <AdminNavbar />
      <Routes>
        <Route path="/admin-dashboard/send-event" element={<SendEvent />} />
        <Route path="/admin/post/:postId" element={<IndividualPost />} />
        <Route path="/admin-dashboard/send-alert" element={<SendAlert />} />
        <Route path="/" element={<AdminDashboard />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default Admin;