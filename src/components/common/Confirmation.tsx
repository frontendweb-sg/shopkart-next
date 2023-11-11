"use client";
import Modal from "./Modal";
import { useApp } from "../context/App";
import Button from "./Button";
import { AppContent } from "@/utils/AppContent";

/**
 * Confirmation component
 * @returns
 */
const Confirmation = () => {
  const { confirm, onCancelConfirmation } = useApp();
  return (
    <Modal size="xs" onClose={onCancelConfirmation} open={confirm.open} label={confirm.title}>
      <p className="text-sm mb-3 block">{confirm.subttile}</p>
      <div className="flex items-center justify-end mt-3">
        <Button onClick={onCancelConfirmation} color="secondary" type="button">
          {AppContent.cancel}
        </Button>
        <Button className="ml-2" type="button" onClick={confirm.onSubmit}>
          {AppContent.ok}
        </Button>
      </div>
    </Modal>
  );
};

export default Confirmation;
