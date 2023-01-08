<<<<<<< HEAD
import { Link } from "react-router-dom"

function Navbar({ state, activeController }) {

  const svg_base_class = 'p-2 xl:hidden rounded-md stroke-lavender-500 con '
  
  
  return (
    <div className='w-full flex justify-between items-center py-6 px-4 xl:p-6 box-border max-w-[1200px] sticky xl:mx-auto z-30 top-0 bg-white'>
      <img src="/logo.svg" alt="logo" width={60} />
      <div className={state === "active" ? svg_base_class + "active" : svg_base_class } onClick={() => activeController()}>
        <svg viewBox='0 -10 100 100' className='w-[30px]' fill="none">
          <path d="m 20 20 h 60 " className="ham-path-1"></path>
          <path d="m 20 40 h 60 " className="ham-path-2"></path>
          <path d="m 20 60 h 60 " className="ham-path-3"></path>
        </svg>
      </div>
      <div className='hidden xl:flex gap-x-16 box-border'>
          <Link to="/" className={'font-semibold text-lavender-400 text-lg'}>Home</Link>
          <Link to="/about" className={'font-semibold text-lavender-400 text-lg'}>About</Link>
          <Link to="/projects" className={'font-semibold text-lavender-400 text-lg'}>Projects</Link>
=======
import React from "react";
// import HamburgerIcon from "../assets/hamburger.svg"

function Navbar() {
  return (
    <div className="flex justify-between w-full box-border items-center p-3 bg-white sticky">
      <div className="">
        <svg
          width="70"
          height="60"
          viewBox="0 0 42 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="#7871EE" />
          <path
            d="M3.945 12L7.41 4.3H8.818L12.294 12H10.798L7.817 5.059H8.389L5.419 12H3.945ZM5.54 10.218L5.925 9.096H10.083L10.468 10.218H5.54Z"
            fill="#FFFFFD"
          />
          <circle cx="21" cy="8" r="8" fill="#9690F3" />
          <path
            d="M20.421 12.11C19.8197 12.11 19.244 12.0257 18.694 11.857C18.144 11.681 17.7077 11.4573 17.385 11.186L17.88 10.075C18.188 10.317 18.5693 10.5187 19.024 10.68C19.4787 10.8413 19.9443 10.922 20.421 10.922C20.8243 10.922 21.1507 10.878 21.4 10.79C21.6493 10.702 21.8327 10.5847 21.95 10.438C22.0673 10.284 22.126 10.1117 22.126 9.921C22.126 9.68633 22.0417 9.49933 21.873 9.36C21.7043 9.21333 21.4843 9.09967 21.213 9.019C20.949 8.931 20.652 8.85033 20.322 8.777C19.9993 8.70367 19.673 8.61933 19.343 8.524C19.0203 8.42133 18.7233 8.293 18.452 8.139C18.188 7.97767 17.9717 7.765 17.803 7.501C17.6343 7.237 17.55 6.89967 17.55 6.489C17.55 6.071 17.66 5.68967 17.88 5.345C18.1073 4.993 18.4483 4.71433 18.903 4.509C19.365 4.29633 19.948 4.19 20.652 4.19C21.114 4.19 21.5723 4.24867 22.027 4.366C22.4817 4.48333 22.8777 4.652 23.215 4.872L22.764 5.983C22.4193 5.77767 22.0637 5.62733 21.697 5.532C21.3303 5.42933 20.9783 5.378 20.641 5.378C20.245 5.378 19.9223 5.42567 19.673 5.521C19.431 5.61633 19.2513 5.741 19.134 5.895C19.024 6.049 18.969 6.225 18.969 6.423C18.969 6.65767 19.0497 6.84833 19.211 6.995C19.3797 7.13433 19.596 7.24433 19.86 7.325C20.1313 7.40567 20.432 7.48633 20.762 7.567C21.092 7.64033 21.4183 7.72467 21.741 7.82C22.071 7.91533 22.368 8.04 22.632 8.194C22.9033 8.348 23.1197 8.557 23.281 8.821C23.4497 9.085 23.534 9.41867 23.534 9.822C23.534 10.2327 23.4203 10.614 23.193 10.966C22.973 11.3107 22.632 11.5893 22.17 11.802C21.708 12.0073 21.125 12.11 20.421 12.11Z"
            fill="#FFFFFD"
          />
          <circle cx="34" cy="8" r="8" fill="#B1ADFB" />
          <path
            d="M31.034 12V4.3H34.202C34.884 4.3 35.467 4.41 35.951 4.63C36.4423 4.85 36.82 5.16533 37.084 5.576C37.348 5.98667 37.48 6.47433 37.48 7.039C37.48 7.60367 37.348 8.09133 37.084 8.502C36.82 8.91267 36.4423 9.228 35.951 9.448C35.467 9.668 34.884 9.778 34.202 9.778H31.826L32.464 9.107V12H31.034ZM32.464 9.261L31.826 8.568H34.136C34.7667 8.568 35.2397 8.436 35.555 8.172C35.8777 7.90067 36.039 7.523 36.039 7.039C36.039 6.54767 35.8777 6.17 35.555 5.906C35.2397 5.642 34.7667 5.51 34.136 5.51H31.826L32.464 4.806V9.261Z"
            fill="#FFFFFD"
          />
        </svg>
      </div>

      <div className="px-2">
        <svg
          width="30"
          height="30"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H18"
            stroke="#7871EE"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 5H18"
            stroke="#7871EE"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 9H18"
            stroke="#7871EE"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
>>>>>>> master
      </div>
    </div>
  )
}

export default Navbar