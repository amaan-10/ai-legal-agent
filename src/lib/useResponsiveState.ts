"use client"
import { useState, useEffect } from "react";

export const useResponsiveState = () => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop");

  const updateDeviceType = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 811) {
        setDeviceType("mobile");
      } else if (width < 1200) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    }
  };

  useEffect(() => {
    updateDeviceType(); // Initial check
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDeviceType);
      return () => window.removeEventListener("resize", updateDeviceType);
    }
  }, []);

  return deviceType;
};
