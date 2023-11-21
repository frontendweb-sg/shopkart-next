export type DynamicFormProps<T> = {
  name?: string;
  initialValue: T;
  handler: Function;
};

export default function useDynamicForm<T>({
  name = "attributes",
  initialValue,
  handler,
}: DynamicFormProps<T>) {
  const handleAdd = () => {
    const value = { id: Math.floor(Math.random() * 100) + 1, ...initialValue };
    handler((prev: T) => ({
      ...prev,
      [name]: [...((prev[name as keyof T] as T[]) ?? []), value],
    }));
  };

  const handleRemove = (index: number) => {
    handler((prev: T) => {
      const values = { ...prev };
      (values[name as keyof T] as T[]).splice(index, 1);
      return values;
    });
  };

  return {
    handleAdd,
    handleRemove,
  };
}
