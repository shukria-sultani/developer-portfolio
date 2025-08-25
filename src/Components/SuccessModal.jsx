import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function SuccessModal({ name, onClose }) {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.75, transition: { duration: 0.3 } },
  };

  return (
    <motion.div 
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="success-modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <FontAwesomeIcon icon={faCheckCircle} className="modal-icon" />
        <h3>Success!</h3>
        <p className="modal-message">
          Thank you, {name || "friend"}! Your message was sent.
        </p>
        <motion.button 
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
}