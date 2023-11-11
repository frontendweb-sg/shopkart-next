import { useCallback, useState } from "react";
import { useToggle } from "./useToggle";

export type IConfirmation = {
  open: boolean;
  title?: string;
  subttile?: string;
  onSubmit?: () => void;
};
export default function useConfirmation() {
  const [confirm, setConfirm] = useState<IConfirmation>({
    open: false,
    title: "Delete",
    subttile: "Are you sure!",
    onSubmit() {},
  });

  const onConfirmation = useCallback((confirm: IConfirmation) => {
    console.log("me also fire");
    setConfirm((prev) => ({
      ...prev,
      ...confirm,
    }));
  }, []);

  const onCancelConfirmation = useCallback(() => {
    setConfirm({
      open: false,
      title: "Delete",
      subttile: "Are you sure!",
      onSubmit() {},
    });
  }, []);

  return {
    confirm,
    onConfirmation,
    onCancelConfirmation,
  };
}
