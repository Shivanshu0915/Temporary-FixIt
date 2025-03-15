// // // import {react, useEffect, useState} from "react";
// // // import { DataCard, ProfileCard } from './Cards.jsx';
// // // import { Dropdown3 } from './Dropdown.jsx'
// // // import { Link } from "react-router";

// // // export function StuMidFirst(){
// // //     const dataItems = [{
// // //         id : 1,
// // //         title : "Fan",
// // //         text : "hjsdjfkljsdkljdlg",
// // //         media : 
// // //     },
// // //     // {
// // //     //     id : 1,
// // //     //     author: "Shivanshu",
// // //     //     isResolved: false,
// // //     //     title : "Random shit sit amet consectetur adipisicing elit. Libero Libero, dolorum alias vero accusantium amet la",
// // //     //     text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
// // //     //     upvoteCount : 10,
// // //     //     downvoteCount : 3
// // //     // },
// // //     // {
// // //     //     id : 1,
// // //     //     author: "Shivanshu",
// // //     //     isResolved: true,
// // //     //     title : "Random shit",
// // //     //     text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
// // //     //     upvoteCount : 10,
// // //     //     downvoteCount : 3
// // //     // },
// // //     // {
// // //     //     id : 1,
// // //     //     author: "Shivanshu",
// // //     //     isResolved: true,
// // //     //     title : "Random shit",
// // //     //     text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
// // //     //     upvoteCount : 10,
// // //     //     downvoteCount : 3
// // //     // },
// // //     // {
// // //     //     id : 1,
// // //     //     author: "Shivanshu",
// // //     //     isResolved: true,
// // //     //     title : "Random shit",
// // //     //     text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
// // //     //     upvoteCount : 10,
// // //     //     downvoteCount : 3
// // //     // }
// // //     ]

// // //     return(
// // //         <>
// // //             <div className='flex w-full'>
// // //                 <div className='w-full pl-[4%] pr-[2%] bg-stubgdark'>
// // //                     <div className='h-[60px] sticky md:relative z-30 bg-stubgdark flex justify-end gap-x-4 md:justify-between items-center px-1 border-b-[1px] border-gray-500'>
// // //                         <Dropdown3 bgc="bg-gray-500" text="Newest" text2="Oldest" hbgc="hover:bg-gray-500/80"></Dropdown3>
// // //                         <Dropdown3 bgc="bg-gray-500" text="Most upvoted" text2="Most Downvoted" hbgc="hover:bg-gray-500/80"></Dropdown3>
// // //                     </div>

// // //                     <div className='w-full flex flex-col gap-y-3 max-h-[calc(100vh-120px)] overflow-y-scroll scrollbar-thin scrollbar-webkit bg-stubgdark z-0 px-1 pt-1'>
// // //                         {/* <div className='text-gray-400 bg-pink-200 w-full p-3'> */}
// // //                             {dataItems.map((item)=>{
// // //                                 return(
// // //                                     <>
// // //                                         <DataCard props={item}></DataCard>
// // //                                     </>
// // //                                 )
// // //                             })}
// // //                         {/* </div> */}
// // //                     </div>

// // //                 </div>
// // //                 <div className='hidden lg:block bg-stubgdark pl-12 pr-8 py-2 w-auto h-[calc(100vh-60px)]'>
// // //                     <div className='bg-stubgcard w-60 h-[350px] overflow-y-auto text-gray-500 rounded-md'>
// // //                         <ProfileCard></ProfileCard>
// // //                     </div>
// // //                 </div>
// // //                 <div className='fixed z-20 bottom-[30px] right-[30px] lg:right-[150px] flex items-center gap-x-2 lg:gap-x-4'>
// // //                     <Link to="file-complaint">
// // //                     <div className='flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer'>
// // //                         <svg  xmlns="http://www.w3.org/2000/svg"  width="36px"  height="36px"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
// // //                     </div>
// // //                     </Link>
// // //                     <div className='flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer'>
// // //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-9">
// // //                             <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
// // //                         </svg>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     )
// // // }

