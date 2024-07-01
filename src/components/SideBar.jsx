import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <DesktopSideBar />
      <MobileSideBar />
    </>
  );
};
export default SideBar;

const DesktopSideBar = () => {
  return (
    <div className="p-3 md:p-10 min-h-screen border-r w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/logo.svg" alt="logo" className="hidden md:block" />
          <img
            src="/mobile-logo.svg"
            alt="mobileLogo"
            className="block md:hidden"
          />
        </div>
        <ul className="flex flex-col gap-8 items-center md:items-start">
          <Link to={"/"} className="flex gap-1">
            <Home size={"24"} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link to={"/favorite"} className="flex gap-1">
            <Heart size={"24"} />
            <span className="font-bold hidden md:block">Favorite</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const MobileSideBar = () => {
  return (
    <div className="flex justify-center gap-10 border-t p-3 fixed bg-white z-10 w-full bottom-0 left-0 sm:hidden">
    <Link to={"/"}>

      <Home size={"24"} className="cursor-pointer" />
    </Link>
    <Link to={"/favorite"}>

      <Heart size={"24"} className="cursor-pointer" />
    </Link>
    </div>
  );
};
