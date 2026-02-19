import type { ReactNode } from "react";
import AccentDivider from "./AccentDivider";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  alignment?: "left" | "center";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  alignment = "center",
  size = "lg",
  className = "",
}) => {
  const isCenter = alignment === "center";

  const sizeClasses = {
    sm: "text-2xl md:text-2xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <div className={isCenter ? "text-center" : ""}>
      <div className={isCenter ? "mx-auto" : ""}>
        <h2
          className={`${sizeClasses[size]} font-bold text-slate-900 mb-4 ${
            isCenter ? "" : " inline-block"
          } ${className}`}
        >
          {title}
        </h2>
      </div>
      <AccentDivider
        width="md"
        color="brand"
        alignment={isCenter ? "center" : "left"}
        className={isCenter ? "mt-6 mb-12" : "mt-6 mb-12"}
      />
      {subtitle && <p className="text-xl text-slate-300 mb-4">{subtitle}</p>}
      {description && (
        <p
          className={`text-lg ${isCenter ? "text-slate-600" : "text-slate-400"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
