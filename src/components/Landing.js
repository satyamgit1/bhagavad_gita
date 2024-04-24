// components/landing.js
import React, { useRef } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();
  const modalRef = useRef(null);

  const handleBeginNewLife = () => {
    router.push("#shlok");
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <div id="" className="bg-lightpink p-9 ">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
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
              <p className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
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
              <div className="md:flex align-middle justify-center lg:justify-start">
                <div
                  className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink cursor-pointer "
                  onClick={handleBeginNewLife}
                >
                  Begin New Life
                </div>

                <div>
                  <div
                    className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink cursor-pointer  "
                    onClick={() => modalRef.current.showModal()}
                  >
                    Talk to Krishna
                  </div>

                  {/* Open the modal using document.getElementById('ID').showModal() method */}

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
                    <div className="modal-box">
                      <iframe
                        src="https://gitagpt.org/#"
                        frameBorder="0"
                        className="custom-iframe"
                      ></iframe>
                      <div className="modal-action modal-backdrop">
                        <form method="dialog">
                          <button
                            className="custom-button"
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

          <div className="col-span-6 flex justify-center relative">
            <Image
              src="/poster.jpeg"
              alt="nothing"
              width={1000}
              height={1000}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}
