import React from "react";
import { FaBars } from "react-icons/fa";


function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">

        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Menu Button (mobile only) */}
       <button
  onClick={onMenuClick}
  className="lg:hidden text-gray-600 border px-2 py-1"
>
   <FaBars size={22} />
</button>


          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-tasks text-white text-sm"></i>
            </div>
            <h1 className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TaskFlow
            </h1>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search tasks, clients..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <i className="fas fa-bell text-lg"></i>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 pl-3 border-l">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
