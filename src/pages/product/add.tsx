import { Button, Stack, useToast } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AtomInputText, Form } from "../../components/atoms";
import { MoleculeInputGroupText } from "../../components/molecules";
import { useProduct } from "../../hooks";
import { AuthorizedLayout } from "../../layouts";
import { ProductDataProps } from "../../types/product.type";
import { ProductValidation } from "../../validations";

const AddProduct: NextPage = () => {
  const { mutate, isLoading } = useProduct.useCreateProduct();
  const toast = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  const onSubmit = (values: Partial<ProductDataProps["data"]>) => {
    mutate(values, {
      onError: (error) => {
        toast({
          title: "Something went wrong",
          description: error.message,
          position: "top",
          status: "error",
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
        router.replace("/");

        toast({
          title: "Cooool!",
          description: "Your product has been created",
          position: "top",
          status: "success",
        });
      },
    });
  };
  return (
    <AuthorizedLayout title="Add Product">
      <Form
        defaultValues={{
          email: "",
          password: "",
        }}
        validationSchema={ProductValidation.ProductSchemaValidation}
        onSubmit={onSubmit}
      >
        {() => (
          <Stack spacing={4}>
            <MoleculeInputGroupText
              label="Name"
              htmlFor="name"
              name="name"
              isRequired
              component={AtomInputText}
            />

            <MoleculeInputGroupText
              label="Price"
              htmlFor="price"
              name="price"
              isRequired
              component={AtomInputText}
            />

            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              isLoading={isLoading}
              type="submit"
            >
              Add Product
            </Button>
          </Stack>
        )}
      </Form>
    </AuthorizedLayout>
  );
};

export default AddProduct;
