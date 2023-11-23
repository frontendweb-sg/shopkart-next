"use client";
import Input from "./Input";
import Button from "./Button";
import { ChangeEvent, memo } from "react";
import { AppContent } from "@/utils/AppContent";
import { FaMinus } from "react-icons/fa";

type DynamicFieldsProps<T> = {
  name?: string;
  initialValues?: T;
  values?: T[];
  label?: string;
  onAdd: () => void;
  onRemove: (index: number) => void;
  onBlur: (ev: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

const DynamicFields = memo(function DynamicFields<T extends Readonly<T>>({
  name = "attributes",
  values,
  label = "Attributes",
  onAdd,
  onRemove,
  onChange,
  onBlur,
}: DynamicFieldsProps<T>) {
  return (
    <>
      <div className="d-full flex items-center justify-between mb-3">
        <h6>{label}</h6>
        <Button onClick={onAdd}>{AppContent.add}</Button>
      </div>

      <div>
        {values?.map((item: T, index: number) => {
          return (
            <div className="grid relative grid-cols-2 pr-16 gap-4" key={`row-${index}`}>
              <div>
                <Input
                  onChange={onChange}
                  onBlur={onBlur}
                  label="Key"
                  name={`${name}.${[index]}["name"]`}
                  value={item["name" as keyof T]}
                />
              </div>
              <div>
                <Input
                  label="Value"
                  name={`${name}.${[index]}["value"]`}
                  value={item["value" as keyof T]}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              </div>
              <div className="absolute right-0 bottom-5">
                <Button onClick={() => onRemove(index)}>
                  <FaMinus />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});

export default DynamicFields;