// // ----------------------------- vote, data same waala ------------------------------------------------

// // import React, { useEffect, useState, useCallback } from "react";
// // import { DataCard, ProfileCard } from './Cards.jsx';
// // import { Dropdown3 } from './Dropdown.jsx';
// // import { Link, useLocation } from "react-router-dom";
// // import axios from "axios";

// // export function StuMidFirst() {
// //     const location = useLocation();
// //     const [complaints, setComplaints] = useState([]);
// //     const [nextCursor, setNextCursor] = useState(null);
// //     const [isFetching, setIsFetching] = useState(false);
// //     const [sortDate, setSortDate] = useState("newest");
// //     const [sortVote, setSortVote] = useState("mostUpvoted");
// //     const college = "MNNIT";
// //     const hostel = "Patel";

// //     const category = location.pathname === "/studentDashboard/hostel" ? "hostel" : "mess";

// //     const fetchComplaints = useCallback(async () => {
// //         console.log("fetchComplaints ke andar aaya !")
// //         if (isFetching) return;
// //         setIsFetching(true);

// //         try {
// //             const response = await axios.get("http://localhost:3000/user/fetch-complaints", {
// //                 params: { category, college, hostel, sortVote, sortDate, cursor: nextCursor, limit: 10 }
// //             });

// //             setComplaints(prev => [...prev, ...response.data.complaints]);
// //             console.log("complaints fetch hogyi !");
// //             console.log("complaints : ", response.data.complaints);
// //             setNextCursor(response.data.nextCursor);
// //         } catch (error) {
// //             console.error("Error fetching complaints:", error);
// //         } finally {
// //             setIsFetching(false);
// //         }
// //     }, [category, sortVote, sortDate, nextCursor, isFetching]);

// //     useEffect(() => {
// //         setComplaints([]);
// //         setNextCursor(null);
// //         fetchComplaints();
// //     }, [category, sortVote, sortDate]);

// //     useEffect(() => {
// //         let debounceTimer;

// //         const handleScroll = () => {
// //             if (debounceTimer) clearTimeout(debounceTimer);
// //             debounceTimer = setTimeout(() => {
// //                 const scrollPosition = window.innerHeight + window.scrollY;
// //                 const threshold = document.body.offsetHeight - 300; // Prefetch 300px before reaching the bottom

// //                 if (scrollPosition >= threshold && nextCursor && !isFetching) {
// //                     fetchComplaints();
// //                 }
// //             }, 150); // 150ms debounce to prevent excessive API calls
// //         };

// //         window.addEventListener("scroll", handleScroll);
// //         return () => {
// //             window.removeEventListener("scroll", handleScroll);
// //             clearTimeout(debounceTimer);
// //         };
// //     }, [fetchComplaints, nextCursor, isFetching]);

//     // return (
//     //     <>
//     //         <div className="flex w-full">
//     //             <div className="w-full pl-[4%] pr-[2%] bg-stubgdark">
//     //                 <div className="h-[60px] sticky top-0 bg-stubgdark flex justify-end gap-x-4 items-center px-1 border-b-[1px] border-gray-500">
//     //                     <Dropdown3 
//     //                         bgc="bg-gray-500" 
//     //                         text="Newest" 
//     //                         text2="Oldest" 
//     //                         hbgc="hover:bg-gray-500/80" 
//     //                         onSelect={(value) => setSortDate(value)}
//     //                     />
//     //                     <Dropdown3 
//     //                         bgc="bg-gray-500" 
//     //                         text="Most upvoted" 
//     //                         text2="Most Downvoted" 
//     //                         hbgc="hover:bg-gray-500/80" 
//     //                         onSelect={(value) => setSortVote(value)}
//     //                     />
//     //                 </div>

