// JobDetails.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { jobId } = useParams();

  const jobDetails = {
    1: {
      jobTitle: "Software Developer",
      companyName: "Lexmark",
      location: "IT Park",
      jobDescription: "Software Developer with many mastered programming languages.",
    },
    2: {
      jobTitle: "Marketing Manager",
      companyName: "Tech Mahindra",
      location: "IT Park",
      jobDescription:
        "Gathers and analyzes information to identify new markets and customers, demand for products and services, and efficacy of existing marketing campaigns and strategies.",
    },
    3: {
      jobTitle: "Graphic Designer",
      companyName: "Dover",
      location: "IT Park",
      jobDescription:
        "Includes the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos.",
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isApplied, setIsApplied] = useState(false); // New state variable

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setMessage("");
    setIsApplied(true); // Set isApplied to true when form is submitted
  };

  return (
    <div>
      <h2>{jobDetails[jobId].jobTitle}</h2>
      <p>Company: {jobDetails[jobId].companyName}</p>
      <p>Location: {jobDetails[jobId].location}</p>
      <p>Description: {jobDetails[jobId].jobDescription}</p>

      <h3>Contact Details</h3>
      {isApplied ? (
        <p>Successfully Applied</p> // Display success message when isApplied is true
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default JobDetails;
