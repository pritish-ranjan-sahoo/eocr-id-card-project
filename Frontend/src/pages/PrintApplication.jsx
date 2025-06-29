import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function PrintApplication() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="h-dvh w-full pt-28 mx-2 flex justify-center items-center gap-60 text-sm">
          <div className="border border-green-300 rounded w-sm">
            <div className="rounded h-8 bg-green-100 flex py-2 px-3 items-center text-green-800">
              Print Applications ( Non Gaz )
            </div>
            <a 
            href="#"
            className="w-full flex justify-start items-center my-2 h-8 py-2 px-3 rounded text-sky-600 hover:underline cursor-pointer">
              Click Here
            </a>
          </div>
          <div className="border border-red-300 rounded w-sm">
            <div className="rounded h-8 bg-red-100 flex py-2 px-3 items-center text-red-800">
              Print Applications ( Gaz )
            </div>
            <a 
            href="#"
            className="w-full flex justify-start items-center my-2 h-8 py-2 px-3 rounded text-sky-600 hover:underline cursor-pointer">
              Click Here
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