//     //                 <div className="w-full flex flex-col gap-y-3 max-h-[calc(100vh-120px)] overflow-y-scroll scrollbar-thin scrollbar-webkit bg-stubgdark px-1 pt-1">
//     //                     {complaints.map((item) => (
//     //                         <DataCard key={item._id} props={item} />
//     //                     ))}
//     //                     {/* {isFetching && <p className="text-center text-gray-400">Loading...</p>} */}
//     //                     {isFetching && (
//     //                     <div className="w-full flex flex-col gap-2 px-2">
//     //                         {[...Array(3)].map((_, i) => (
//     //                         <div key={i} className="h-16 bg-gray-700 animate-pulse rounded-md"></div>
//     //                         ))}
//     //                     </div>
//     //                     )}

//     //                 </div>
//     //             </div>

//     //             <div className="hidden lg:block bg-stubgdark pl-12 pr-8 py-2 w-auto h-[calc(100vh-60px)]">
//     //                 <div className="bg-stubgcard w-60 h-[350px] overflow-y-auto text-gray-500 rounded-md">
//     //                     <ProfileCard />
//     //                 </div>
//     //             </div>

//     //             <div className="fixed z-20 bottom-[30px] right-[30px] lg:right-[150px] flex items-center gap-x-2 lg:gap-x-4">
//     //                 <Link to="file-complaint">
//     //                     <div className="flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer">
//     //                         📢
//     //                     </div>
//     //                 </Link>
//     //                 <div className="flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer">
//     //                     💬
//     //                 </div>
//     //             </div>
//     //         </div>
//     //     </>
//     // );
// // }


// // --------------------------- vote, data separately waala ----------------------------------
// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { DataCard, ProfileCard } from './Cards.jsx';
// import { Dropdown3 } from './Dropdown.jsx';
// import { Navigate, Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { getAccessToken } from "../Authentication/RefreshToken.jsx";

// export function StuMidFirst() {
//     // const firstRender = useRef(true);  // 🚀 Prevents double fetch in StrictMode
//     // const location = useLocation();
//     // const [complaints, setComplaints] = useState([]);
//     // const [nextCursor, setNextCursor] = useState(null);
//     // const [isFetching, setIsFetching] = useState(false);
//     // const [sortDate, setSortDate] = useState("newest");
//     // const [sortVote, setSortVote] = useState("mostUpvoted");

//     // const [category, setCategory] = location.pathname === "/studentDashboard/hostel" ?  useState("hostel") : useState("mess");; // Default to mess
//     // const college = "MNNIT";
//     // const hostel = "Patel";

//     // useEffect(() => {
//     //     if(location.pathname === "/studentDashboard/hostel")    setCategory("hostel");
//     //     else    setCategory("mess");
//     //     console.log("after route changes: ", category);
//     // }, [location.pathname]);

//     // const fetchComplaints = useCallback(async () => {
//     //     if (firstRender.current) {  
//     //         firstRender.current = false;  
//     //         return;  // 🚀 Skips first duplicate render in StrictMode
//     //     }

//     //     // console.log("fetch ke andar aaya");
//     //     if (isFetching) return;
//     //     setIsFetching(true);

//     //     try {
//     //         // Retrieve Access Token from sessionStorage
//     //         let accessToken;
//     //         const result = await getAccessToken();
//     //         if (!result.token) {
//     //             alert("Session expired! Login again to continue");
//     //             return <Navigate to="/login" />
//     //         } else {
//     //             accessToken = result.token
//     //         }

//     //         const response = await axios.get("http://localhost:3000/user/fetch-complaint", {
//     //             params: { category, college, hostel, sortVote, sortDate, cursor: nextCursor, limit: 10 },
//     //             headers: {
//     //                 Authorization: `Bearer ${accessToken}`, // ✅ Send token in headers
//     //             },
//     //             withCredentials: true, // ✅ Send HTTP-only cookies if needed
//     //         });

