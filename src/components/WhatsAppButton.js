// components/WhatsAppButton.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/WhatsAppButton.module.css'; // Import CSS module
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className={styles.toggleButton} onClick={toggleVisibility}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
      {isVisible && (
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          Chat with us on WhatsApp
        </a>
      )}
    </>
  );
};

export default WhatsAppButton;

