import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    if (otp === "123456") {
      setIsVerified(true);
      navigate("/setup-organization");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Login Clicked! (Dummy Function)");
    navigate("/setup-organization");
  };

  return (
    <div className="container text-center mt-5">
      <h2>User Registration</h2>
      {!isVerified ? (
        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => alert("OTP Sent: 123456")}>
            Send OTP
          </button>
          <input
            type="text"
            placeholder="Enter OTP"
            className="form-control my-2"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleVerify}>
            Verify
          </button>
          <label>or</label>
          {/* Google Login Button */}
          <button className="btn google-btn mt-3" onClick={handleGoogleLogin}>
            <FcGoogle className="google-icon" /> Login with Google
          </button>
        </div>
      ) : (
        <p className="text-success">Email Verified!</p>
      )}
    </div>
  );
};

export default Register;
