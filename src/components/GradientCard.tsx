import type { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
  className?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-linear-to-br from-brand-50 to-blue-50 rounded-xl p-8 border border-brand/40 ${className}`}
    >
      {children}
    </div>
  );
};

export default GradientCard;
