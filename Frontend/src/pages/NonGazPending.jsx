import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function NonGazPending() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [results, setResults] = useState([]);

  const statusOptions = [
    "pending",
    "printing (Draft)",
    "printing (To be Sent)",
    "printing (Sent)",
    "closed",
    "rejected",
  ];

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/nonGaz/search-applications`,
        {
          from,
          to,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResults(res.data.applications);
      console.log(res.data.applications);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="h-dvh w-full pt-28 mx-2 flex flex-col justify-start items-center text-sm">
          <div className="mt-2 font-medium">NON - GAZ Applications</div>
          <form
            onSubmit={submitHandler}
            className="rounded flex justify-center items-center"
          >
            <div className="p-4 flex justify-center items-center">
              <div className="border border-gray-200 p-4 h-24 bg-gray-100">
                <label className="font-medium" htmlFor="from">
                  Date From:
                </label>
                <input
                  type="date"
                  value={from}
                  name="from"
                  className="w-full px-4 py-2 border rounded border-gray-300 outline-none focus:ring-2 focus:ring-green-200 mt-1"
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div className="border border-gray-200 p-4 h-24 bg-gray-100">
                <label className="font-medium" htmlFor="to">
                  Date To:
                </label>
                <input
                  type="date"
                  value={to}
                  name="to"
                  className="w-full px-4 py-2 border rounded border-gray-300 outline-none focus:ring-2 focus:ring-green-200 mt-1"
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
              <div className="border border-gray-200 p-4 h-24 bg-gray-100 flex flex-col justify-center">
                <label className="font-medium" htmlFor="status">
                  Status:<span className="text-red-700"> *</span>
                </label>
                <select
                  id="status"
                  value={status}
                  onChange={handleChange}
                  required
                  className="w-64 p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">SELECT</option>
                  {statusOptions.map((option, idx) => (
                    <option key={idx} value={option} className="capitalize">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border border-gray-200 flex justify-center items-center p-2 h-24 bg-gray-100">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center bg-green-500 hover:bg-green-600 mt-3 rounded text-white cursor-pointer px-6 py-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
