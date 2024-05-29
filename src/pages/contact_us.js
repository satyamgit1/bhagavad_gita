import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { myFetch } from "@/utils/myFetch";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false); // State for form submission loading
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [pageLoading, setPageLoading] = useState(true); // State for page loading

  useEffect(() => {
    // Simulate a delay for loading the page
    setTimeout(() => {
      setPageLoading(false);
    }, 1000); // Adjust the timeout as needed
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `/api/contact`;
    try {
      setSubmitting(true); // Start loading
      let data = await myFetch(url, "POST", formData);
      console.log("Successful:", data);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false); // Stop loading
    }
  };

  return (
    <div>
      <Navbar />
      {pageLoading ? (
        <div class="loader center ">
  <div class="panWrapper">
    <div class="pan">
      <div class="food"></div>
      <div class="panBase"></div>
      <div class="panHandle"></div>
    </div>
    <div class="panShadow"></div>
  </div>
</div>
      ) : (
        <section className="min-h-screen">
          <div className="px-6 py-10 mx-auto">
            <div className="lg:flex">
              {!submitSuccess && (
                <div className="lg:w-2/3 lg:mx-10">
                  <h1 className="text-2xl font-semibold lg:text-3xl">Let's talk</h1>
                  <p className="mt-4">
                    Ask us everything and we would love to hear from you
                  </p>
                  <form className="mt-12" onSubmit={handleSubmit}>
                    <div>
                      <label className="block mb-2 text-sm">Name</label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
                        className="block w-full px-5 py-3 mt-2 input input-bordered"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm">Email address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        className="block w-full px-5 py-3 mt-2 input input-bordered"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm">Mobile</label>
                      <input
                        type="text"
                        required
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder=""
                        className="block w-full px-5 py-3 mt-2 input input-bordered"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm">Message</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full h-32 px-5 py-3 mt-2 input input-bordered"
                        placeholder="Message"
                      ></textarea>
                      {!submitting && <input type="submit" className="btn" />}
                      {submitting && (
                        <button className="btn px-6 py-3 mt-4" disabled>
                          <span className="loading loading-spinner"></span>
                          Submitting
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              )}
              {submitSuccess && (
                <div className="lg:w-2/3 lg:mx-10">
                  <p className="mt-4">
                    <div role="alert" className="alert alert-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Thank you.. Our Team will contact you soon!</span>
                    </div>
                  </p>
                </div>
              )}
              <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                <Image
                  className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                  src="/logo.png"
                  alt=""
                />
                <div className="mt-6 space-y-8 md:mt-8">
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-yellow-500 dark:text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="mx-2">Mumbai , Naigaon</span>
                  </p>
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-yellow-500 dark:text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="mx-2">9730447447</span>
                  </p>
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-yellow-500 dark:text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="mx-2">satyamsingh2003a@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

export default Contact;
