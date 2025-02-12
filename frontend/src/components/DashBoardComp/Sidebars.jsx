import {useState, useEffect} from 'react'

export function Sidebar(props) {

  const isAdmin = true;
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [isMess, setIsMess] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOpen(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="h-[calc(100% - 60px)] bg-stubgdark">
      {/* Hamburger icon */}
      <button className="md:hidden fixed top-[70px] left-6 z-50 p-2 rounded-md bg-stubgcard/80 backdrop-blur-sm shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"} transform fixed md:relative md:translate-x-0 z-40 w-72 h-[calc(100vh-60px)] bg-stubgdark border-r-[1px] border-gray-600 transition-transform duration-300 ease-in-out`}>
        
        <div className="">
          <nav className='max-h-[calc(100vh-60px)] px-3 pt-6 pb-4 overflow-auto scrollbar-thin scrollbar-webkit'>
              {props.menuItems.map((item)=>{
                if(item.title == "hr"){
                  return(
                    <hr class="border-t-2 border-gray-700 mt-[20%] mb-[10%]" />
                  )
                }
                else if(item.title == "Meal ratings" || item.title == "Mess Menu"){
                  return(
                    <div>
                        {(isAdmin == true && isMess == true) ? (
                          <div className='bg-stubgdark m-2 flex items-center px-3 py-3 hover:bg-stubgcard rounded-sm cursor-pointer'>
                            <div className='flex items-center '>
                              {item.icon}
                            </div>
                            <div className='text-white text-lg font-normal pl-3 flex items-center'>
                              {item.title}
                            </div>
                        </div>
                        ) : (
                          <></>
                        )}
                    </div>
                  )
                }
                else if(item.title == "Category"){
                  return(
                    <>
                      <div className='bg-stubgdark m-2 flex items-center px-3 py-3 hover:bg-stubgcard rounded-sm cursor-pointer'
                        onClick={()=>{setIsExpand(!isExpand)}}>
                        <div className='flex items-center'>
                          {item.icon}
                        </div>
                        <div className='text-white text-lg font-normal pl-3 flex items-center'>
                          Choose Category
                        </div>

                        <div className='flex items-center pl-2'>
                            {isExpand ? (
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            )}
                        </div>

                      </div>
                      <div className={`${isExpand ? "block" : "hidden"}`}>
                        {item.droplist.map((expItem)=>{
                          return(
                            <div className='bg-stubgdark m-2 flex items-center px-6 py-3 hover:bg-stubgcard rounded-sm cursor-pointer'
                            onClick={()=>{
                              if(isAdmin && expItem.title == "Mess"){
                                setIsMess(!isMess);
                              }
                            }}>
                              <div className='flex items-center'>
                                {expItem.icon}
                              </div>
                              <div className='text-white text-lg font-normal pl-3 flex items-center'>
                                {expItem.title}
                              </div>
                            </div>
                          )
                        })}

                      </div>
                    </>
                  )
                }
                else{
                  return(
                    <div className='bg-stubgdark m-2 flex items-center px-3 py-3 hover:bg-stubgcard rounded-sm cursor-pointer'>
                        <div className='flex items-center '>
                          {item.icon}
                        </div>
                        <div className='text-white text-lg font-normal pl-3 flex items-center'>
                          {item.title}
                        </div>
                    </div>
                  )
                }
              })}
          </nav>
        </div>

      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}