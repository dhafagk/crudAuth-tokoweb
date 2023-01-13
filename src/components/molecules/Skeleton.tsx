import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const MoleculeSkeleton: React.FC = () => {
  return (
    <Stack>
      <Skeleton height="20px" w="500px" />
      <Skeleton height="20px" w="500px" />
      <Skeleton height="20px" w="500px" />
      <Skeleton height="20px" w="500px" />
      <Skeleton height="20px" w="500px" />
    </Stack>
  );
};

export default MoleculeSkeleton;
