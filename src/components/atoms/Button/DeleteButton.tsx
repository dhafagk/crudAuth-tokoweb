import { Button, useToast } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useProduct } from "../../../hooks";

interface ButtonProps {
  id: number;
}

const AtomDeleteButton: React.FC<ButtonProps> = ({ id }: ButtonProps) => {
  const { mutate: deleteMutate } = useProduct.useDeleteProduct();

  const queryClient = useQueryClient();
  const toast = useToast();

  const onDeleteProduct = (id: number) => {
    deleteMutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["products"]);

          toast({
            title: "Aww that's bad!",
            description: "Your product has been deleted",
            position: "top",
            status: "success",
          });
        },
        onError: (error) => {
          toast({
            title: "Something went wrong",
            description: error.message,
            status: "error",
          });
        },
      }
    );
  };
  return (
    <Button colorScheme="red" onClick={() => onDeleteProduct(id)}>
      <FiTrash2 />
    </Button>
  );
};

export default AtomDeleteButton;
