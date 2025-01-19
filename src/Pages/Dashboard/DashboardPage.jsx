import React, { useState } from 'react';

const DashboardPage = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">TaskHive</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-green-700">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/tasks" className="block py-2 px-4 rounded hover:bg-green-700">
                Tasks
              </a>
            </li>
            <li>
              <a href="/messages" className="block py-2 px-4 rounded hover:bg-green-700">
                Messages
              </a>
            </li>
            <li>
              <a href="/settings" className="block py-2 px-4 rounded hover:bg-green-700">
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <button className="w-full bg-red-500 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="sticky top-0 bg-white shadow p-4 z-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500">Welcome back! Manage your tasks and stay productive.</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* User Profile */}
            <div className="relative">
              <img
                src="https://via.placeholder.com/40"
                alt="User Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/settings"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => alert('Logged out')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-sm font-medium text-gray-600">Tasks Completed</h2>
              <p className="text-4xl font-bold text-green-600 mt-2">45</p>
              <p className="text-gray-400">+5 since last week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-sm font-medium text-gray-600">Pending Tasks</h2>
              <p className="text-4xl font-bold text-yellow-500 mt-2">12</p>
              <p className="text-gray-400">3 overdue</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-sm font-medium text-gray-600">Messages</h2>
              <p className="text-4xl font-bold text-blue-500 mt-2">28</p>
              <p className="text-gray-400">+10 new today</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-sm font-medium text-gray-600">Active Groups</h2>
              <p className="text-4xl font-bold text-purple-500 mt-2">8</p>
              <p className="text-gray-400">No new groups</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
