import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard"; 

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setSidebarOpen(prev => !prev)} />
      <Sidebar open={sidebarOpen} toggleMenu={() => setSidebarOpen(false)} />
      <Dashboard />
    </>
  );
}

export default DashboardLayout;
