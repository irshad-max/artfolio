import "../AdminPanel/AdminPanel.css";
import { useEffect, useState } from "react";
import axios from "axios";
export const UploadImage = () => {
  const token = localStorage.getItem("token");
  const [categories, setcategories] = useState([]);
  const [desription, setdesription] = useState("");
  const [SelectedCategories, setSelectedCategories] = useState("");

  useEffect(() => {
    const show = async () => {
      try {
        const response = await axios.get(
          "https://artfolio-1.onrender.com/api/categories",
          {
            headers: {
              authorization: `bearer ${token}`,
            },
          },
        );
        setcategories(response.data.categories);
      } catch (e) {
        console.log("error", e.message);
      }
    };
    show();
  }, [token]);
  const upload = async () => {
    const image = document.getElementById("file");
    const formData = new FormData();

    formData.append("image", image.files[0]);
    formData.append("description", desription);
    formData.append("category", SelectedCategories);
    try {
      const response = await axios.post(
        "https://artfolio-1.onrender.com/api/user/upload",
        formData,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        },
      );
      console.log(response);
    } catch (e) {
      console.log("error", e.message);
    }
    console.log(image.files[0]);
    console.log(desription);
    console.log(SelectedCategories);
  };

  return (
    <div className="upload-image">
      <h2>Upload Image</h2>
      <p>Add new image to your gallory with category</p>
      <label htmlFor="file">🏞️</label>
      <input type="file" id="file" accept="image/*" className="Image-accept" />
      <input
        type="text"
        placeholder="DESCRIPTION"
        className="Desription"
        onChange={(e) => setdesription(e.target.value)}
      />

      <select
        value={SelectedCategories}
        onChange={(e) => setSelectedCategories(e.target.value)}
        className="Drop-Down-Menu"
      >
        <option value="">Select category</option>

        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.category}
          </option>
        ))}
      </select>
      <button onClick={upload}>Upload</button>
    </div>
  );
};
