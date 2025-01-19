import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-500 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">TaskHive Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/dashboard" className="hover:text-gray-200">
                Overview
              </a>
            </li>
            <li>
              <a href="/tasks" className="hover:text-gray-200">
                Tasks
              </a>
            </li>
            <li>
              <a href="/messages" className="hover:text-gray-200">
                Messages
              </a>
            </li>
            <li>
              <a href="/settings" className="hover:text-gray-200">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Add Task
          </button>
        </header>

        {/* Content Area */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Tasks Completed</h2>
            <p className="text-4xl font-bold text-green-500">24</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Tasks Pending</h2>
            <p className="text-4xl font-bold text-yellow-500">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Messages</h2>
            <p className="text-4xl font-bold text-blue-500">12</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
