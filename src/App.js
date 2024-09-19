import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Wrap everything with BrowserRouter
import { useNavigate } from 'react-router-dom';
import DetailsForm from './DetailsForm';
import './DetailsForm.css'; 


function LoginForm() {
  const [userType, setUserType] = useState('prisoner');
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/details-form');
  };

  return (
    <div className="card login-card">
      <div className="card-body">
        <h4 className="text-center mb-4">Login Dashboard</h4>
        
        {/* Dropdown for selecting user type */}
        <div className="form-group mb-3">
          <label className="form-label">Select User Type</label>
          <select className="form-control select-dropdown" onChange={handleUserTypeChange} value={userType}>
            <option value="prisoner">Undertrial Prisoner</option>
            <option value="legal">Legal Aid Provider</option>
            <option value="judicial">Judicial Authority</option>
          </select>
        </div>

        {/* Conditional Fields Based on Selected User Type */}
        <form onSubmit={handleLogin}>
          {userType === 'prisoner' && (
            <>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email ID or Username"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </>
          )}

          {userType === 'legal' && (
            <>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Advocate Bar Code"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP (One-Time Password)"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </>
          )}

          {userType === 'judicial' && (
            <>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Official Government Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        </form>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row">
        <div className="wheel-of-law text-center mb-5">
          <img src="https://tse4.mm.bing.net/th?id=OIP.zwS0iqEVsJzavs1JXqwEQAHaD2&pid=Api&P=0&h=180" alt="Wheel of Law" className="wheel-image mb-3" />
        </div>
        <div className="col-md-12">  {/* Increased width */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>  {/* Wrap everything in BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details-form" element={<DetailsForm />} /> {/* Add the route to DetailsForm */}
      </Routes>
    </Router>
  );
}

export default App;
