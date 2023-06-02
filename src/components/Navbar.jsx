function Navbar() {
  return (

    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-sky-500/[.06]">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-indigo-200">
            <div className="bg-indigo h-16 justify-between items-center mx-auto px-4 flex">
              <div>
                <img src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                  className="block btn- h-8 w-auto" alt="" />
              </div>
              <div className="lg:block mr-auto ml-40 hidden relative max-w-xs">
                <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="items-center justify-center flex">
                        <svg className="w-5 h-5 text-red-400" fill="none" viewbox="0 0 24 24" stroke="currentColor"
                          stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"/></svg>
                      </span>
                    </span>
                  </span>
                </p>
                <input placeholder="Type to search" type="search" className="border border-indigo-900 focus:ring-red-600
              focus:border-indigo-500 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
              </div>
              <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                <div className="relative">
                  <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                    <span className="items-center justify-center flex">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"style={{ enableBackground: 'new 0 0 456.147 456.147' }}><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 
                    416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 
                    74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2
                     160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 
                    5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3
                     300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                      
                    </span>
                  </p>
                </div>
                <div className="relative">
                  <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex">
                        <span className="items-center justify-center flex">
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                            stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                        0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
                        0H9"/></svg>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex
                absolute -top-px -right-1">2</p>
                </div>
                <div className="justify-center items-center flex relative">
                  <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                    className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300" alt="" />
                  <p className="font-semibold text-sm">Marrie Currie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  );
}

export default Navbar;