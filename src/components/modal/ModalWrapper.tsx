import { ReactNode } from "react";

interface IModalWrapperProps {
    children: ReactNode;
  isOpen?: boolean;
  maxWidth?:string;
}

const ModalWrapper: React.FC<IModalWrapperProps> = ({ isOpen, children, maxWidth }) => {
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
            className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:${maxWidth || "max-w-lg"} ${
              isOpen
                ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100"
                : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