//     //         // console.log("complaint fetch hogyi");
//     //         setComplaints(prev => [...prev, ...response.data.complaints]);
//     //         console.log("complaints ", complaints);
//     //         setNextCursor(response.data.nextCursor);
//     //     } catch (error) {
//     //         console.error("Error fetching complaints:", error);
//     //     } finally {
//     //         setIsFetching(false);
//     //     }
//     // }, [category, sortVote, sortDate, nextCursor, isFetching]);


//     // // useEffect(() => {
//     // //     setComplaints([]);
//     // //     setNextCursor(null);
//     // //     fetchComplaints();
//     // // }, [category, sortVote, sortDate]);

//     // useEffect(() => {
//     //     setComplaints([]);  // ✅ Clear old complaints
//     //     setNextCursor(null);  // ✅ Reset cursor
//     // }, [category, sortVote, sortDate]);  // 🚀 Runs only when filters change

//     // useEffect(() => {
//     //     if (nextCursor === null) {  // ✅ Ensures fetch happens only when cursor is reset
//     //         fetchComplaints();
//     //     }
//     // }, [nextCursor]);  // ✅ Runs once after reset


//     // useEffect(() => {
//     //     let debounceTimer;

//     //     const handleScroll = () => {
//     //         if (debounceTimer) clearTimeout(debounceTimer);
//     //         debounceTimer = setTimeout(() => {
//     //             const scrollPosition = window.innerHeight + window.scrollY;
//     //             const threshold = document.body.offsetHeight - 300;

//     //             if (scrollPosition >= threshold && nextCursor && !isFetching) {
//     //                 fetchComplaints();
//     //             }
//     //         }, 150);
//     //     };

//     //     window.addEventListener("scroll", handleScroll);
//     //     return () => {
//     //         window.removeEventListener("scroll", handleScroll);
//     //         clearTimeout(debounceTimer);
//     //     };
//     // }, [fetchComplaints, nextCursor, isFetching]);


//     const [category, setCategory] = useState(location.pathname.includes("hostel") ? "hostel" : "mess");
// const [complaints, setComplaints] = useState([]);
// const [nextCursor, setNextCursor] = useState(null);
// const [isFetching, setIsFetching] = useState(false);
// const [sortDate, setSortDate] = useState("newest");
// const [sortVote, setSortVote] = useState("mostUpvoted");

// useEffect(() => {
//     const newCategory = location.pathname.includes("hostel") ? "hostel" : "mess";
//     if (newCategory !== category) {
//         setCategory(newCategory);
//         setComplaints([]);  
//         setNextCursor(null);  
//     }
// }, [location.pathname]);

// const fetchComplaints = async () => {
//     if (isFetching) return;
//     setIsFetching(true);

//     try {
//         const result = await getAccessToken();
//         if (!result.token) {
//             alert("Session expired! Login again to continue");
//             return <Navigate to="/login" />;
//         }

//         const response = await axios.get("http://localhost:3000/user/fetch-complaint", {
//             params: { category, college, hostel, sortVote, sortDate, cursor: nextCursor, limit: 10 },
//             headers: { Authorization: `Bearer ${result.token}` },
//             withCredentials: true,
//         });

//         setComplaints(prev => [...prev, ...response.data.complaints]);
//         setNextCursor(response.data.nextCursor);
//     } catch (error) {
//         console.error("Error fetching complaints:", error);
//     } finally {
//         setIsFetching(false);
//     }
// };

// useEffect(() => {
//     if (nextCursor === null) {
//         fetchComplaints();
//     }
// }, [category, sortVote, sortDate, nextCursor]);

// useEffect(() => {
//     let debounceTimer;

//     const handleScroll = () => {
//         if (debounceTimer) clearTimeout(debounceTimer);
//         debounceTimer = setTimeout(() => {
//             const scrollPosition = window.innerHeight + window.scrollY;
//             const threshold = document.body.offsetHeight - 300;

