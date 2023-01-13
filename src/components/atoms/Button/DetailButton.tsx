import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface ButtonProps {
  id: number;
}

const AtomDetailButton: React.FC<ButtonProps> = ({ id }: ButtonProps) => {
  const router = useRouter();
  return (
    <Button colorScheme="green" onClick={() => router.push(`/product/${id}`)}>
      <FiExternalLink />
    </Button>
  );
};

export default AtomDetailButton;
