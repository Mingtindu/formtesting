import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnrollmentForm from "./component/form";
import Dashboard from "./component/dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>   
          <Route path="/" element={<EnrollmentForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<div>404: Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;