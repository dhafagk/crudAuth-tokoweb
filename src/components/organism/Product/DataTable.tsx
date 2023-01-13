import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useProduct } from "../../../hooks";
import { ProductDataProps } from "../../../types/product.type";
import { MoleculeActionButtons } from "../../molecules";

const OrganismProductDataTable: React.FC = () => {
  const { data, isLoading } = useProduct.useFetchProducts();

  const columns: TableColumn<ProductDataProps["data"]>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => <MoleculeActionButtons id={row.id} />,
    },
  ];
  return (
    <DataTable columns={columns} data={data} progressPending={isLoading} />
  );
};

export default OrganismProductDataTable;
