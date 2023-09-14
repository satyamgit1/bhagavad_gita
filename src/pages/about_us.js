import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function About_us(){
    return(
        
        <div>
        <div>
            <Navbar />
        </div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/logo.png" className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">About us</h1>
      <p className="py-6">As a passionate and dedicated computer science student at Thakur College of Engineering and Technology, I am constantly seeking opportunities to enhance my skills in software development. With expertise in HTML, CSS, JavaScript, Java, React.js, SQL, and DBMS, I have a solid foundation in web development and database management. Driven by a problem-solving mindset, I thrive on using technology to overcome complex challenges and create innovative solutions. Whether working independently or as part of a team, I bring a meticulous attention to detail and a strong ability to identify and resolve issues efficiently. My effective communication skills and collaborative nature enable me to work seamlessly with stakeholders from diverse backgrounds. I have successfully led cross-functional teams, leveraging my skills to exceed expectations and deliver exceptional results. Constantly striving for growth, I am well-versed in the latest software development methodologies like Service-now develop</p>
      <button className="btn btn-primary">Join us</button>
    </div>
  </div>
</div>
<Footer />
        </div>
    )
}
export default About_us;