"use client";
import { useState, useRef, useEffect } from "react";
import {
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Settings2,
  CircleUser,
} from "lucide-react";
import InitialAvatar from "./InitialAvatar";
import { signOut } from "next-auth/react";

interface ProfileDropdownProps {
  userName: string;
  email: string;
  sidebarCollapsed: boolean;
  mobileMenuOpen: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  userName,
  email,
  sidebarCollapsed,
  mobileMenuOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: string) => {
    console.log(`Clicked: ${item}`);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-start hover:bg-gray-100 rounded-xl ${
        isOpen && "bg-gray-100"
      }`}
    >
      <div className="relative w-full" ref={dropdownRef}>
        {/* Profile Avatar Trigger */}

        <div onClick={toggleDropdown} className="p-[6px_10px_6px_8px]">
          <div className="flex items-center gap-3">
            <InitialAvatar name={userName} size={32} bgColor="#2563EB" />
            {(!sidebarCollapsed || mobileMenuOpen) && (
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  {userName}
                </div>
                <div className="text-xs text-gray-500">{email}</div>
              </div>
            )}
          </div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 bottom-[calc(100%+0.5rem)] mb-1 w-60 lg:w-64 bg-white rounded-2xl shadow-lg border border-gray-100 z-50">
            <div className="p-2">
              {/* User Profile Section */}
              <div className="flex items-center gap-3 p-2">
                <CircleUser className="h-4 w-4 text-gray-500" />
                <span className="text-gray-500 text-sm">{email}</span>
              </div>

              {/* Menu Items */}
              <div className="">
                <button
                  onClick={() => handleMenuItemClick("Customize ChatGPT")}
                  className="w-full flex items-center gap-3 p-2 rounded-lg text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <Settings2 className="h-4 w-4 text-gray-700" />
                  <span className="text-gray-700 text-sm font-medium">
                    Customize Nyayik
                  </span>
                </button>

                <button
                  onClick={() => handleMenuItemClick("Settings")}
                  className="w-full flex items-center gap-3 p-2 rounded-lg text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <Settings className="h-4 w-4 text-gray-700" />
                  <span className="text-gray-700 text-sm font-medium">
                    Settings
                  </span>
                </button>
              </div>

              {/* Separator */}
              <div className="my-2 h-px bg-gray-200"></div>

              {/* Help and Logout */}
              <div className="">
                <button
                  onClick={() => handleMenuItemClick("Help")}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 text-gray-700" />
                    <span className="text-gray-700 text-sm font-medium">
                      Help
                    </span>
                  </div>
                  <ChevronRight className="h-3 w-3 text-gray-400" />
                </button>

                <button
                  onClick={() => signOut({ callbackUrl: "/auth/sign-up" })}
                  className="w-full flex items-center gap-3 p-2 rounded-lg text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <LogOut className="h-4 w-4 text-gray-700" />
                  <span className="text-gray-700 text-sm font-medium">
                    Log out
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
