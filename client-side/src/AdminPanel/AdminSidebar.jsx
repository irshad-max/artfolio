import "../AdminPanel/AdminPanel.css";
import { Link } from "react-router-dom";
export const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h1 className="web_name">
        NEX<span>PIXEL</span>
      </h1>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/images">All Images</Link>
        </li>
      </ul>
      <p className="bottom_btn">Logout</p>
    </div>
  );
};
