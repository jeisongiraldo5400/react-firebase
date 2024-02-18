"use client";

/* eslint-disable react/prop-types */
import { logout } from "../functions/logout";

export const NavBar = ({ user }) => {

  return (
    <>
      <div className="flex justify-between p-6">
        <span>{user.email}</span>
        <button
          className="h-12 bg-blue-500 rounded-lg w-[100px] text-white"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </>
  );
};
