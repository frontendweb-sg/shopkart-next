"use client";

import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { useToggle } from "@/hooks/useToggle";
import CategoryForm from "./CategoryForm";

const AddCategory = () => {
  const { open, openHandler, closeHandler } = useToggle();
  return (
    <>
      <Button onClick={openHandler}>Add</Button>
      <Modal label="Add Category" open={open} onClose={closeHandler}>
        <CategoryForm onClose={closeHandler} />
      </Modal>
    </>
  );
};

export default AddCategory;
