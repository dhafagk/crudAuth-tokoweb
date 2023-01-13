import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiEdit } from "react-icons/fi";

interface ButtonProps {
  id: number;
}

const AtomEditButton: React.FC<ButtonProps> = ({ id }: ButtonProps) => {
  const router = useRouter();
  return (
    <Button
      colorScheme="yellow"
      onClick={() => router.push(`/product/edit/${id}`)}
    >
      <FiEdit />
    </Button>
  );
};

export default AtomEditButton;
