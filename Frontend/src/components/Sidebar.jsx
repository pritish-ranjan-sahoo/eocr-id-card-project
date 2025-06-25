import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-xs bg-zinc-100 h-dvh pt-40 gap-4 flex flex-col items-start justify-start">
      <Link to="/" className="flex items-center gap-2 px-4 text-blue-500">
        <FaHome />
        <span className="text-sm font-medium">Home</span>
      </Link>
      <Link to="/nongaz-card" className="flex items-center gap-2 text-blue-500">
        <img
          src="internal-link.svg"
          alt="internal link icon"
          className="h-4 pl-4 "
        />
        <span className="text-sm font- font-medium">
          Apply for new I-card (NG)
        </span>
      </Link>

      <Link to="/gaz-card" className="flex items-center gap-2 text-blue-500">
        <img
          src="internal-link.svg"
          alt="internal link icon"
          className="h-4 pl-4 "
        />
        <span className="text-sm font- font-medium">
          Apply for new I-card (GAZ)
        </span>
      </Link>

      <Link to="/app-status" className="flex items-center gap-2 text-blue-500">
        <img
          src="internal-link.svg"
          alt="internal link icon"
          className="h-4 pl-4 "
        />
        <span className="text-sm font- font-medium">
          Application details & status
        </span>
      </Link>

      <Link to="/logout" className="flex items-center gap-2 text-blue-500">
        <img
          src="internal-link.svg"
          alt="internal link icon"
          className="h-4 pl-4 "
        />
        <span className="text-sm font- font-medium">
          Log Out
        </span>
      </Link>
    </div>
  );
}
