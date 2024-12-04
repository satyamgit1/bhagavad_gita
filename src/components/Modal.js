// Modal.js
import React from 'react';
// Optional: You can add your custom styles for the modal

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null; // Don't render if the modal isn't open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Notification</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
