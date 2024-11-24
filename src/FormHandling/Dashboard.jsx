import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("User Details")) || null;

  const handleLogout = () => {
    localStorage.removeItem("User Details");
    alert("You have been logged out.");
  };
  const handleLogOut = () => {
    localStorage.removeItem("User Details");
    alert("You have been logged out.");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-transparent w-[20rem] rounded-3xl shadow-2xl p-6">
        <div className="w-full flex justify-end">
          <button
            onClick={handleLogOut}
            className="bg-red-500 h-10 w-10 rounded-xl flex items-center justify-center shadow-md hover:bg-red-600 transition-all"
          >
            <FiLogOut className="text-white text-xl" />
          </button>
        </div>
        <h1 className="text-black font-bold text-xl text-center mt-2">
          Dashboard
        </h1>
        <p className="text-zinc-500 text-[0.7rem] text-center font-semibold mb-4">
          View and manage your account details below.
        </p>

        <div className="w-full flex items-center bg-slate-200 rounded-[10px] px-3 py-2 mb-3">
          <FaUser className="text-zinc-500 text-[1.5rem]" />
          <p className="text-black text-sm ml-3">
            Name: {user?.firstName || "N/A"} {user?.lastName || ""}
          </p>
        </div>
        <div className="w-full flex items-center bg-slate-200 rounded-[10px] px-3 py-2 mb-3">
          <MdPhone className="text-zinc-500 text-[1.5rem]" />
          <p className="text-black text-sm ml-3">
            Mobile: {user?.phoneNumber || "N/A"}
          </p>
        </div>
        <div className="w-full flex items-center bg-slate-200 rounded-[10px] px-3 py-2">
          <MdEmail className="text-zinc-500 text-[1.5rem]" />
          <p className="text-black text-sm ml-3">
            Email: {user?.email || "N/A"}
          </p>
        </div>
        <NavLink to={"/login"}>
          <button
            onClick={handleLogout}
            className="bg-black text-white w-full h-8 rounded-[0.6rem] mt-5 text-[0.8rem] hover:bg-gray-800 transition-all"
          >
            Logout
          </button>
        </NavLink>
      </div>
    </div>
  );
};
