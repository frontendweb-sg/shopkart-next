import { FaTimes } from "react-icons/fa";
export type ModalProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  onClose?: () => void;
  label?: string;
};
const Modal = ({ label, open, onClose, children, ...rest }: ModalProps) => {
  if (!open) return null;
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="p-4 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="flex items-center relative border-b border-slate-200 pb-3 mb-4">
          <h6>{label}</h6>
          <button onClick={onClose} className="absolute top-0 right-0">
            <FaTimes />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Modal;
