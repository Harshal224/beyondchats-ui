import React from "react";
import { useNavigate } from "react-router-dom";

const dummyScrapedPages = [
  { url: "https://example.com/home", status: "Scraped", data: "Welcome to Example!" },
  { url: "https://example.com/about", status: "Pending", data: "" },
  { url: "https://example.com/contact", status: "Scraped", data: "Contact us at 123456789" },
];

const SetupOrganization = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>Setup Organization</h2>
      <input type="text" placeholder="Company Name" className="form-control mb-2" />
      <input type="text" placeholder="Website URL" className="form-control mb-2" />
      <textarea placeholder="Company Description" className="form-control mb-2"></textarea>
      <h3 className="mt-4">Scraped Pages:</h3>
      <ul className="list-group">
        {dummyScrapedPages.map((page, index) => (
          <li key={index} className="list-group-item">
            {page.url} - <span className={page.status === "Scraped" ? "text-success" : "text-warning"}>{page.status}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-4" onClick={() => navigate("/chatbot-setup")}>Next</button>
    </div>
  );
};

export default SetupOrganization;