//             if (scrollPosition >= threshold && nextCursor && !isFetching) {
//                 fetchComplaints();
//             }
//         }, 150);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//         window.removeEventListener("scroll", handleScroll);
//         clearTimeout(debounceTimer);
//     };
// }, [nextCursor, isFetching]);


//     return (
//         <>
//             <div className="flex w-full">
//                 <div className="w-full pl-[4%] pr-[2%] bg-stubgdark">
//                     <div className="h-[60px] sticky top-0 bg-stubgdark flex justify-end gap-x-4 items-center px-1 border-b-[1px] border-gray-500">
//                         <Dropdown3 
//                             bgc="bg-gray-500" 
//                             text="Newest" 
//                             text2="Oldest" 
//                             hbgc="hover:bg-gray-500/80" 
//                             onSelect={(value) => setSortDate(value)}
//                         />
//                         <Dropdown3 
//                             bgc="bg-gray-500" 
//                             text="Most upvoted" 
//                             text2="Most Downvoted" 
//                             hbgc="hover:bg-gray-500/80" 
//                             onSelect={(value) => setSortVote(value)}
//                         />
//                     </div>

//                     <div className="w-full flex flex-col gap-y-3 max-h-[calc(100vh-120px)] overflow-y-scroll scrollbar-thin scrollbar-webkit bg-stubgdark px-1 pt-1">
//                         {complaints.map((item) => (
//                             <DataCard key={item._id} props={item} />
//                         ))}
//                         {/* {isFetching && <p className="text-center text-gray-400">Loading...</p>} */}
//                         {isFetching && (
//                         <div className="w-full flex flex-col gap-2 px-2">
//                             {[...Array(3)].map((_, i) => (
//                             <div key={i} className="h-16 bg-gray-700 animate-pulse rounded-md"></div>
//                             ))}
//                         </div>
//                         )}

//                     </div>
//                 </div>

//                 <div className="hidden lg:block bg-stubgdark pl-12 pr-8 py-2 w-auto h-[calc(100vh-60px)]">
//                     <div className="bg-stubgcard w-60 h-[350px] overflow-y-auto text-gray-500 rounded-md">
//                         <ProfileCard />
//                     </div>
//                 </div>

//                 <div className="fixed z-20 bottom-[30px] right-[30px] lg:right-[150px] flex items-center gap-x-2 lg:gap-x-4">
//                     <Link to="file-complaint">
//                         <div className="flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer">
//                             📢
//                         </div>
//                     </Link>
//                     <div className="flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer">
//                         💬
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// ---------------------------- Chatgpt optimised version ---------------------------
import React, { useEffect, useState, useRef, useCallback } from "react";
import { DataCard, ProfileCard } from "./Cards.jsx";
import { Dropdown3 } from "./Dropdown.jsx";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { getAccessToken } from "../Authentication/RefreshToken.jsx";

