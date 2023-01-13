import { Box, Button, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { MoleculeSkeleton } from "../../components/molecules";
import { useProduct } from "../../hooks";
import { AuthorizedLayout } from "../../layouts";

interface DetailProductProps {
  productID: any;
}

const DetailProduct: NextPage<DetailProductProps> = ({ productID }) => {
  const { data, isLoading } = useProduct.useFetchDetailProduct(productID);
  const date: Date = new Date(data?.created_at);
  const router = useRouter();

  return (
    <AuthorizedLayout>
      {isLoading ? (
        <MoleculeSkeleton />
      ) : (
        <Stack spacing="5">
          <Box>ID: {data?.id}</Box>
          <Box>Name: {data?.name}</Box>
          <Box>Price: {data?.price}</Box>
          <Box>Created At: {date.toLocaleString()}</Box>

          <Button colorScheme="blue" onClick={() => router.push("/")} w="250px">
            Go Back
          </Button>
        </Stack>
      )}
    </AuthorizedLayout>
  );
};

DetailProduct.getInitialProps = ({ query }) => {
  return {
    productID: query.id,
  };
};

export default DetailProduct;
