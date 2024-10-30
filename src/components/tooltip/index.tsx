import { FC, useState } from 'react';
import ITooltipProps from './ITooltip.props';

const Tooltip:FC<ITooltipProps> = ({ 
  children, 
  content, 
  position = 'top',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 -translate-y-1 mb-1',
    bottom: 'top-full left-1/2 -translate-x-1/2 translate-y-1 mt-1',
    left: 'right-full top-1/2 -translate-y-1/2 -translate-x-1 mr-1',
    right: 'left-full top-1/2 -translate-y-1/2 translate-x-1 ml-1'
  };

  const arrows = {
    top: 'bottom-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
    right: 'left-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setTimeout(() => setIsVisible(true), delay)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div 
        className={`
          absolute ${positions[position]}
          transition-all duration-200
          ${isVisible 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
          }
        `}
      >
        <div className="relative">
          <div className="
            bg-blue-base
            text-white 
            text-sm
            px-3 py-1.5
            rounded-lg
            whitespace-nowrap
            shadow-lg
          ">
            {content}
          </div>
          <div className={`
            absolute
            w-0 h-0
            border-solid border-4
            border-gray-900
            ${arrows[position]}
          `} />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;