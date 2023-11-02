import { useCallback, useState } from "react";

/**
 * Toggle handler
 * @returns
 */
export function useToggle() {
  const [open, setOpen] = useState<boolean>(false);

  const openHandler = useCallback(() => setOpen(true), []);
  const closeHandler = useCallback(() => setOpen(false), []);
  const toggleHandler = useCallback(() => setOpen((prev) => !prev), []);

  return {
    open,
    openHandler,
    closeHandler,
    toggleHandler,
  };
}
