import "./users.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatable";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Users = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div onClick={(e) => e.stopPropagation()} className="cellAction">
            <button
              onClick={() => navigate("/users/:id")}
              className={`viewButton ${state.dark === "dark" ? "dark" : ""}`}
            >
              View
            </button>
            <button
              className={`deleteButton ${state.dark === "dark" ? "dark" : ""}`}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: "70%", width: "100%" }}>
      <DataGrid
        className="grid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        sx={
          state.dark === "dark"
            ? { color: "white", border: "none" }
            : { color: "gray" }
        }
      />
      <div onClick={() => navigate("/users/new")} className="linkToNewUser">
        Add new user
      </div>
    </div>
  );
};

export default Users;
