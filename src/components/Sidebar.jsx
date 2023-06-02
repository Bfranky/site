import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-indigo-700"></div>
      <div className="bg-indigo-700">
        <div className="flex-col flex bg-indigo-700">
          <div className="w-full border-b-2 border-gray-200"></div>
          <div className="flex bg-gray-100  overflow-x-hidden">
            <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
              <div className="flex-col pt-5 flex overflow-y-auto bg-[#84c0d04a]">
                <div className="h-full flex-col justify-between px-4 flex">
                  <div className="space-y-4">
                    <div className="bg-top bg-cover space-y-1">
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-red-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-red-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center flex">
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="items-center justify-center flex">
                                <svg
                                  className="flex-shrink-0 w-5 h-5 mr-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewbox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1
                              1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  />
                                </svg>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span>Dashboard</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-red-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-red-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center flex">
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="items-center justify-center flex">
                                {/* <svg className="flex-shrink-0 w-5 h-5 mr-4" stroke-width="1.5"  width="30" height="24" viewbox="0 0 24 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 
                                                             35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 
                                                             80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 
                                                             1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 
                                                             16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16
                                                              7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"  stroke="#4F4F4F" 
                                                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                                                <svg x="3" y="3" width="18" height="18" rx="2" stroke="#4F4F4F" stroke-width="2"></svg> */}
                              </span>
                            </span>
                          </span>
                        </span>
                        <span>About</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-red-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-red-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center flex">
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="items-center justify-center flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm60a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <svg
                                  width="18"
                                  height="18"
                                  rx="3"
                                  stroke="#4F4F4F"
                                  stroke-width="2"
                                ></svg>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span>Hero</span>
                      </a>
                    </div>
                    <div>
                      <p className="px-4 font-semibold text-xm tracking-widest text-red-600 uppercase">
                        Data
                      </p>
                      <div className="mt-4 bg-top bg-cover space-y-1">
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-red-900 px-4 py-2.5 inline-flex
                      transition-all duration-200 hover:bg-red-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex wrap">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 
                                                                3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 
                                                                011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 
                                                                3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z"
                                    />
                                  </svg>
                                  <svg
                                    width="10"
                                    height="10"
                                    rx="3"
                                    stroke="#4F4F4F"
                                    stroke-width="1"
                                  ></svg>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Folders</span>
                        </a>
                        <a
                          href="#"
                          className="font-medium flex text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0
                                                            011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75
                                                            3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-
                                                            .1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Alerts</span>
                        </a>
                        <a
                          href="#"
                          className="font-medium flex text-sm items-center rounded-lg text-red-900 px-4 py-2.5 
                      transition-all duration-200 hover:bg-red-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 mr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewbox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2
                                2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Statistics</span>
                          <span
                            className="px-2 py-0.5 items-center font-semibold text-xs ml-auto bg-indigo-50 text-indigo-600
                        rounded-full uppercase border border-indigo-300 inline-flex"
                          >
                            New
                          </span>
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="px-4 font-semibold text-xm tracking-widest text-red-400 uppercase">
                        Contact
                      </p>
                      <div className="mt-4 bg-top bg-cover space-y-1">
                        <a
                          href="#"
                          className="font-medium flex text-sm items-center rounded-lg text-red-900 px-4 py-2.5
                      transition-all duration-200 hover:bg-red-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 mr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    // class='w-6 h-6'
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zM9 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Forms</span>
                          <span
                            className="px-2 py-0.5 items-center font-semibold text-xs ml-auto bg-gray-500 text-white
                        rounded-full uppercase border border-transparent inline-flex"
                          >
                            15
                          </span>
                        </a>
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Agents</span>
                        </a>
                        <a
                          href="#"
                          className="font-medium  text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M392 32H56C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56zm-108.3 82.1c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zm-74.6-7.5c0-19.8 29.9-19.8 29.9 0v216.5c0 19.8-29.9 19.8-29.9 0V106.6zm-74.7 7.5c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zM59.7 144c0-19.8 29.9-19.8 29.9 0v134.3c0 19.8-29.9 19.8-29.9 0V144zm323.4 227.8c-72.8 63-241.7 65.4-318.1 0-15-12.8 4.4-35.5 19.4-22.7 65.9 55.3 216.1 53.9 279.3 0 14.9-12.9 34.3 9.8 19.4 22.7zm5.2-93.5c0 19.8-29.9 19.8-29.9 0V144c0-19.8 29.9-19.8 29.9 0v134.3z"/></svg>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Customers</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 pb-4">
                    <div className="bg-top bg-cover space-y-1">
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center flex">
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="items-center justify-center flex">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M392 32H56C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56zm-108.3 82.1c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zm-74.6-7.5c0-19.8 29.9-19.8 29.9 0v216.5c0 19.8-29.9 19.8-29.9 0V106.6zm-74.7 7.5c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zM59.7 144c0-19.8 29.9-19.8 29.9 0v134.3c0 19.8-29.9 19.8-29.9 0V144zm323.4 227.8c-72.8 63-241.7 65.4-318.1 0-15-12.8 4.4-35.5 19.4-22.7 65.9 55.3 216.1 53.9 279.3 0 14.9-12.9 34.3 9.8 19.4 22.7zm5.2-93.5c0 19.8-29.9 19.8-29.9 0V144c0-19.8 29.9-19.8 29.9 0v134.3z"/>
                              </svg>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0
                              002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756
                              2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0
                              00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0
                              00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0
                              00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0
                              001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016
                              0z"
                                />
                              </span>
                            </span>
                          </span>
                        </span>
                        <span>Settings</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center flex">
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="items-center justify-center flex">
                                <svg
                                  className="mr-4"
                                  width="24"
                                  height="24"
                                  viewbox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                />
                                <path
                                  d="M8 18.9282C9.21615 19.6303 10.5957 20 12
                              20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282
                              16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385
                              17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8
                              5.0718"
                                  stroke="#4F4F4F"
                                  stroke-width="2"
                                />
                                <path
                                  d="M2 12L1.21913 11.3753L0.719375
                              12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11
                              11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913
                              6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2
                              13H11V11H2V13Z"
                                  fill="#4F4F4F"
                                />
                              </span>
                            </span>
                          </span>
                        </span>
                        <span>Logout</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
