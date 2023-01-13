import { HStack } from "@chakra-ui/react";
import React from "react";
import { AtomDeleteButton, AtomDetailButton, AtomEditButton } from "../atoms";

interface ActionButtonProps {
  id: number;
}

const MoleculeActionButtons: React.FC<ActionButtonProps> = ({
  id,
}: ActionButtonProps) => {
  return (
    <HStack>
      <AtomDetailButton id={id} />
      <AtomEditButton id={id} />
      <AtomDeleteButton id={id} />
    </HStack>
  );
};

export default MoleculeActionButtons;
