import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
  const {  loginWithRedirect, isAuthenticated, logout,user } = useAuth0();

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/about_us">About us</Link>
            </li>
            <li>
              <Link href="/contact_us">Contact us</Link>
            </li>
            <li>
              <Link href="/audiobook">Audio Book</Link>
            </li>
            {isAuthenticated && 
              <li>
                <p>{user.name}</p>
              </li>
            }
          {isAuthenticated ? (
            <li>
              <button class = "toggle-switch"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
          </ul>
        </div>
        <Link href="/">
          {/* Use Image component instead of img tag */}
          <Image src="/logo.png" alt="logo" width={64} height={64} />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center justify-between">
          <li>
            <Link href="/about_us">About us</Link>
          </li>
          <li>
            <Link href="/contact_us">Contact us</Link>
          </li>
          <li>
            <Link href="/audiobook">Audio Book</Link>
          </li>
          {isAuthenticated &&
            <li>
              <p>{user.name}</p>
            </li>
          }
          {isAuthenticated ? (
            <li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}

         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
