import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { motion } from "framer-motion";
import { FaRobot, FaEnvelope, FaKey, FaLock } from "react-icons/fa";
import Register from "./components/Register";
import SetupOrganization from "./components/SetupOrganization";
import ChatbotSetup from "./components/ChatbotSetup";
import SuccessScreen from "./components/SuccessScreen";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const App = () => {
  return (
    <Router>
      <motion.div className="app-container" initial="initial" animate="animate" variants={pageTransition}>
        <div className="header">
          <h1>
            <FaRobot className="robot-icon" /> BeyondChats
          </h1>
        </div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/setup-organization" element={<SetupOrganization />} />
          <Route path="/chatbot-setup" element={<ChatbotSetup />} />
          <Route path="/success" element={<SuccessScreen />} />
        </Routes>
      </motion.div>
    </Router>
  );
};

export default App;