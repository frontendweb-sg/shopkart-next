import { useToggle } from "@/hooks/useToggle";
import classNames from "classnames";
import { forwardRef } from "react";
import { FaEllipsisV } from "react-icons/fa";
const Select = forwardRef(
  <T,>(
    { defaultValue, options, getOptionLabel: getOptionLabelFn }: SelectProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { open, openHandler, closeHandler } = useToggle();
    const getOptionLabel = getOptionLabelFn;
    const classes = classNames("relative");
    return (
      <div className={classes}>
        <div>
          <button onClick={openHandler}>
            <FaEllipsisV />
          </button>
        </div>
        {open && <div className="absolute top-0">Hello World</div>}
      </div>
    );
  }
);

export default Select;
