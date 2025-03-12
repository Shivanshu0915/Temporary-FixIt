import React from 'react';
import { StudentNav } from '../../components/DashBoardComp/Navbars';
import { Sidebar } from '../../components/DashBoardComp/Sidebars';
import { StuMidFirst } from '../../components/DashBoardComp/StuMidMain';
import { Routes, Route } from "react-router-dom";
import { FileComplaint } from './FileComplaint';
import { Outlet } from "react-router-dom";


export function StudentDash(){
    return(
        <div className='h-[100vh] bg-stubgdark w-full'>
            <Outlet />
        </div>
    )
}

const Content = ()=>{
    return(
        <div className="h-[calc(100vh-60px)] flex">
            <Sidebar menuItems={menuItems}></Sidebar> 
            <Routes>
                <Route index element={<StuMidFirst/>} />
                <Route path="file-complaint" element={<FileComplaint/>} />
            </Routes>
        </div>
    )
}
