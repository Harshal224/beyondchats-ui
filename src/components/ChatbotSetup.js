import React from "react";
import { useNavigate } from "react-router-dom";

const ChatbotSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>Chatbot Integration & Testing</h2>
      <button className="btn btn-secondary m-2">Test Chatbot</button>
      <button className="btn btn-primary m-2">Copy Integration Code</button>
      <button className="btn btn-success m-2" onClick={() => navigate("/success")}>Test Integration</button>
    </div>
  );
};

export default ChatbotSetup;
