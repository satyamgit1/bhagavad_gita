import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import custom from "./custom.module.css";
import Image from "next/image";

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
          <div>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <Image
                  src="/my_pic2.png"
                  width={500}
                  height={500} // Add the required "width" property
                  className="max-w-sm rounded-lg shadow-2xl"
                  alt="Profile Picture"
                />
                <div>
                  <h1 className="text-5xl font-bold">Satyam Singh 😎</h1>
                  <p className="py-6">
                    Hey there, I&apos;m Satyam Singh, your all-in-one full stack
                    developer extraordinaire. 🚀 I&apos;ve mastered the art of
                    wrangling code, from crafting a website for a scholarship
                    program (because who doesn&apos;t love a good challenge?) to
                    designing a school website that makes learning look cool
                    (yes, websites can be cool). 😎 I speak more programming
                    languages than I have fingers—Java, JavaScript, C, C++,
                    Python—because who needs a social life when you have syntax
                    to perfect? 💻 Frameworks like React, Node.js, Express.js,
                    MongoDB? Consider them conquered faster than you can say
                    &quot;tech stack.&quot; 🌟 When I&apos;m not lost in the matrix, you&apos;ll
                    find me binge-watching sci-fi classics and pretending I can
                    cook like Gordon Ramsay (spoiler: I can&apos;t 🍳). My
                    superpowers include turning bugs into features and making
                    complex systems look like child&apos;s play. 💪 So, whether you
                    need a website that dazzles or a backend that runs smoother
                    than a buttered pan, I&apos;m your guy. Let&apos;s code our way to
                    world domination—because why settle for ordinary when you
                    can code with sass and style? 💻✨
                  </p>
                  <button className="btn btn-primary">Lets Connect</button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default About_us;
