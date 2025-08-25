import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import LivePreview from "./LivePreview";
import SuccessModal from "./SuccessModal";

// Helper function for email validation
const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [unsentHint, setUnsentHint] = useState(false);

  // Auto-save & persistence with localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("contactName");
    const savedEmail = localStorage.getItem("contactEmail");
    const savedMessage = localStorage.getItem("contactMessage");

    if (savedName || savedEmail || savedMessage) {
      setName(savedName || "");
      setEmail(savedEmail || "");
      setMessage(savedMessage || "");
      setUnsentHint(true);
    }
  }, []);

  // Save form data to localStorage whenever inputs change
  useEffect(() => {
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);
  }, [name, email, message]);

  // Validation logic
  const validateForm = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!isEmail(email)) newErrors.email = "Invalid email format.";
    if (!message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
        // Clear form and localStorage on successful submission
        setName("");
        setEmail("");
        setMessage("");
        localStorage.removeItem("contactName");
        localStorage.removeItem("contactEmail");
        localStorage.removeItem("contactMessage");
        setUnsentHint(false);
      }, 1000);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="form-preview-wrapper">
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {unsentHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="unsent-hint"
              >
                You have unsent message data saved!
              </motion.div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} /> Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? "input-error" : ""}
                placeholder="Zahra Ahmadi"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "input-error" : ""}
                placeholder="zahra@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FontAwesomeIcon icon={faComment} /> Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={errors.message ? "input-error" : ""}
                placeholder="Your message here..."
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
          
          <LivePreview name={name} email={email} message={message} />
        </div>
      </div>
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal name={name} onClose={() => setShowSuccessModal(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}