import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";

import React from "./dataTable.scss";

const DataTable = () => {
  return (
    <div className="dataTable">
      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
