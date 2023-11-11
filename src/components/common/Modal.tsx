import classNames from "classnames";
import { FaTimes } from "react-icons/fa";
export type ModalProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  onClose?: () => void;
  label?: string;
  size?: Size;
};
const Modal = ({ size = "sm", label, open, onClose, children, ...rest }: ModalProps) => {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className={classNames(
        "fixed inset-0 z-50 flex justify-center items-center transition-colors",
        open ? "visible bg-black/20" : "invisible"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          "bg-white  modal transition-all p-4  shadow rounded-md",
          `modal-${size}`
        )}
      >
        <div className="flex border-b pb-2 items-center relative">
          <h6 className="before:w-1 before:-ml-4 before:content before:bg-rose-600 before:h-6 before:absolute">
            {label}
          </h6>
          <button onClick={onClose} className="absolute top-0 right-0 hover:text-rose-600">
            <FaTimes />
          </button>
        </div>
        <div className="pt-3">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
