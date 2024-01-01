import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const navLinks = <>
        <Link className='mx-5' href="/">Home</Link>
        <Link className='mx-5' href="/quotes">Quotes</Link>
        <Link className='mx-5' href="/sales-tax">Sales Tax</Link>
        <Link className='mx-5' href="/analytics">Analytics</Link>
        <Link className='mx-5' href="/accounting-dashboard">Accounting Dashboard</Link>
        <Link className='mx-5' href="/fixed-assets">Fixed Assets</Link>
    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="text-2xl font-semibold">Finance & Billing Automation</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end me-5">
                <a className="btn">Profile</a>
            </div>
        </div>
    );
};

export default NavBar;