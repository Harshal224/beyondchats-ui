import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SuccessScreen = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container text-center mt-5">
    <h2 className="text-success">🎉 Integration Successful!</h2>
    <Link to="/" className="btn btn-primary mt-4">Go to Dashboard</Link>
  </motion.div>
);

export default SuccessScreen;
