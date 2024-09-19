import React, { useState } from 'react';
// import './DetailsForm.css'; 

function DetailsForm() {
  const [caseNumber, setCaseNumber] = useState('');
  const [caseType, setCaseType] = useState('');
  const [year, setYear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // This is where you would connect with the backend or database to match the case details.
    console.log('Case Number:', caseNumber);
    console.log('Case Type:', caseType);
    console.log('Year:', year);
  };

  if (submitted) {
    return <h4 className="text-success">Case details submitted successfully!</h4>;
  }

  return (
    <div className="container">
      <h2 className="mb-4">Enter Case &nbsp;&nbsp;&nbsp; <br></br> Details &nbsp;&nbsp;&nbsp;</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Case Number"
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Case Type"
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default DetailsForm;
