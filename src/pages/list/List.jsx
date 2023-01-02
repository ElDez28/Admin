import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Users from "../../components/users/Users";
import "./list.scss";
const List = () => {
  return (
    <div className="list">
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <Users></Users>
      </div>
    </div>
  );
};

export default List;
