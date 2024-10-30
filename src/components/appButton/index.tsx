import { FC } from "react";
import IAppButtonProps from "./IAppButton.props";

const AppButton: FC<IAppButtonProps> = ({ title, icon, className }) => {
  return (
    <button
      className={`
          flex items-center gap-2 
          px-4 py-2 
          rounded-full 
          transition-colors
         bg-gray-400/60
         hover:opacity-70
         active:opacity-100
          ${className ? className : ""}
        `}
    >
      {icon && icon}
      {title && <span className="text-sm font-medium">{title}</span>}
    </button>
  );
};

export default AppButton;
