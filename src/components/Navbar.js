import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes'



function Navbar() {
  const {theme, setTheme} = useTheme();


  return (
    <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>About us</a></li>
        
        <li><a>Contact us</a></li>
      </ul>
    </div>
    
    {/* <a className="btn btn-ghost normal-case text-xl">Bhagavad gita</a> */}
    <img src="/logo.png" alt ="logo" className="h-16 w-16"/>

  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1">
      <li><a>About us</a></li>
      <li><a>Contact us</a></li>
      <li><a></a></li>
    </ul> 
    <select
value={theme}
onChange={(e) => setTheme(e.target.value)}
className="select select-bordered"
>
<option value="light">Light</option>
<option value="dark">Dark</option>
<option value="cyberpunk">Cyberpunk</option>
<option value="halloween">Halloween</option>
<option value="valentine">valentine</option>
<option value="winter">winter</option>

</select>
  </div>
</div>
  );
}

export default Navbar;
