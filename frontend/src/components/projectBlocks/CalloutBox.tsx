import React from "react";

interface CalloutBoxProps {
  type: "info" | "success" | "warning" | "error";
  text: string;
  title?: string;
}

const iconMap: Record<CalloutBoxProps["type"], string> = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
};

const colorMap: Record<CalloutBoxProps["type"], string> = {
  info: "blue-500",
  success: "green-500",
  warning: "yellow-500",
  error: "red-500",
};

const CalloutBox: React.FC<CalloutBoxProps> = ({ type, text, title }) => {
  const icon = iconMap[type];
  const borderColor = `border-${colorMap[type]}`;
  const bgColor = `bg-${colorMap[type].replace("500", "100")}`;
  const textColor = `text-${colorMap[type]}`;

  return (
    <div
      className={`flex items-start gap-3 w-full max-w-prose mx-auto px-4 py-3 rounded-xl border-l-4 shadow-sm ${borderColor} ${bgColor}`}
    >
      <div className={`text-xl ${textColor}`}>{icon}</div>
      <div className="space-y-1 font-cormorant">
        {title && <h3 className="font-semibold text-lg">{title}</h3>}
        <p className="text-body">{text}</p>
      </div>
    </div>
  );
};

export default CalloutBox;
