import React from 'react';
import { Link } from 'react-router';

const Home = ()=>{
    return (
        <>
            <Navbar></Navbar>
            <MidContent></MidContent>
            <SecondPage></SecondPage>
            <ThirdPage></ThirdPage>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </>
    )
}
export default Home;

const Navbar = () =>{
    return(
        <nav className="sticky w-full flex justify-between items-center px-8 py-4 top-0 bg-badami1/80 backdrop-blur-sm z-50">
            <div className="flex items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-badami6 class="size-6">
                        <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                        <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                        <path fill-rule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="font-sans text-3xl font-bold text-badami6 px-2 cursor-pointer">FixIt</div>
                
            </div>
            <div className="hidden md:flex space-x-8 text-badami6 text-base font-medium px-2 ">
                <a href="" className="hover:text-orange1">
                    About
                </a>
                <a href="" className="hover:text-orange1">
                    Testimonials
                </a>
                <a href="" className="hover:text-orange1">
                    Contact Us
                </a>
            </div>

            <div className="flex px-1 items-center gap-3">
                <Link to="/login">
                <div className="bg-btn-badami text-white p-6 px-4 py-1 border-[1px] border-btn-bg-btn-badami rounded-md font-medium cursor-pointer hover:bg-btn-badami/85">
                    Login
                </div>
                </Link>

                <Link to="/signup">
                <div className="text-badami6 bg-white border-[1px] box-border border-btn-badami rounded-md px-4 py-1 font-medium cursor-pointer hover:bg-btn-badami hover:text-white">
                    SignUp
                </div>
                </Link>
            </div>
        </nav>
    )
}

const MidContent = () =>{
    return(
        <div>
            <div className="w-full min-h-[30vh] flex flex-col items-center justify-end bg-badami1 px-2 py-2">
                <div className="font sans text-4xl md:text-5xl text-btn-badami font-semibold p-2 animate-slide-up">
                    Spot It, Report It, Fix It!
                </div>
            </div>

            <div className='min-h-[50vh] bg-badami1 relative'>
                <div className="hidden lg:min-h-[65vh] lg:grid grid-cols-12">
                    {/* Containers */}
                    
                    <div className="bg-badami1 col-span-1 z-[3]">
                        <div className="bg-badami6 h-80 my-2 rounded-r-xl">kjdsfkl</div>
                        <div className="bg-badami6 h-32 bottom-0 rounded-tr-xl">kjdsfkl</div>
                    </div>

                    <div className= "bg-badami1 col-span-2 z-[1] pl-2 pr-1 pt-32">
                        <div className="bg-badami6 h-36 my-2 rounded-xl">kjdsfkl</div>
                        <div className="bg-badami6 h-44 bottom-0 rounded-tl-xl rounded-tr-xl">kjdsfkl</div>
                    </div>

                    <div className="bg-badami1 col-span-2 pt-56 px-1">
                        <div className="bg-badami6 h-60 bottom-0 rounded-tr-xl rounded-tl-xl">kjdsfkl</div>
                    </div>
                    <div className="bg-badami1 col-span-2 pt-72 px-1">
                        <div className="bg-badami6 h-44 bottom-0 rounded-tr-xl rounded-tl-xl">kjdsfkl</div>
                    </div>
                    <div className="bg-badami1 col-span-2 pt-56 px-1">
                        <div className="bg-badami6 h-60 bottom-0 rounded-tr-xl rounded-tl-xl">kjdsfkl</div>
                    </div>
                    <div className="bg-badami1 col-span-3 z-[3] pl-1 pr-7 pt-32">
                        <div className="bg-badami6 h-80 bottom-0 rounded-tr-xl rounded-tl-xl">kjdsfkl</div>
                    </div>

                </div>

                <div className="absolute inset-0 w-full h-[20vh] flex flex-col items-center justify-start bg-badami1 px-2 py-2 z-[2]">
                    <p className="max-w-2xl text-fixit-green/80 p-2 text-center">
                        Join our community-driven platform to report and track local issues. Together, we can make our neighborhoods better, one fix at a time.
                    </p> 
                    <div className="flex bg-white items-center mt-4 pl-4 pr-1 gap-10 rounded-sm shadow-md">
                        <div className="text-lg py-1 text-badami6">
                            Get Started ...
                        </div>
                        <Link to="/login">
                        <div className="bg-orange1 h-5/6 px-2 flex items-center rounded cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
                                <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        </Link>
                    </div>
                </div>    
            </div>
            
        </div>
    )
}

function Card({logo, title, desc}){
    return(
        <div className="w-[90%] md:w-[calc(45%-24px)] lg:w-[calc(30%-32px)]">
            <div className=" bg-badami6 w-full h-60 border-[1px] border-gray-300 rounded-xl transition-transform hover:scale-105 hover:opacity-95 hover:shadow-xl hover:shadow-gray-200 shadow-md shadow-gray-300 mb-5 p-4">
                <div className='px-2 py-3'>
                    {logo}
                </div>
                <div className='px-2 py-1 text-white text-2xl lg:text-3xl font-medium'>
                    {title}
                </div>
                <div className='px-3 text-gray-200 text-md font-light'>
                    {desc}
                </div>
            </div>
        </div>
    )
}

