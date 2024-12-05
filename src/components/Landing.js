
// // components/Landing.js
// import React, { useRef } from "react";
// import Image from "next/image";
// import { Fade } from "react-awesome-reveal";
// import { useRouter } from "next/router";

// export default function Landing({ onBeginNewLife }) {
//   const router = useRouter();
//   const modalRef = useRef(null);

//   const handleBeginNewLife = () => {
//     onBeginNewLife(); // Notify parent component to show chapters
//   };

//   const closeModal = () => {
//     modalRef.current.close();
//   };

//   return (
//     <div id="" className="bg-lightpink p-9 ">
//       <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
//           <div className="col-span-6 flex flex-col justify-center">
//             <Fade
//               direction={"up"}
//               delay={400}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
//               <h1 className="text-4xl lg:text-7xl font-semibold mb-5 md:4px lg:text-start text-center">
//                 श्रीमद भगवद गीता
//               </h1>
//             </Fade>
//             <Fade
//               direction={"up"}
//               delay={800}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
//               <p className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
//                 The mind acts like an enemy for those who do not control it. -
//                 Lord Krishna
//               </p>
//             </Fade>
//             <Fade
//               direction={"up"}
//               delay={1000}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
//               <div className="md:flex align-middle justify-center lg:justify-start">
//                 <div
//                   className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink cursor-pointer "
//                   onClick={handleBeginNewLife}
//                 >
//                   Read Now
//                 </div>

//                 <div>
//                   <div
//                     className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink cursor-pointer  "
//                     onClick={() => modalRef.current.showModal()}
//                   >
//                     Talk to Krishna
//                   </div>

//                   <dialog
//                     ref={modalRef}
//                     id="my_modal_4"
//                     className="modal"
//                     onClick={(e) => {
//                       if (e.target === modalRef.current) {
//                         closeModal();
//                       }
//                     }}
//                   >
//                     <div className="modal-box">
//                       <iframe
//                         src="https://gitagpt.org/#"
//                         frameBorder="0"
//                         className="custom-iframe"
//                       ></iframe>
//                       <div className="modal-action modal-backdrop">
//                         <form method="dialog">
//                           <button
//                             className="custom-button"
//                             onClick={closeModal}
//                           >
//                             Close
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                   </dialog>
//                 </div>
//               </div>
//             </Fade>
//           </div>

//           <div className="col-span-6 flex justify-center relative">
//             <Image
//               src="/poster.jpeg"
//               alt="nothing"
//               width={1000}
//               height={1000}
//               className="rounded-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useRef } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

export default function Landing({ onBeginNewLife }) {
  const router = useRouter();
  const modalRef = useRef(null);

  const handleBeginNewLife = () => {
    onBeginNewLife(); // Notify parent component to show chapters
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <div className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 py-16 px-6">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left Column - Text Section */}
          <div className="col-span-6 flex flex-col justify-center text-center lg:text-left space-y-6">
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce={true}>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight transform animate__animated animate__fadeIn animate__delay-1s">
                श्रीमद भगवद गीता
              </h1>
            </Fade>

            <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce={true}>
              <p className="text-white text-lg font-medium opacity-80 animate__animated animate__fadeIn animate__delay-1s">
                "The mind acts like an enemy for those who do not control it."
                <br />— Lord Krishna
              </p>
            </Fade>

            <Fade direction="up" delay={1000} cascade damping={0.1} triggerOnce={true}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Read Now Button */}
                <button
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xl font-semibold py-4 px-8 rounded-full shadow-xl hover:bg-gradient-to-l transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
                  onClick={handleBeginNewLife}
                >
                  Read Now
                </button>

                {/* Talk to Krishna Button */}
                <button
                  className="bg-transparent border-2 border-white text-white text-xl font-semibold py-4 px-8 rounded-full shadow-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
                  onClick={() => modalRef.current.showModal()}
                >
                  Talk to Krishna
                </button>
              </div>
            </Fade>
          </div>

          {/* Right Column - Image Section */}
          <div className="col-span-6 flex justify-center relative">
            <div className="transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
              <Image
                src="/poster.jpeg"
                alt="Shrimad Bhagavad Gita Poster"
                width={800}
                height={800}
                className="rounded-xl shadow-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for "Talk to Krishna" */}
      <dialog ref={modalRef} id="my_modal_4" className="modal">
        <div className="modal-box max-w-4xl">
          <iframe
            src="https://gitagpt.org/#"
            frameBorder="0"
            className="w-full h-[400px] sm:h-[500px] rounded-xl shadow-lg transform transition-all duration-300"
          ></iframe>
          <div className="modal-action">
            <button
              className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-all duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
