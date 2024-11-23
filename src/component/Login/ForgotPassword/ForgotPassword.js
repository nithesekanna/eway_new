import React, { useState } from "react";
import apiClient from "../../../apiClient";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ LoginId: "", EmailId: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to show/hide modal

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.LoginId || !formData.EmailId) {
      setMessage("Both fields are required.");
      setIsError(true);
      setShowModal(true); // Show modal for missing fields
      return;
    }

    try {
      const response = await apiClient.post("/api/forgotpassword", formData);

      if (response.data) {
        const error = response.data.IsError;

        if (error) {
          // Handle error case
          const errorMessage =
            response.data.ErrorMessage[0]?.Message || "An error occurred.";
          setMessage(errorMessage);
          setIsError(true);
        } else {
          // Handle success case
          setMessage(
            response.data.Message || "Password reset instructions sent!"
          );
          setIsError(false);
        }

        setShowModal(true); // Show modal for both error and success cases
      }
    } catch (error) {
      setMessage(
        error.response?.data?.Message || "Failed to connect to the server."
      );
      setIsError(true);
      setShowModal(true); // Show modal for connection issues
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="custom-grid">
      <div className="grid-column-no-border"></div>
      <div className="grid-column animate">
        <div className="container">
          <h1>Forgot Password</h1>
          <p>Enter your username and registered email to reset your password</p>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                id="LoginId"
                placeholder="Username"
                value={formData.LoginId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                id="EmailId"
                placeholder="Email Address"
                value={formData.EmailId}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p className={isError ? "error-message" : "success-message"}>
              {message}
            </p>
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
