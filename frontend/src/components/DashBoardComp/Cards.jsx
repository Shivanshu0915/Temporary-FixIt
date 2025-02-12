import {react, useState} from "react"

export function ProfileCard(){
    const[isImage, setIsImage] = useState(false);
    const imgPath = "";
    return(
        <div className="flex flex-col w-full h-full justify-between bg-stubgcard p-2">
            <div className="flex items-center justify-center bg-stubgcard p-2">
                {isImage ? (
                    <div>
                    </div>
                ) : (
                    <div class="relative w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute w-28 h-28 text-gray-400 left-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                )}
            </div>
            <div className="bg-stubgcard flex flex-col gap-y-1">
                <div className="cursor-pointer px-4 py-2 bg-stubgcard hover:bg-stubgdark hover:text-white text-sm font-normal flex items-center rounded-sm">
                    <div className="pl-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                    </div>
                    <div className="pl-2 text-sm text-white">
                        View Profile
                    </div>
                </div>
                <div className="cursor-pointer px-4 py-2 bg-stubgcard hover:bg-stubgdark hover:text-white text-sm font-normal flex items-center rounded-sm">
                    <div className="pl-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed"><path d="M120-160v-112q0-34 17.5-62.5T184-378q62-31 126-46.5T440-440q20 0 40 1.5t40 4.5q-4 58 21 109.5t73 84.5v80H120ZM760-40l-60-60v-186q-44-13-72-49.5T600-420q0-58 41-99t99-41q58 0 99 41t41 99q0 45-25.5 80T790-290l50 50-60 60 60 60-80 80ZM440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm300 80q17 0 28.5-11.5T780-440q0-17-11.5-28.5T740-480q-17 0-28.5 11.5T700-440q0 17 11.5 28.5T740-400Z"/></svg>
                    </div>
                    <div className="pl-2 text-sm text-white">
                        Change Password
                    </div>
                </div>
                <div className="cursor-pointer px-4 py-2 bg-stubgcard hover:bg-stubgdark hover:text-white text-sm font-normal flex items-center rounded-sm">
                    <div className="pl-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                    </div>
                    <div className="pl-2 text-sm text-white">
                        Change Mode
                    </div>
                </div>
                <div className="cursor-pointer px-4 py-2 bg-stubgcard hover:bg-stubgdark hover:text-white text-sm font-normal flex items-center rounded-sm">
                    <div className="pl-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="white"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    </div>
                    <div className="pl-2 text-sm text-white">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}



export function DataCard({props}){
    const[isUpvoted, setIsUpvoted] = useState(false);
    const[isDownvoted, setIsDownvoted] = useState(false);
    const[upCount, setUpCount] = useState(props.upvoteCount);
    const[downCount, setDownCount] = useState(props.downvoteCount);

    return(
        <div className="bg-stubgcard w-full h-auto rounded-lg p-2">
            <div className="flex items-center justify-between pr-5 pt-1 pb-2 border-b-[1px] border-gray-500 h-auto bg-stubgcard-200 gap-x-4">
                <div className="text-[#b9babb] bg-stubgcard text px-3 pt-1">
                    {props.author}
                </div>
                {/* {props.isResolved ? (
                    <div className="bg-stugreen text-white px-3 py-1.5 rounded-3xl">
                        Resolved
                    </div>
                ) : (
                    <div className="bg-stured text-white px-3 py-1.5 rounded-3xl">
                        Unresolved
                    </div>
                )} */}
            </div>

            <div className="p-2 border-b-[1px] border-gray-500 bg-stubgcard">
                <div className="text-[#e7e8e8] font-medium text-2xl px-1 py-2">
                    {props.title}
                </div>
                <div className="text-[#b9babb] px-1 py-2">
                    {props.text}
                </div>
            </div>
            
            <div className="flex p-2 gap-x-3">
                <div className="flex items-center ">
                    <div className="text-white text-sm bg-[#283034] pl-2 pr-1 rounded-l-lg py-1">
                        {upCount}
                    </div>
                    <div className="text-white bg-[#283034] rounded-r-lg p-1 cursor-pointer " 
                     onClick={()=>{
                        if(!isDownvoted && !isUpvoted){
                            setIsUpvoted(!isUpvoted);
                            setUpCount(upCount + 1);
                        }
                        else if(isUpvoted){
                            setIsUpvoted(!isUpvoted);
                            setUpCount(upCount - 1);
                        }
                        else if(isDownvoted && !isUpvoted){
                            setIsDownvoted(!isDownvoted);
                            setIsUpvoted(!isUpvoted);
                            setDownCount(downCount - 1);
                            setUpCount(upCount + 1);
                        }
                    }}>
                        {(isUpvoted && !isDownvoted) ? (
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="white"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            </svg>
                        ):(
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            </svg>
                        )}
                        
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="text-white text-sm bg-[#2A3236] pl-2 pr-1 rounded-l-lg py-1">
                        {downCount}
                    </div>
                    <div className="text-white bg-[#283034] rounded-r-lg p-1 cursor-pointer" 
                     onClick={()=>{
                        if(!isUpvoted && !isDownvoted){
                            setIsDownvoted(!isDownvoted);
                            setDownCount(downCount + 1);
                        }
                        else if(isDownvoted){
                            setIsDownvoted(!isDownvoted);
                            setDownCount(downCount - 1);
                        }
                        else if(isUpvoted && !isDownvoted){
                            setIsDownvoted(!isDownvoted);
                            setIsUpvoted(!isUpvoted);
                            setUpCount(upCount - 1);
                            setDownCount(downCount + 1);
                        }
                    }}>
                        {isDownvoted ? (
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="white"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-down">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
                            </svg>
                        ) : (
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-down">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
                            </svg>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}