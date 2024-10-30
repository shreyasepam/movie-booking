import { ButtonHTMLAttributes } from "react";

export default interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: React.ReactNode;
  classes?: {
    root?: string;
    text?: string;
  };
}
