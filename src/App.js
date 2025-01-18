import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// Import pages
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import PasswordResetPage from './Pages/Auth/PasswordResetPage';

import DashboardPage from './Pages/Dashboard/DashboardPage';
import OverviewPage from './Pages/Dashboard/OverviewPage';
import AnalyticsPage from './Pages/Dashboard/AnalyticsPage';
import NotificationsPage from './Pages/Dashboard/NotificationsPage';

import GroupPage from './Pages/Groups/GroupPage';
import CreateGroupPage from './Pages/Groups/CreateGroupPage';
import RoleManagementPage from './Pages/Groups/RoleManagementPage';

import MessagingPage from './Pages/Messaging/MessagingPage';
import ChatRoomPage from './Pages/Messaging/ChatRoomPage';

import TaskPage from './Pages/Tasks/TaskPage';
import CreateTaskPage from './Pages/Tasks/CreateTaskPage';
import TaskDetailsPage from './Pages/Tasks/TaskDetailsPage';
import CalendarPage from './Pages/Tasks/CalendarPage';

import UserProfilePage from './Pages/Profile/UserProfilePage';
import SettingsPage from './Pages/Profile/SettingsPage';
import ThemeCustomizationPage from './Pages/Profile/ThemeCustomizationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Initial Route */}
          <Route path="/" element={<DashboardPage />} />

          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/overview" element={<OverviewPage />} />
          <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
          <Route path="/dashboard/notifications" element={<NotificationsPage />} />

          {/* Groups Routes */}
          <Route path="/groups" element={<GroupPage />} />
          <Route path="/groups/create" element={<CreateGroupPage />} />
          <Route path="/groups/roles" element={<RoleManagementPage />} />

          {/* Messaging Routes */}
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/messaging/chat-room" element={<ChatRoomPage />} />

          {/* Tasks Routes */}
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks/create" element={<CreateTaskPage />} />
          <Route path="/tasks/:taskId" element={<TaskDetailsPage />} />
          <Route path="/tasks/calendar" element={<CalendarPage />} />

          {/* Profile Routes */}
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/profile/settings" element={<SettingsPage />} />
          <Route path="/profile/theme" element={<ThemeCustomizationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
