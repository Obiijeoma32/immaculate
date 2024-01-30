import { useState } from "react";
import logo from "./Images/Logo.svg";
function Header() {
  const [hamburger, setHamburger] = useState(false);
  const [navBar, setNavBar] = useState(false);
  function handleScrollBackground() {
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }
  window.addEventListener("scroll", handleScrollBackground);

  return (
    <>
      {/* BIG SCREENS */}
      <div className={`100:hidden xl:flex z-20 w-full  flex justify-center items-center h-[99px] px-[60px] py-[33px] fixed ${navBar ? "bg-[#007BFF] bg-opacity-30" : "bg-transparent"} `}>
        <div className=" xl:w-full 2xl:max-w-[1400px]  justify-between items-center inline-flex">
          <div className="text-zinc-800 flex justify-between items-center gap-[60px] text-lg font-semibold font-montserrat tracking-tight">
            <h3>About Me</h3>
            <h3>Projects</h3>
            <h3>Resume</h3>
            <h3>Home</h3>
          </div>
          <img src={logo} alt="immaculate" />
          <div className="text-zinc-800 flex justify-between items-center gap-[60px]  text-lg font-semibold font-montserrat tracking-tight">
            <h3>Skills</h3>

            <h3>Experience</h3>
            <h3>Education</h3>
            <h3>Contact</h3>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS FROM 100px TO 1279px */}
      <div className={`100:flex xl:hidden z-20 w-full  flex justify-between items-center h-[99px] px-[60px] py-[33px] fixed ${navBar ? "bg-[#007BFF] bg-opacity-30" : "bg-transparent"} `}>
        <img src={logo} alt="immaculate" />
        <svg onClick={() => setHamburger(true)} width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 15.5H12.5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 6.75H5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 24.25H5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {hamburger && (
        <div className=" z-20 fixed bg-black bg-opacity-65 w-full h-full px-[60px] top-0 left-0 ">
          <svg onClick={() => setHamburger(false)} className=" float-end mt-[37px]  " width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L5 19M5 5L19 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="text-white flex flex-col mt-[250px] justify-between items-center gap-[60px]  text-lg font-semibold font-montserrat tracking-tight">
            <h3>Skills</h3>
            <h3>Experience</h3>
            <h3>Education</h3>
            <h3>Contact</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
