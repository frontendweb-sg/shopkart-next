"use client";
import { useApp } from "@/components/context/App";
import { ICategoryDoc } from "@/models/category";
import { FaTrashAlt } from "react-icons/fa";
import { startTransition, useState } from "react";
import { deleteCategory } from "@/lib/category";
import { toast } from "react-toastify";
type DeleteCategoryProps = {
  category: ICategoryDoc;
};

/**
 * Delete category
 * @param param0
 * @returns
 */
const DeleteCategory = ({ category }: DeleteCategoryProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { onConfirmation, onCancelConfirmation } = useApp();

  const handleDelete = () => {
    onConfirmation({
      open: true,
      async onSubmit() {
        try {
          startTransition(() => {
            deleteCategory(category.id);
          });
          toast.success("Category deleted successfully!");
          onCancelConfirmation();
        } catch (error) {
          console.log("e", error);
        }
      },
    });
  };

  return (
    <>
      <button disabled={loading} onClick={handleDelete} className="flex items-center">
        <FaTrashAlt className="mr-2" /> Delete
      </button>
    </>
  );
};

export default DeleteCategory;