export function StuMidFirst() {
    const location = useLocation();
    const containerRef = useRef(null);
    const [complaints, setComplaints] = useState([]);
    const [nextCursor, setNextCursor] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [sortDate, setSortDate] = useState("newest");
    const [sortVote, setSortVote] = useState("mostUpvoted");
    const [category, setCategory] = useState(
        location.pathname === "/studentDashboard/hostel" ? "hostel" : "mess"
    );

    const college = "MNNIT";
    const hostel = "Patel";

    // Update category when route changes and reset complaints/cursor
    useEffect(() => {
        const newCategory =
            location.pathname === "/studentDashboard/hostel" ? "hostel" : "mess";
        if (newCategory !== category) {
            setCategory(newCategory);
            setComplaints([]);
            setNextCursor(null);
        }
    }, [location.pathname, category]);

    // Reset complaints when sort filters change (sortDate or sortVote)
    useEffect(() => {
        setComplaints([]);
        setNextCursor(null);
    }, [sortDate, sortVote]);

    // Fetch complaints from server
    const fetchComplaints = useCallback(async () => {
        // console.log("set date : ", sortDate);
        if (isFetching) return;
        setIsFetching(true);

        try {
            const result = await getAccessToken();
            if (!result.token) {
                alert("Session expired! Login again to continue");
                window.location.href = "/login";
                return;
            }

            const response = await axios.get(
                "http://localhost:3000/user/fetch-complaint",
                {
                    params: {
                        category,
                        college,
                        hostel,
                        sortByVotes: sortVote, // Note the key name change
                        sortByDate: sortDate,
                        cursor: nextCursor,
                        limit: 10,
                    },
                    headers: { Authorization: `Bearer ${result.token}` },
                    withCredentials: true,
                }
            );

            // If nextCursor exists, append new complaints; otherwise, replace
            if (nextCursor) {
                setComplaints((prev) => [...prev, ...response.data.complaints]);
            } else {
                setComplaints(response.data.complaints);
            }
            setNextCursor(response.data.nextCursor);
        } catch (error) {
            console.error("Error fetching complaints:", error);
        } finally {
            setIsFetching(false);
        }
    }, [category, sortVote, sortDate, nextCursor, isFetching]);

    // Trigger an initial fetch when complaints list is empty
    useEffect(() => {
        if (complaints.length === 0 && !isFetching) {
            fetchComplaints();
        }
    }, [complaints, isFetching, fetchComplaints]);

    // Infinite scroll using container's scroll event
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        let debounceTimer;

        const handleScroll = () => {
            if (debounceTimer) clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const { scrollTop, scrollHeight, clientHeight } = container;
                const threshold = scrollHeight - clientHeight - 100; // 100px from bottom
                if (scrollTop >= threshold && nextCursor && !isFetching) {
                    fetchComplaints();
                }
            }, 150);
        };

        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
            clearTimeout(debounceTimer);
        };
    }, [nextCursor, isFetching, fetchComplaints]);

    console.log("complaints print karra ");
    {
        complaints.map((item) => (
            console.log(item)
        ))
    }
    return (
        <div className="flex w-full">
            <div className="w-full pl-[4%] pr-[2%] bg-stubgdark">
                {/* Filter Bar */}
                <div className="h-[60px] sticky top-0 bg-stubgdark flex justify-end gap-x-4 items-center px-1 border-b-[1px] border-gray-500">
                    <Dropdown3
                        bgc="bg-gray-500"
                        text="Newest"
                        text2="Oldest"
                        hbgc="hover:bg-gray-500/80"
                        onSelect={(value) => setSortDate(value)}
                    />
                    <Dropdown3
                        bgc="bg-gray-500"
                        text="Most upvoted"
                        text2="Most downvoted"
                        hbgc="hover:bg-gray-500/80"
                        onSelect={(value) => setSortVote(value)}
                    />
                </div>

                {/* Complaints List Container */}
                <div
                    ref={containerRef}
                    className="w-full flex flex-col gap-y-3 max-h-[calc(100vh-120px)] overflow-y-scroll scrollbar-thin scrollbar-webkit bg-stubgdark px-1 pt-1"
                >
                    {complaints.map((item) => (
                        <DataCard key={item._id} props={item} />
                    ))}
                    {isFetching && (
                        <div className="w-full flex flex-col gap-2 px-2">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-16 bg-gray-700 animate-pulse rounded-md"
                                ></div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Profile Card */}
            <div className="hidden lg:block bg-stubgdark pl-12 pr-8 py-2 w-auto h-[calc(100vh-60px)]">
                <div className="bg-stubgcard w-60 h-[350px] overflow-y-auto text-gray-500 rounded-md">
                    <ProfileCard />
                </div>
            </div>

            {/* Floating Buttons */}
            <div className='fixed z-20 bottom-[30px] right-[30px] lg:right-[150px] flex items-center gap-x-2 lg:gap-x-4'>
                <Link to="file-complaint">
                    <div className='flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                    </div>
                </Link>
                <div className='flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
