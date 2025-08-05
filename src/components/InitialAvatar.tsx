// components/InitialAvatar.tsx
import React from "react";

interface InitialAvatarProps {
  name: string;
  size?: number; 
  bgColor?: string;
  textColor?: string;
}

const InitialAvatar: React.FC<InitialAvatarProps> = ({
  name,
  size = 48,
  bgColor = "#4F46E5",
  textColor = "#FFFFFF",
}) => {
  const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: size / 2.5,
        userSelect: "none",
      }}
    >
      {getInitials(name)}
    </div>
  );
};

export default InitialAvatar;
