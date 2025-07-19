"use client";

import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";

export default function LeaveTable({ rows, onApprove, onReject }) {
  const router = useRouter();

  const handleRowClick = (params) => {
    const encodedName = encodeURIComponent(params.row.name);
    router.push(`/leave-tracking/${encodeURIComponent(params.row.name)}`);
  };
  const columns = [
    { field: "type", headerName: "Leave Type", flex: 1 },
    { field: "from", headerName: "From", flex: 1 },
    { field: "to", headerName: "To", flex: 1 },
    { field: "remaining", headerName: "Remaining Leave", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const status = params.row.status;
        const statusStyles = {
          Approved: " text-green-300",
          Pending: "text-yellow-300",
          Rejected: " text-red-300",
        };

        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
          >
            {status}
          </span>
        );
      },
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        autoHeight
        onRowClick={handleRowClick}
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        pagination
        disableSelectionOnClick
        disableColumnSeparator
        sx={{
          fontFamily: "Outfit",
          fontSize: 14,

          // 🚫 Kill ALL outer borders
          border: "none",

          // 🚫 Remove column header underline + background
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F9FAFB",
            borderBottom: "none",
          },

          // 🚫 Hide vertical column lines
          "& .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },

          // 🚫 Remove cell borders
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },

          // 🚫 Remove footer border
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },

          // 🚫 Remove row borders
          "& .MuiDataGrid-row": {
            border: "none",
          },

          // ✨ Optional: Soft hover effect
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#F3F4F6",
            outline: "none",
          },
        }}
      />
    </div>
  );
}
