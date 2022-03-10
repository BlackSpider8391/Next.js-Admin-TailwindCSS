import React, { useRef } from 'react';
import OutsideClick from '../../utils/outsideClick';
import Logo from './sidebar/logo';
import Nav from './sidebar/Nav';
import SettingButton from './sidebar/SettingButton';

const Sidebar = () => {
    const sidebarRef = useRef(null);
    const sidebarOutsideClick = OutsideClick(sidebarRef);

    //console.log("sidebar Ref", sidebarRef)
    //console.log("sidebar Ref sidebarOutsideClick", sidebarOutsideClick)
    return (
        <aside className="hidden sm:flex sm:flex-col" ref={sidebarRef}>
            <Logo />
            
            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                <Nav sidebarOutsideClick={sidebarOutsideClick} />
                <SettingButton />
            </div>
        </aside>
    );
};

export default Sidebar;