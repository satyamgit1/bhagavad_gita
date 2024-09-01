import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail('');  // Clear the input field
        document.getElementById('my_modal_5').showModal();  // Show the modal on success
      } else {
        let errorData = {};
        try {
          errorData = await res.json();
        } catch (jsonError) {
          console.error('Failed to parse JSON:', jsonError);
          errorData.message = 'Unexpected error occurred';
        }
        alert(`Subscription failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Subscription error:', error);  // Log the error for debugging
      alert(`Subscription failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#007bff')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          disabled={loading}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: loading ? '#6c757d' : '#007bff',
            color: 'white',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
            border: 'none',
          }}
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box" style={{
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          maxWidth: '400px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h3 className="font-bold text-lg" style={{ fontSize: '24px', marginBottom: '16px' }}>Subscription Successful!</h3>
          <p className="py-4" style={{ marginBottom: '24px', color: '#555' }}>Thank you for subscribing. Check your email for a special message!</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" style={{
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
