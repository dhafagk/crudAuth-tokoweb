import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import OrganismProductDataTable from "./DataTable";

const OrganismProductContainer: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Button
        colorScheme="blue"
        mb="5"
        onClick={() => router.push("/product/add")}
      >
        + Add Product
      </Button>

      <OrganismProductDataTable />
    </>
  );
};

export default OrganismProductContainer;
