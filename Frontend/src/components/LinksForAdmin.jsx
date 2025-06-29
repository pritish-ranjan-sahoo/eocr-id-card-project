import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LinksForAdmin() {


  return (
    <>
        <Link to="/" className="flex items-center gap-2 px-4 text-blue-500">
        <FaHome />
        <span className="text-sm font-medium">Home</span>
      </Link>
      <Link to="/pending-nonGaz" className="flex items-center gap-2 text-blue-500">
        <img
          src="internal-link.svg"
          alt="internal link icon"
          className="h-4 pl-4 "
        />
        <span className="text-sm font- font-medium">
          Pending Applications (NG)
        </span>
      </Link>

      <Link to="/pending-gaz" className="flex items-center gap-2 text-blue-500">
        <img
          src="internal-link.svg"
          alt="internal link icon"
          className="h-4 pl-4 "
        />
        <span className="text-sm font- font-medium">
          Pending Applications (GAZ)
        </span>
      </Link>

      <Link to="/print-app" className="flex items-center gap-2 text-blue-500">
        <img
          src="internal-link.svg"
          alt="internal link icon"
          className="h-4 pl-4 "
        />
        <span className="text-sm font- font-medium">
          Print Applications
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
    </>
  )
}
