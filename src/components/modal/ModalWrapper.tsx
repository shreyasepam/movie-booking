import { ReactNode, useEffect } from "react";
import Cancel from "../../assets/cancel.svg";
import { ReactSVG } from "react-svg";
import Tooltip from "../tooltip";
import AppButton from "../appButton";

interface IModalWrapperProps {
  children: ReactNode;
  isOpen?: boolean;
  title: string;
  onClose?: () => void;
}

const ModalWrapper: React.FC<IModalWrapperProps> = ({
  isOpen,
  children,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`relative z-10 ${isOpen ? "visible" : "invisible"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
          isOpen
            ? "ease-out duration-300 opacity-100"
            : "ease-in duration-200 opacity-0"
        }`}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className={`relative transform overflow-hidden rounded-lg bg-glass text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-4 ${
              isOpen
                ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100"
                : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }`}
          >
            <div className="w-full flex items-center">
              <h3 className="text-center text-gray-100 text-2xl font-semibold w-[97%]">
                {title}
              </h3>
              <Tooltip content="Close" position="bottom">
                <AppButton
                  classes={{
                    root: "rounded-full w-8 h-8 px-1 py-1 ml-4 flex items-center justify-center bg-blue-base",
                    text: "text-sm font-medium",
                  }}
                  icon={
                    <ReactSVG
                      src={Cancel}
                      className="text-white w-4 h-4 cursor-pointer"
                      title="Search"
                    />
                  }
                  onClick={() => {
                    if (onClose) {
                      onClose();
                    }
                  }}
                />
              </Tooltip>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
