// src/app/dashboard/layout.tsx
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard Menu</h2>
        <nav>
          <ul>
            <li className="mb-4"><a href="/dashboard" className="hover:text-gray-400">Home</a></li>
            <li className="mb-4"><a href="/dashboard/profile" className="hover:text-gray-400">Profile</a></li>
            <li><a href="/dashboard/settings" className="hover:text-gray-400">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
