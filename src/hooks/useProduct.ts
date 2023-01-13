import ProductService from "../services/product.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ProductDataProps } from "../types/product.type";

const productService = new ProductService();

const useFetchProducts = (params = {}) => {
  return useQuery(
    ["products", params],
    () => productService.getProducts(params),
    {
      staleTime: Infinity,
      keepPreviousData: true,
      select: (data) => data.data.data,
    }
  );
};

const useFetchDetailProduct = (id: string) => {
  return useQuery(["post", id], () => productService.getProduct(id), {
    select: (data) => data.data.data,
  });
};

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, Error, Partial<ProductDataProps["data"]>>(
    (args) => productService.createProduct(args)
    // {
    //   onMutate: async (newProduct) => {
    //     await queryClient.cancelQueries(["products"]);
    //     const previousProducts = queryClient.getQueryData(["products"]);
    //     queryClient.setQueryData(["products"], (old: any) => [
    //       ...old,
    //       newProduct,
    //     ]);
    //     return { previousProducts };
    //   },
    //   onError: (err, newProduct, context: any) => {
    //     queryClient.setQueryData(["products"], context.previousProducts);
    //   },
    //   onSettled: () => {
    //     queryClient.invalidateQueries({ queryKey: ["products"] });
    //   },
    // }
  );
};

const useEditProduct = () => {
  return useMutation<AxiosResponse, Error, Partial<ProductDataProps["data"]>>(
    (args) => productService.editProduct(args)
  );
};

const useDeleteProduct = () => {
  return useMutation<AxiosResponse, Error, any>((args) =>
    productService.deleteProduct(args.id)
  );
};

export {
  useFetchProducts,
  useFetchDetailProduct,
  useCreateProduct,
  useEditProduct,
  useDeleteProduct,
};
