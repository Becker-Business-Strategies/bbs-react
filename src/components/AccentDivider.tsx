interface AccentDividerProps {
  width?: "xs" | "sm" | "md" | "lg";
  color?: "brand" | "slate" | "blue";
  alignment?: "left" | "center" | "right";
  className?: string;
}

const AccentDivider: React.FC<AccentDividerProps> = ({
  width = "md",
  color = "brand",
  alignment = "center",
  className = "",
}) => {
  const widthClasses = {
    xs: "w-8",
    sm: "w-12",
    md: "w-16",
    lg: "w-24",
  };

  const colorClasses = {
    brand: "bg-brand",
    slate: "bg-slate-300",
    blue: "bg-blue-400",
  };

  const alignmentClasses = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <div
      className={`h-1 ${widthClasses[width]} ${colorClasses[color]} rounded-full ${alignmentClasses[alignment]} ${className}`}
    />
  );
};

export default AccentDivider;
