import {react, useEffect, useState} from "react";
import { DataCard, ProfileCard } from './Cards.jsx';
import { Dropdown3 } from './Dropdown.jsx'
import { Link } from "react-router";

export function StuMidFirst(){
    const dataItems = [{
        id : 1,
        author: "Shivanshu jhdskfhdfhdjhdf dhfjhhhhhhhhhhhhhhhhhhhh",
        isResolved: true,
        title : "Random shit",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
        upvoteCount : 10,
        downvoteCount : 3
    },
    {
        id : 1,
        author: "Shivanshu",
        isResolved: false,
        title : "Random shit sit amet consectetur adipisicing elit. Libero Libero, dolorum alias vero accusantium amet la",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
        upvoteCount : 10,
        downvoteCount : 3
    },
    {
        id : 1,
        author: "Shivanshu",
        isResolved: true,
        title : "Random shit",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
        upvoteCount : 10,
        downvoteCount : 3
    },
    {
        id : 1,
        author: "Shivanshu",
        isResolved: true,
        title : "Random shit",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
        upvoteCount : 10,
        downvoteCount : 3
    },
    {
        id : 1,
        author: "Shivanshu",
        isResolved: true,
        title : "Random shit",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolorum alias vero accusantium amet laborum accusamus! Est voluptas nulla facilis?",
        upvoteCount : 10,
        downvoteCount : 3
    }
    ]

    return(
        <>
            <div className='flex w-full'>
                <div className='w-full pl-[4%] pr-[2%] bg-stubgdark'>
                    <div className='h-[60px] sticky md:relative z-30 bg-stubgdark flex justify-end gap-x-4 md:justify-between items-center px-1 border-b-[1px] border-gray-500'>
                        <Dropdown3 bgc="bg-stugreen" text="Resolved" text2="Unresolved" hbgc="hover:bg-stugreen/80"></Dropdown3>
                        <Dropdown3 bgc="bg-gray-500" text="Most upvoted" text2="Most Downvoted" hbgc="hover:bg-gray-500/80"></Dropdown3>
                    </div>

                    <div className='w-full flex flex-col gap-y-3 max-h-[calc(100vh-120px)] overflow-y-scroll scrollbar-thin scrollbar-webkit bg-stubgdark z-0 px-1 pt-1'>
                        {/* <div className='text-gray-400 bg-pink-200 w-full p-3'> */}
                            {dataItems.map((item)=>{
                                return(
                                    <>
                                        <DataCard props={item}></DataCard>
                                    </>
                                )
                            })}
                        {/* </div> */}
                    </div>

                </div>
                <div className='hidden lg:block bg-stubgdark pl-12 pr-8 py-2 w-auto h-[calc(100vh-60px)]'>
                    <div className='bg-stubgcard w-60 h-[350px] overflow-y-auto text-gray-500 rounded-md'>
                        <ProfileCard></ProfileCard>
                    </div>
                </div>
                <div className='fixed z-20 bottom-[30px] right-[30px] lg:right-[150px] flex items-center gap-x-2 lg:gap-x-4'>
                    <Link to="file-complaint">
                    <div className='flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="36px"  height="36px"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                    </div>
                    </Link>
                    <div className='flex items-center bg-btnblue/70 backdrop-blur-sm rounded-md p-1 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}