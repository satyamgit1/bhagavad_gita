import { useState } from 'react';
import styles from '../styles/subscribe.module.css';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setName('');
        setEmail('');
        const modal = document.getElementById('my_modal_5');
        modal.showModal(); // Show modal on successful subscription
      } else {
        alert('Subscription failed');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Subscription failed');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    const modal = document.getElementById('my_modal_5');
    modal.close(); // Close modal when "Close" button is clicked
  };

  return (
    <>
      <div className={styles.subscriptionContainer}>
        <h2>Have the Shloka of the Day delivered to your inbox each morning</h2>
        <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
            className={styles.subscriptionInput}
            disabled={loading}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
            className={styles.subscriptionInput}
            disabled={loading}
          />
          <button
            type="submit"
            className={styles.subscriptionButton}
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Subscription Successful!</h3>
          <p>Check your email for a special message!</p>
          <div className="modal-action">
            <button className="btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
