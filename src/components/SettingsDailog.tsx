"use client";

import {
  X,
  Settings,
  Bell,
  Palette,
  Link,
  Database,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";

interface SettingsDialogProps {
  onClose: () => void;
}

export default function SettingsDialog({ onClose }: SettingsDialogProps) {
  const [selected, setSelected] = useState("General");
  const menuItems = [
    { label: "General", icon: <Settings className="w-4 h-4" /> },
    { label: "Notifications", icon: <Bell className="w-4 h-4" /> },
    { label: "Personalization", icon: <Palette className="w-4 h-4" /> },
    { label: "Connected apps", icon: <Link className="w-4 h-4" /> },
    { label: "Data controls", icon: <Database className="w-4 h-4" /> },
    { label: "Security", icon: <Shield className="w-4 h-4" /> },
    { label: "Account", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-[800px] h-[500px] flex overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="font-semibold text-gray-800">Nyāyik</span>
            <button onClick={onClose}>
              <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </button>
          </div>
          <div className="flex flex-col py-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setSelected(item.label)}
                className={`flex items-center gap-2 px-4 py-2 text-sm ${
                  selected === item.label
                    ? "bg-white text-gray-900 font-medium border-l-4 border-blue-500"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {selected}
          </h2>

          {selected === "General" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-3">
                <span>Theme</span>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span>Accent color</span>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Default</option>
                  <option>Blue</option>
                  <option>Green</option>
                  <option>Red</option>
                </select>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span>Language</span>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Auto-detect</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span>Spoken language</span>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Auto-detect</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <span>Show follow-up suggestions in chats</span>
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          )}

          {selected === "Notifications" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <span>Email notifications</span>
                <input type="checkbox" />
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span>Push notifications</span>
                <input type="checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <span>Weekly summary</span>
                <input type="checkbox" />
              </div>
            </div>
          )}

          {selected === "Personalization" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Font size</label>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Layout style</label>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Compact</option>
                  <option>Comfortable</option>
                  <option>Expanded</option>
                </select>
              </div>
            </div>
          )}

          {selected === "Connected apps" && (
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Manage your connected apps and integrations.
              </p>
              <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">
                Connect new app
              </button>
            </div>
          )}

          {selected === "Data controls" && (
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Manage your data, exports, and privacy settings.
              </p>
              <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">
                Download data
              </button>
              <button className="ml-2 px-3 py-1 border border-red-500 text-red-500 rounded-md text-sm hover:bg-red-50">
                Delete account
              </button>
            </div>
          )}

          {selected === "Security" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <span>Two-factor authentication</span>
                <input type="checkbox" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Change password
                </label>
                <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">
                  Update
                </button>
              </div>
            </div>
          )}

          {selected === "Account" && (
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Manage your account details and profile settings.
              </p>
              <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">
                Edit profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
