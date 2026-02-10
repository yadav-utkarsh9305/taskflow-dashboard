function Sidebar({ open, toggleMenu }) {
  return (
    <>
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 overflow-y-auto
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <nav className="p-4">
          <div className="space-y-1">
            <a
              onClick={toggleMenu}
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-white bg-linear-to-r from-blue-500 to-blue-600 rounded-lg"
            >
              Dashboard
            </a>

            <a
              onClick={toggleMenu}
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Tasks
            </a>

            <a
              onClick={toggleMenu}
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Clients
            </a>
          </div>
        </nav>
      </aside>

      {/* overlay */}
      {open && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        />
      )}
    </>
  );
}

export default Sidebar;
