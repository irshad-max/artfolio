import { UploadImage } from "./Uploadimage";
import { Categories } from "./Categories";
export const AdminDesboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="nav-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div style={{display:"flex"}}><UploadImage /><Categories/></div>
    </div>
  );
};
