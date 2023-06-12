import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Navbar() {
  const url ="src/assets/7.jpg";
  
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }
  return (

    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-purple-500">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-indigo-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 h-16">
              <div>
              <img
                src={url}
                alt=""
                className="h-10 mr-3"
                 fill
                  />
              </div>
              {/* mobile toggle of the search button */}
              {/* <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
                onClick={hid}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="w-[22rem] hidden border-2 rounded-xl md:block">
                <form onSubmit={handleSubmit}>
                  <ReactSearchAutocomplete
                    styling={{
                      width: "inhert",
                      boxShadow: "none",
                      height: "38px",
                      fontFamily: "inhert",
                      borderRadius: "10px",
                    }}
                    className=""
                    items={articles}
                    fuseOptions={{ keys: ["title"] }}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    formatResult={formatResult}
                  />
                </form>
              </div> */}

              {/* end mobile toggle */}

              {/* search button */}
              <div className="flex md:order-2">

              <div className="relative mt-3 md:hidden pt-1 pr-1 pb-1 pl-20">
                <div className="">
              <div style={{ 
                width: '400px',               
               }}>
                      <ReactSearchAutocomplete
                          styling={{
                            width: 'inhert',
                      boxShadow: "none",
                      height: "46px",
                      fontFamily: "inhert",
                      borderRadius: "10px",
               
                          }}
                      className=''
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                      />
                    </div>
                </div>
              </div>
              
             
              <div className="md:space-x-6 justify-end items-center ml-auto flex flex-wrap">
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
        </div>
      </div></div>
  );
}

export default Navbar;