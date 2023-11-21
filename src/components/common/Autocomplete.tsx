"use client";
import classNames from "classnames";
import useOutsideClick from "@/hooks/useOutsideClick";
import useFocus from "@/hooks/useFocus";
import type { FormikErrors, FormikTouched } from "formik";
import { ReactNode, useMemo, useRef, useState } from "react";
import { useToggle } from "@/hooks/useToggle";
import { FaCheck } from "react-icons/fa";

export type AutocompleteProps<T> = SelectProps<T> & {
  errors?: FormikErrors<{ [key: string]: string }>;
  touched?: FormikTouched<{ [key: string]: string }>;
  label?: string;
};

const Autocomplete = <T,>({
  name,
  isMulti,
  isSearch,
  idProp = "id",
  options,
  defaultValue = null,
  getOptionLabel,
  getOptionValue,
  errors,
  touched,
  ...rest
}: AutocompleteProps<T>) => {
  const [currentFocus, setCurrentFocus] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<T | T[]>(
    isMulti ? [...(defaultValue as T[])] : (defaultValue as T)
  );

  const { open, openHandler, closeHandler, toggleHandler } = useToggle();
  const classes = classNames("relative w-full mb-2");
  const optionLabel = getOptionLabel ?? ((option) => option["label" as keyof T] as string);

  const autocompleteRef = useOutsideClick(closeHandler);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const dropdownMenuItemRef = useRef<HTMLLIElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const inpRef = useFocus<HTMLInputElement>();

  const removeItem = () => {};
  const handleClick = (option: T, index?: number) => {
    let selectedOption = option as T;
    if (isMulti) {
    }
    setSelectedValue(selectedOption);
  };

  const handleKeyboard = (ev: React.KeyboardEvent) => {
    const { code } = ev;
    switch (code) {
      case "Esc":
        ev.stopPropagation();
        closeHandler();
        break;
      case "ArrowUp":
        ev.stopPropagation();
        setCurrentFocus((prev) => (currentFocus === 0 ? 0 : prev - 1));
        break;
      case "ArrowDown":
        ev.stopPropagation();
        // setCurrentFocus((prev) => (currentFocus === filteredOptions.length - 1 ? 0 : prev + 1));
        break;
      case "Enter":
        // handleItemClick(ev as any, filteredOptions[currentFocus]);
        break;
      default:
        break;
    }
  };

  const display = useMemo(() => {
    if (isMulti) {
    }
    return <div>{optionLabel(selectedValue as T)}</div>;
  }, [isMulti, optionLabel, selectedValue]);

  const error =
    errors![name as keyof typeof errors] && touched![name as keyof typeof touched]
      ? errors![name as keyof typeof errors]
      : null;
  return (
    <>
      <div
        tabIndex={0}
        onKeyDown={handleKeyboard}
        ref={autocompleteRef}
        className={classes}
        role="autocomplete"
      >
        <div onClick={toggleHandler} className="w-full border rounded-md py-2 px-2">
          {display as ReactNode}
        </div>
        {open && (
          <div
            className="absolute top-full bg-white w-full shadow rounded-b-sm p-3"
            role="combobox"
          >
            {isSearch && (
              <div className="dropdown-search mb-3" role="searchbox">
                <input
                  ref={inpRef}
                  role="textbox"
                  className="border text-sm border-solid items-center px-4 w-full bg-inherit hover:bg-inherit block rounded-md py-2 hover:bg-slate-50 focus:outline-none"
                  placeholder="Search..."
                  name={name}
                  type="search"
                />
              </div>
            )}
            <div className="dropdown-submenu  max-h-56 overflow-y-auto">
              <ul>
                {options.map((option: T, index: number) => (
                  <li
                    key={`${option[idProp as keyof T]}-item-${index}`}
                    onClick={() => handleClick(option, index)}
                    className={classNames(
                      "p-2 text-sm flex items-center hover:bg-gray-100  rounded-md border-b border-gray-100",
                      { "bg-gray-100": currentFocus === index }
                    )}
                  >
                    {optionLabel(option)} <FaCheck className="ml-2 text-xs/[10px] text-rose-600" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      {error && <span className="text-red-500 mt-1 text-xs block">{error}</span>}
    </>
  );
};

export default Autocomplete;