const SecondPage = ()=>{
    return(
        <div className='min-h-[100vh] bg-badami2 px-8 w-full pt-8 pb-16'>
            <p className='font-sans p-8 text-4xl text-badami6 font-bold flex justify-center'>Platform Benefits</p>
            <div className="flex flex-wrap items-start justify-center p-4 gap-8 md:gap-20">
                <Card logo ={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    } title = {"Centralized Inbox"} desc = {"Manage all complaints from a single dashboard"}></Card>
                <Card logo={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>  
                } title={"For Students"} desc={"Submit and track your concerns about hostel facilities and mess services with ease"}></Card>
                <Card logo={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                } title={"For Administration"} desc={"Efficiently manage and respond to student concerns with organized dashboard"}></Card>

                <Card logo={
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        <path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        <path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" />
                    </svg>
                } title={"Analytics"} desc={"Access analytics to identify patterns and make informed improvements"}></Card>

                <Card logo={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>  
                } title={"Time-Saving"} desc={"Quickly raise issues online via a user-friendly interface. Reduces manual processes, saving time for staff and administrators."}></Card>
                <Card logo={
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24" fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                } title={"Collaboration"} desc={"Work together to enhance campus life through constructive dialogue"}></Card>   
            </div>
            
        </div>
    )
}

const ThirdPage = ()=>{
    return(
        <div className='w-full h-auto bg-badami4 p-4'>
            <div className='text-badami6 font-medium text-3xl p-2 mb-10'>
                Working Process
            </div>
            <div className='px-16 w-full flex justify-start'>

            <ol class=" relative w-full border-s-2 border-badami6">                  
                <li class="mb-10 ms-6">            
                    <span class="absolute flex items-center justify-center w-5 h-5 md:w-7 md:h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-2xl font-semibold text-badamidark pl-[1%]">Register Yourself</h3>
                    <p class="mb-4 text-base font-normal text-gray-200 text-md px-[2%]">
                        SignUp / Login and get verified your credentials to start.
                    </p>
                    
                </li>
                <li class="mb-10 ms-6">            
                    <span class="absolute flex items-center justify-center w-5 h-5 md:w-7 md:h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-2xl font-semibold text-badamidark pl-[1%]">Browse the domain </h3>
                    <p class="mb-4 text-base font-normal text-gray-200 text-md px-[2%]">
                        After logging in, select the category of your complaint: <br/> 
                        <ul className='list-disc px-[1%]'>
                            <li>Mess: For issues related to food, cleanliness, service, etc.</li>
                            <li>Hostel: For maintenance, infrastructure issues, roommate problems, etc.</li>
                        </ul>
                    </p>
                    
                </li>
                <li class="mb-10 ms-6">            
                    <span class="absolute flex items-center justify-center w-5 h-5 md:w-7 md:h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-2xl font-semibold text-badamidark pl-[1%]">File / Track the complaints</h3>
                    <p class="mb-4 text-base font-normal text-gray-200 ">
                        <ul className='list-disc px-[3%]'>
                            <li>Choose from given category of complaints, write your issue.</li>
                            <li>View the complaint's details and current status.</li>
                        </ul>
                    </p>
                    
                </li>
                <li class="mb-10 ms-6">            
                    <span class="absolute flex items-center justify-center w-5 h-5 md:w-7 md:h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-2xl font-semibold text-badamidark pl-[1%]">Review the complaints </h3>
                    <p class="mb-4 text-base font-normal text-gray-200 px-[2%]">
                        Upvote, downvote the complaints to get them resolve faster.
                    </p>
                    
                </li>
                <li class="mb-10 ms-6">            
                    <span class="absolute flex items-center justify-center w-5 h-5 md:w-7 md:h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-2xl font-semibold text-badamidark pl-[1%]">Feedback </h3>
                    <p class="mb-4 text-base font-normal text-gray-200 px-[2%]">
                        Once your complaint is resolved, go to the Feedback Section.<br/> 
                        Rate your experience and resolution.
                    </p>
                    
                </li>
            </ol>
            </div>


        </div>
    )
}

const Testimonials = ()=>{
    return(
        <div className='bg-badami5 w-full min-h-[100vh] text-badami6 flex justify-center items-center'>
            <div className="w-[90%] md:w-[calc(45%-24px)] lg:w-[calc(30%-32px)]">
                <div className=" bg-badami2 w-full h-60 border-[1px] rounded-xl transition-transform hover:scale-105 hover:shadow-xl hover:shadow-badami6 shadow-md shadow-badami6 mb-5 p-4">
                    <div className='px-2 py-3'>
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className='px-2 py-1 text-badami6 text-2xl lg:text-3xl font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </div>
                    <div className='px-3 text-badami6 text-md font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, hic.
                    </div>
                </div>
            </div>
        </div>
    )
}
const Footer = ()=>{
    return(
        <footer className="bg-badamidark">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-4 md:mb-0 w-auto md:max-w-[50%]">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6">
                                <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                                <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                                <path fill-rule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                            <span className="self-center text-3xl font-semibold whitespace-nowrap px-1 text-white">FixIt</span>
                        </a>

                        <p className='w-auto text-gray-400 py-3 font-medium'>
                            Making complaint management efficient and effective.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://react.dev/" target="_blank" className="hover:underline">React</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" target="_blank" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://github.com/themesberg/flowbite" target="_blank" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" target="_blank" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">FixIt</a>.  All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                                </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


