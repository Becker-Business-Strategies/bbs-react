import type { ReactNode } from "react";

interface IconCircleProps {
  icon: string | ReactNode;
  size?: "sm" | "md" | "lg";
  bgColor?: "brand" | "slate" | "blue";
  className?: string;
}

const IconCircle: React.FC<IconCircleProps> = ({
  icon,
  size = "md",
  bgColor = "brand",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const bgClasses = {
    brand: "bg-brand/90",
    slate: "bg-slate-700",
    blue: "bg-blue-600",
  };

  return (
    <div
      className={`flex ${sizeClasses[size]} items-center justify-center rounded-full ${bgClasses[bgColor]} text-white ${className}`}
    >
      {typeof icon === "string" ? (
        <span className="material-icons">{icon}</span>
      ) : (
        icon
      )}
    </div>
  );
};

export default IconCircle;
