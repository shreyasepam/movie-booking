import { ReactNode } from "react";

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipPositionStyles {
  [key: string]: string;
}

export default interface ITooltipProps{
    children: ReactNode;
    content: string | ReactNode;
    position?: TooltipPosition;
    delay?: number;
    className?: string;
}

