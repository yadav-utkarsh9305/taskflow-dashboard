
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Dashboard() {
  const [profile, setProfile] = useState(null);

const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:3000/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("PROFILE API 👉", res.data);
    setProfile(res.data.profile);

  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};



useEffect(() => {
  getProfile();
}, []);

  return (
<>
<main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-4 lg:p-8">
            
            <div className="mb-6">
<h2 className="text-2xl font-bold text-gray-900">
  Welcome back, {profile?.name || "User"} 
</h2>
                <p className="text-gray-600 mt-1">Here's what's happening with your projects today.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-tasks text-blue-600 text-xl"></i>
                        </div>
                        <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                            <i className="fas fa-arrow-up text-xs"></i> 12%
                        </span>
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">Active Tasks</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-1">48</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-users text-purple-600 text-xl"></i>
                        </div>
                        <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                            <i className="fas fa-arrow-up text-xs"></i> 8%
                        </span>
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">Total Clients</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-1">127</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-briefcase text-green-600 text-xl"></i>
                        </div>
                        <span className="text-red-500 text-sm font-semibold flex items-center gap-1">
                            <i className="fas fa-arrow-down text-xs"></i> 3%
                        </span>
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">Projects</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-1">23</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-dollar-sign text-orange-600 text-xl"></i>
                        </div>
                        <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                            <i className="fas fa-arrow-up text-xs"></i> 23%
                        </span>
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-1">$89k</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">Recent Tasks</h3>
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                        <div className="p-6 hover:bg-gray-50 transition cursor-pointer">
                            <div className="flex items-start gap-4">
                                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Design new landing page</h4>
                                    <p className="text-sm text-gray-500">Due: Today, 5:00 PM</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">High Priority</span>
                                        <span className="text-xs text-gray-500">Design Team</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 hover:bg-gray-50 transition cursor-pointer">
                            <div className="flex items-start gap-4">
                                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Client meeting preparation</h4>
                                    <p className="text-sm text-gray-500">Due: Tomorrow, 10:00 AM</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Medium</span>
                                        <span className="text-xs text-gray-500">Sales</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 hover:bg-gray-50 transition cursor-pointer">
                            <div className="flex items-start gap-4">
                                <input type="checkbox" checked className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                                <div className="flex-1 min-w-0 opacity-60">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1 line-through">Update documentation</h4>
                                    <p className="text-sm text-gray-500">Completed yesterday</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                                        <span className="text-xs text-gray-500">Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <i className="fas fa-plus text-blue-600 text-xs"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-900 font-medium">New client added</p>
                                    <p className="text-xs text-gray-500 mt-1">Acme Corp joined the platform</p>
                                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                    <i className="fas fa-check text-green-600 text-xs"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-900 font-medium">Task completed</p>
                                    <p className="text-xs text-gray-500 mt-1">Website redesign finished</p>
                                    <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                                    <i className="fas fa-comment text-purple-600 text-xs"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-900 font-medium">New comment</p>
                                    <p className="text-xs text-gray-500 mt-1">Sarah commented on your task</p>
                                    <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</>
)
}

export default Dashboard