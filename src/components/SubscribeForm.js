

// import { useState } from 'react';
// import styles from '../styles/subscribe.module.css'; // Import the CSS Module

// export default function SubscribeForm() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('/api/subscribe', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email }), // Send name and email
//       });

//       if (res.ok) {
//         setName('');  // Clear the name input field
//         setEmail('');  // Clear the email input field
//         document.getElementById('my_modal_5').showModal();  // Show the modal on success
//       } else {
//         let errorData = {};
//         try {
//           errorData = await res.json();
//         } catch (jsonError) {
//           console.error('Failed to parse JSON:', jsonError);
//           errorData.message = 'Unexpected error occurred';
//         }
//         alert(`Subscription failed: ${errorData.message || 'Unknown error'}`);
//       }
//     } catch (error) {
//       console.error('Subscription error:', error);  // Log the error for debugging
//       alert(`Subscription failed: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className={styles.subscriptionContainer}>
//         <h2>Have the Shloka of the Day delivered to your inbox each morning</h2>
//         <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter Your Name"
//             required
//             className={styles.subscriptionInput}
//             disabled={loading}
//           />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email"
//             required
//             className={styles.subscriptionInput}
//             disabled={loading}
//           />
//           <button
//             type="submit"
//             className={styles.subscriptionButton}
//             disabled={loading}
//           >
//             {loading ? 'Subscribing...' : 'Subscribe'}
//           </button>
//         </form>
//       </div>

//       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Subscription Successful!</h3>
//           <p className="py-4">Thank you for subscribing. Check your email for a special message!</p>
//           <div className="modal-action">
//             <form method="dialog">
//               <button className="btn">Close</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </>
//   );
// }


// import { useState } from 'react';
// import styles from '../styles/subscribe.module.css'; // Assuming this is a CSS Module

// export default function SubscribeForm() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('/api/subscribe', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email }),
//       });

//       if (res.ok) {
//         setName('');
//         setEmail('');
//         document.getElementById('my_modal_5').showModal();
//       } else {
//         let errorData = {};
//         try {
//           errorData = await res.json();
//         } catch (jsonError) {
//           console.error('Failed to parse JSON:', jsonError);
//           errorData.message = 'Unexpected error occurred';
//         }
//         alert(`Subscription failed: ${errorData.message || 'Unknown error'}`);
//       }
//     } catch (error) {
//       console.error('Subscription error:', error);
//       alert(`Subscription failed: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className={styles.subscriptionContainer}>
//         <h2>Have the Shloka of the Day delivered to your inbox each morning</h2>
//         <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter Your Name"
//             required
//             className={styles.subscriptionInput}
//             disabled={loading}
//           />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email"
//             required
//             className={styles.subscriptionInput}
//             disabled={loading}
//           />
//           <button
//             type="submit"
//             className={styles.subscriptionButton}
//             disabled={loading}
//           >
//             {loading ? 'Subscribing...' : 'Subscribe'}
//           </button>
//         </form>
//       </div>

//       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Subscription Successful!</h3>
//           <p className="py-4">Thank you for subscribing. Check your email for a special message!</p>
//           <div className="modal-action">
//             <form method="dialog">
//               <button className="btn">Close</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </>
//   );
// }


import { useState } from 'react';
import styles from '../styles/subscribe.module.css'; // Assuming this is a CSS Module

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);  // To store the error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);  // Reset any previous error messages

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setName('');
        setEmail('');
        document.getElementById('my_modal_5').showModal();  // Show success modal
      } else {
        let errorData = {};
        try {
          errorData = await res.json();
        } catch (jsonError) {
          console.error('Failed to parse JSON:', jsonError);
          errorData.message = 'Unexpected error occurred';
        }

        // If the error message indicates already subscribed
        if (errorData.message === 'You are already subscribed to the Bhagavad Gita Verse of the Day.') {
          setErrorMessage(errorData.message);  // Set the error message
          document.getElementById('my_modal_6').showModal();  // Show the error modal
        } else {
          alert(`Subscription failed: ${errorData.message || 'Unknown error'}`);
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert(`Subscription failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
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

      {/* Success Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Subscription Successful!</h3>
          <p className="py-4">Thank you for subscribing. Check your email for a special message!</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Error Modal */}
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Subscription Failed</h3>
          <p className="py-4">{errorMessage || 'An unknown error occurred. Please try again later.'}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
