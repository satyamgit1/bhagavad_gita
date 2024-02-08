<form
                action="https://formspree.io/f/mqkrkykk"
                method="POST"
                class="mt-12"
              >
                <div class="-mx-2 md:items-center md:flex">
                  {/* <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm ">Full Name</label>
                            <input type="text" placeholder="Krishna"  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div> */}

                  <div class="flex-1 px-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm">Email address</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      className="block w-full px-5 py-3 mt-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-b"
                      required
                    />
                  </div>
                </div>

                <div class="w-full mt-4 ">
                  <label class="block mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    required
                  ></textarea>{" "}
                </div>

                <button
                  type="submit"
                  class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  get in touch
                </button>
              </form>