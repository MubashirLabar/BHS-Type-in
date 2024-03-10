"use client";

import { useMemo } from "react";
import DataTable from "react-data-table-component";

const defaultCustomStyles = {
  headCells: {
    style: {
      backgroundColor: "#181818",
      color: "#fff",
      fontSize: 14,
      fontWeight: 500,
    },
  },
  cells: {
    style: {
      fontSize: 14,
    },
  },
  table: {
    style: {},
  },
};

function Table({
  columns,
  data,
  customStyles,
  pagination,
  paginationPerPage,
  ...rest
}: {
  columns: any;
  data: any;
  customStyles?: any;
  pagination?: boolean;
  paginationPerPage?: number;
}) {
  const mergedCustomStyles = useMemo(
    () => ({ ...defaultCustomStyles, ...customStyles }),
    [customStyles]
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={mergedCustomStyles}
      pagination
      paginationPerPage={paginationPerPage}
      {...rest}
    />
  );
}

export default Table;
