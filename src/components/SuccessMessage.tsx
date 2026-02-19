import type { ReactNode } from "react";
import IconCircle from "./IconCircle";

interface SuccessMessageProps {
  title: string;
  description: string | ReactNode;
  onReset: () => void;
  resetButtonText?: string;
  variant?: "card" | "gradient";
  className?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  description,
  onReset,
  resetButtonText = "Send Another Message",
  variant = "card",
  className = "",
}) => {
  const baseClasses =
    "flex flex-col items-center justify-center gap-6 rounded-xl p-12 text-center";

  const variantClasses = {
    card: "bg-slate-800",
    gradient:
      "bg-linear-to-br from-brand-50 to-blue-50 border border-brand/40 h-full",
  };

  const textColorClass =
    variant === "gradient" ? "text-slate-900" : "text-white";
  const descriptionColorClass =
    variant === "gradient" ? "text-slate-600" : "text-slate-400";

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <IconCircle
        icon={
          <span
            className={`material-icons ${
              variant === "gradient"
                ? "text-4xl text-brand"
                : "text-3xl text-brand/80"
            }`}
          >
            check_circle
          </span>
        }
        size="lg"
        bgColor={variant === "gradient" ? "brand" : "brand"}
        className={variant === "gradient" ? "bg-brand/20" : "bg-brand/20"}
      />
      <div>
        <h3 className={`text-2xl font-bold mb-2 ${textColorClass}`}>{title}</h3>
        <p className={`${descriptionColorClass}`}>{description}</p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className={`inline-flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-600 transition-colors ${
          variant === "gradient"
            ? "bg-brand hover:bg-brand text-white shadow-md hover:shadow-lg"
            : "bg-brand hover:bg-brand text-white"
        }`}
      >
        <span className="material-icons text-lg">edit</span>
        {resetButtonText}
      </button>
    </div>
  );
};

export default SuccessMessage;
