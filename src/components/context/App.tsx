import useConfirmation, { IConfirmation } from "@/hooks/useConfirmation";
import { ReactNode, createContext, useContext, useMemo } from "react";

type AppState = {
  confirm: IConfirmation;
  onCancelConfirmation: () => void;
  onConfirmation: (confirm: IConfirmation) => void;
};
export const AppContext = createContext<AppState | null>(null);
const AppProvider = ({ children }: { children: ReactNode }) => {
  const { confirm, onCancelConfirmation, onConfirmation } = useConfirmation();
  const state = useMemo(
    () => ({
      confirm,
      onCancelConfirmation,
      onConfirmation,
    }),
    [confirm, onCancelConfirmation, onConfirmation]
  );

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext<AppState | null>(AppContext);
  if (!context) throw new Error("Context can not be empty!");
  return context;
};
export default AppProvider;
