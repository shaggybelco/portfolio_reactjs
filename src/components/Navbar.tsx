import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();

    const handleNavigate = (route: string) => {
        navigate(route);
    };

    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);

            // Logic to determine the active section based on scroll position
            // Adjust the offset values as needed
            const sectionOffsets: Record<string, number> = {
                section1: document.getElementById('section1')?.offsetTop || 0,
                section2: document.getElementById('section2')?.offsetTop || 0,
                section3: document.getElementById('section3')?.offsetTop || 0,
                // Add more sections as needed
            };

            console.log(sectionOffsets);

            let activeSection: string | null = null;

            if (scrollPosition < sectionOffsets.section2) {
                activeSection = 'section2';
            } else if (scrollPosition < sectionOffsets.section3) {
                activeSection = 'section3';
            } else {
                activeSection = 'section3';
            }

            if(scrollPosition === 0)
            {
                activeSection ='';
            }
            setActiveSection(activeSection);
        };

        // Add event listener for scrolling
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='bg-orange-800 sticky top-0'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <a onClick={() => handleNavigate('/')} className='hidden md:block cursor-pointer black-ops text-xl'>Belco</a>
                    <div className="dropdown visible md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className={activeSection === 'section1' ? 'active' : ''}><NavLink to={'/'}>Homepage</NavLink></li>
                            <li className={activeSection === 'section2' ? 'active' : ''}><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                            <li className={activeSection === 'section3' ? 'active' : ''}><NavLink to={'/about'}>About</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center gap-2">
                    <div className='md:block hidden'>
                        <NavLink className={`btn btn-ghost ${activeSection === 'section2' ? 'active' : ''}`} to={'/about'}>About</NavLink>
                        <NavLink className={`btn btn-ghost ${activeSection === 'section3' ? 'active' : ''}`} to={'/portfolio'}>Portfolio</NavLink>
                        <NavLink className={`btn btn-ghost ${activeSection === 'section4' ? 'active' : ''}`} to={'/contact'}>Contact</NavLink>
                    </div>
                    <a onClick={() => handleNavigate('/')} className='visible md:hidden cursor-pointer black-ops text-xl'>Belco</a>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate">
                        <input type="checkbox" className="theme-controller" value="business" />
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </div>
            </div>
        </div>
    )
}


