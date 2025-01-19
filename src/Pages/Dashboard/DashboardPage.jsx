import React from 'react';

const DashboardPage = () => {
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
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500">Welcome back! Manage your tasks and stay productive.</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

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

        {/* Recent Activity Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-700">You completed the task "Design Homepage".</p>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <span className="text-green-500 text-sm">Completed</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-700">New message in "Marketing Group".</p>
                  <span className="text-sm text-gray-500">4 hours ago</span>
                </div>
                <span className="text-blue-500 text-sm">Message</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-700">Task "Create User Flow" is overdue.</p>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <span className="text-red-500 text-sm">Overdue</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
