
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



// components/Landing.js
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
    <div className="relative bg-lightpink dark:bg-darkgray p-6 sm:p-9">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/poster.jpeg"
          alt="Poster"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-7xl pt-16 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:space-x-1">
          <div className="col-span-6 flex flex-col justify-center relative z-10">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-semibold mb-5 text-center lg:text-start text-black dark:text-gray-300">
                श्रीमद भगवद गीता
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-gray-700  dark:text-gray-400 text-sm sm:text-base lg:text-lg font-normal mb-6 sm:mb-10 text-center lg:text-start">
                The mind acts like an enemy for those who do not control it. -
                Lord Krishna
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start">
                <div
                  className="flex border w-full sm:w-auto mt-4 sm:mt-0 border-pink dark:border-pink justify-center rounded-full text-lg sm:text-xl font-medium items-center py-3 sm:py-5 px-8 sm:px-10 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 text-black dark:text-gray-300"
                  onClick={handleBeginNewLife}
                >
                  Read Now
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-4">
                  <div
                    className="flex border w-full sm:w-auto border-pink dark:border-pink justify-center rounded-full text-lg sm:text-xl font-medium items-center py-3 sm:py-5 px-8 sm:px-10 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 text-black dark:text-gray-300"
                    onClick={() => modalRef.current.showModal()}
                  >
                    Talk to Krishna
                  </div>

                  <dialog
                    ref={modalRef}
                    id="my_modal_4"
                    className="modal"
                    onClick={(e) => {
                      if (e.target === modalRef.current) {
                        closeModal();
                      }
                    }}
                  >
                    <div className="modal-box bg-white dark:bg-gray-900">
                      <iframe
                        src="https://gitagpt.org/#"
                        frameBorder="0"
                        className="w-full h-96 rounded-lg"
                      ></iframe>
                      <div className="modal-action">
                        <form method="dialog">
                          <button
                            className="btn btn-pink text-black dark:text-gray-300"
                            onClick={closeModal}
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-span-6 hidden lg:flex justify-center relative mt-10 lg:mt-0">
            <Image
              src="/poster.jpeg"
              alt="Poster"
              width={1000}
              height={1000}
              className="rounded-xl w-full h-auto max-w-md lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
