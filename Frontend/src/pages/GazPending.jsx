import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function GazPending() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="h-dvh w-full pt-28 mx-2 flex justify-center items-center gap-10">
          I am Here gaz pending
        </div>
      </div>
    </>
  );
}
