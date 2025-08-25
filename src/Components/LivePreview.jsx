import React from "react";
import { motion } from "framer-motion";

export default function LivePreview({ name, email, message }) {
  const isFormEmpty = !name && !email && !message;

  return (
    <motion.div 
      className="live-preview-panel"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3>Live Preview 🚀</h3>
      {isFormEmpty ? (
        <p className="placeholder-text">Start typing in the form to see your message appear here!</p>
      ) : (
        <div className="preview-content">
          <p>
            <span className="preview-label">Name:</span> {name || "..."}
          </p>
          <p>
            <span className="preview-label">Email:</span> {email || "..."}
          </p>
          <p>
            <span className="preview-label">Message:</span>
          </p>
          <div className="preview-message-box">
            {message || "..."}
          </div>
        </div>
      )}
    </motion.div>
  );
}