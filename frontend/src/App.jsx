

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './Components/Home/Home'; // Import your Home component
import Alert from './Components/Alert/AlertPage';
import Navbars from './Components/Navbar/Navbar';
import ReportForm from './Components/Report/Report';
import Landing from './Components/landingpage/Landing';
import Register from './Components/Register/Register';
import Event from './Components/Event/Event'
import Login from './Components/Login/Login';




const App = () => {
  return (
<Router>
     <Navbars/>
      <Routes>
      <Route exact path="/" element={<Landing/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
<Route path="/alert" element={<Alert/>}></Route>
<Route path="/event" element={<Event/>}></Route>
<Route path="/report" element={<ReportForm/>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/login" element={<Login />}></Route>


</Routes>

    </Router>
    
  );
};

export default App;






//  import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminNavbar from './Components/Admin/AdminNavbar.jsx';
// import AdminDashboard from './Components/Admin/AdminDashboard.jsx';
// import SendEvent from './Components/Admin/SendEvent.jsx';
// import SendAlert from './Components/Admin/SendAlert.jsx';
// import IndividualPost from './Components/Admin/IndividualPost';

// const App = () => {
//   return (
//     <Router>
//       <AdminNavbar />
//       <Routes>
//         <Route path="/admin-dashboard/send-event" element={<SendEvent />} />
//         <Route path="/admin/post/:postId" element={<IndividualPost />} />
//         <Route path="/admin-dashboard/send-alert" element={<SendAlert />} />
//         <Route path="/" element={<AdminDashboard />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;