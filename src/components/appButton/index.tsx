import { FC } from "react";
import IAppButtonProps from "./IAppButton.props";

const AppButton: FC<IAppButtonProps> = ({ title, icon, classes, ...rest }) => {

  return (
    <button
    data-testid="app-button"
      className={`
          flex items-center gap-2 
          px-4 py-2 
          rounded-full 
          transition-colors
         hover:opacity-70
         active:opacity-100
          ${classes?.root && classes?.root}
        `}
     {...rest}
    >
      {icon && icon}
      {title && (
        <span className={`${classes?.text && classes?.text}`}>{title}</span>
      )}
    </button>
  );
};

export default AppButton;
