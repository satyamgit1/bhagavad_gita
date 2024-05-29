import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import custom from "./custom.module.css";

function About_us() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second (you can adjust this value)
    }, 1000); // Adjust the timeout duration as needed

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        
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
        <>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src="/logo.png" className="max-w-sm rounded-lg" alt="Logo" />
              <div>
                <h1 className="text-5xl font-bold">About us</h1>
                <p className="py-6">
                  As a passionate and dedicated computer science student at Thakur College of Engineering and Technology,
                  I am constantly seeking opportunities to enhance my skills in software development. With expertise in
                  HTML, CSS, JavaScript, Java, React.js, SQL, and DBMS, I have a solid foundation in web development and
                  database management. Driven by a problem-solving mindset, I thrive on using technology to overcome
                  complex challenges and create innovative solutions. Whether working independently or as part of a team,
                  I bring meticulous attention to detail and a strong ability to identify and resolve issues efficiently.
                  My effective communication skills and collaborative nature enable me to work seamlessly with stakeholders
                  from diverse backgrounds. I have successfully led cross-functional teams, leveraging my skills to exceed
                  expectations and deliver exceptional results. Constantly striving for growth, I am well-versed in the
                  latest software development methodologies like Service-now develop.
                </p>
                <button className="btn btn-primary">Join us</button>
              </div>
            </div>
          </div>

          {/* My Team section */}
          <div>
            <section className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl">Our Executive Team</h1>
              <p className="max-w-2xl mx-auto my-6 text-center">
                As a recent college graduate eager to embark on a rewarding career journey, I am passionate about learning
                and honing my skills as a Full Stack Developer. Armed with a solid academic foundation and a hunger for new
                challenges, I am committed to staying abreast of industry trends and technologies. My goal is to contribute
                meaningfully to a dynamic team, leveraging my adaptability and dedication to continuous improvement. I am
                excited about the opportunity to apply my fresh perspective and foundational knowledge to real-world
                projects, making a positive impact and evolving into a proficient Full Stack Developer.
              </p>
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-600 dark:border-gray-700 dark:hover:border-transparent">
                  <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="/my_pic.png" alt="Satyam" />
                  <h1 className="mt-4 text-2xl font-semibold text-white-700 capitalize group-hover:text-white">Satyam</h1>
                  <p className="mt-2 capitalize group-hover:text-gray-300">Software Developer</p>
                  <div className="flex mt-3 -mx-2">
                    <a href="#" className="mx-2 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM6.807 10.543c-.598.001-1.136.366-1.357.922-.221.557-.08 1.191.356 1.601.115.109.247.198.391.264-.012.146-.012.293 0 .439 0 2.24 2.615 4.062 5.829 4.062s5.829-1.822 5.829-4.062c.011-.146.011-.293 0-.439.606.305.927.982.772 1.638-.155.656-.745 1.117-1.419 1.106h-.053c-.358-.014-.699-.159-.957-.407-1.138.774-2.475 1.201-3.85 1.23L13 6.65l2.138.45c.055.507.482.891.992.892.037 0 .074-.002.111-.006.53-.053.925-.513.898-1.045-.027-.532-.466-.95-1-.951-.038 0-.076.003-.113.009-.329.034-.611.217-.771.493L12.82 6c-.022-.005-.044-.007-.066-.007-.145.002-.269.103-.3.245L11.706 9.71c-1.392-.02-2.747.407-3.899 1.189-.27-.255-.628-.397-.999-.397zm5.373 5.981c-.056 0-.113 0-.169.001-.944.004-1.75-.267-2.413-.766a.751.751 0 00-.321-.1.751.751 0 00-.319.1c-.56.411-1.237.631-1.932.629a4.345 4.345 0 01-.997-.102 4.504 4.504 0 01-2.102-1.023 3.217 3.217 0 01-.527-.569l-.157-.193.157.193a.738.738 0 00.235.182 3.217 3.217 0 00.527.569 4.504 4.504 0 002.102 1.023 4.345 4.345 0 00.997.102c.695.002 1.372-.218 1.932-.629a.751.751 0 00.321-.1.751.751 0 00.319.1c.663.499 1.47.77 2.414.766h.169c.832-.001 1.641-.272 2.198-.772l.157-.193-.157.193a3.217 3.217 0 00.527-.569 4.504 4.504 0 00.527-.569 3.217 3.217 0 00.527-.569l.157-.193-.157.193c-.191-.246-.512-.379-.827-.369-.341-.008-.676-.171-.927-.457l-.093-.106.093.106c.191-.246.512-.379.827-.369.316-.01.636-.123.827-.369.191-.246.328-.562.393-.904.064-.342.014-.692-.14-1.018a1.515 1.515 0 00-1.286-.84 1.515 1.515 0 00-.486.108c-.233.099-.45.275-.64.496l-.14.161-.155.178a.838.838 0 00-.184.235l-.087.115a.743.743 0 00-.103.154l-.035.052a.838.838 0 00-.058.164c-.035.11-.074.222-.123.332a.838.838 0 00-.123.332.838.838 0 00-.058.164l-.035.052a.838.838 0 00-.103.154l-.087.115c-.058.076-.12.148-.184.235l-.14.161-.14.161-.155.178c-.191.221-.407.397-.64.496-.08.036-.163.065-.248.086a1.515 1.515 0 01-1.353-.116 1.515 1.515 0 01-.928-.496 3.217 3.217 0 01-.466-.639 4.504 4.504 0 01-.527-.569 3.217 3.217 0 01-.527-.569l-.157-.193.157.193z"></path>
                      </svg>
                    </a>
                    <a href="#" className="mx-2 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54v-2.91h2.54V9.915c0-2.506 1.492-3.89 3.777-3.89 1.096 0 2.24.196 2.24.196v2.47h-1.262c-1.242 0-1.63.77-1.63 1.556v1.886h2.773l-.443 2.91H15.563V21.88C20.343 21.128 22 17.99 22 13 22 7.478 17.523 3 12 3S2 7.478 2 13c0 5.006 3.657 9.128 8.438 9.878V14.89h-2.54v-2.91h2.54V9.915c0-2.506 1.492-3.89 3.777-3.89 1.096 0 2.24.196 2.24.196v2.47h-1.262c-1.242 0-1.63.77-1.63 1.556v1.886h2.773l-.443 2.91H15.563V21.88C20.343 21.128 22 17.99 22 13"></path>
                      </svg>
                    </a>
                    <a href="#" className="mx-2 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12a9.96 9.96 0 004.581 8.376c.336.061.46-.146.46-.325v-1.125c-1.872.408-2.26-.911-2.26-.911-.306-.783-.747-.99-.747-.99-.611-.417.047-.409.047-.409.676.05 1.031.693 1.031.693.606 1.04 1.544.74 1.916.566.062-.438.238-.74.433-.911-1.497-.17-3.073-.748-3.073-3.315 0-.733.258-1.333.681-1.803-.064-.17-.295-.85.064-1.78 0 0 .568-.185 1.862.684a6.41 6.41 0 011.693-.227c.575.003 1.154.078 1.693.227 1.295-.87 1.862-.684 1.862-.684.359.93.128 1.61.064 1.78.424.47.681 1.07.681 1.803 0 2.573-1.576 3.144-3.073 3.315.245.211.465.624.465 1.26v1.87c0 .179.124.386.46.325A9.96 9.96 0 0022 12c0-5.523-4.477-10-10-10z"></path>
                      </svg>
                    </a>
                    <a href="#" className="mx-2 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="LinkedIn">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.002 12c0-5.523-4.478-10.002-10.002-10.002C6.478 1.998 2 6.478 2 12c0 5.523 4.478 10.002 10.002 10.002C17.524 22.002 22.002 17.523 22.002 12zM8.337 16.947H5.862v-7.32h2.475v7.32zm-1.24-8.334H7.09c-.787 0-1.286-.538-1.286-1.238 0-.716.51-1.238 1.32-1.238s1.286.522 1.316 1.238c0 .7-.52 1.238-1.315 1.238zm10.055 8.334h-2.46v-3.946c0-.989-.325-1.664-1.15-1.664-.632 0-1.008.43-1.175.848-.064.162-.08.39-.08.618v4.143H10.97v-7.32h2.46v.97h.035c.332-.51.93-1.234 2.075-1.234 1.52 0 2.665 1.01 2.665 3.183v4.4h.003z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default About_us;
