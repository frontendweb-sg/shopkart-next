"use client";

import Modal from "@/components/common/Modal";
import PageTitle from "@/components/common/PageTitle";
import { useToggle } from "@/hooks/useToggle";
import { ReactNode } from "react";
import CategoryForm from "./CategoryForm";

const CategoryList = ({ children }: { children: ReactNode }) => {
  const { open, openHandler, closeHandler } = useToggle();
  return (
    <>
      {children}
      <Modal label="Add category" onClose={closeHandler} open={open}>
        <CategoryForm onClose={closeHandler} />
      </Modal>
    </>
  );
};

export default CategoryList;
