import { useEffect, useState } from "react";
import axios from "axios";
export const Categories = () => {
  const token = localStorage.getItem("token");
  const [categories, setcategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [message, setMessage] = useState("");

  // SHOW CATEGORIES
  useEffect(() => {
    const show = async () => {
      try {
        const response = await axios.get(
          "https://nexpixel.onrender.com/api/categories",
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

  // CREATE CATEGORY
  const createCategory = async () => {
    const name = newCategory.trim();
    if (!name) {
      setMessage("Please enter a category name.");
      return;
    }
    try {
      const response = await axios.post(
        "https://nexpixel.onrender.com/api/create/category",
        { name },
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
  };
  return (
    <div className="upload-image">
      <h2>Category Management</h2>
      <p>Create, update and manage your categories.</p>

      {/* CREATE CATEGORY */}
      <div>
        <h3>Create New Category</h3>

        <input
          type="text"
          placeholder="Enter new category"
          className="Drop-Down-Menu"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <button onClick={createCategory}>Create Category</button>
      </div>
      {/* AVAILABLE CATEGORIES */}
      <div className="available-categories">
        <h3>Available Categories</h3>
        <input type="text" list="categorie" />
        <datalist id="categorie">
          {categories.map((cat) => (
            <option key={cat._id} value={cat.category} />
          ))}
        </datalist>
      </div>

      {/* MESSAGE */}
      {message && <p className="category-message">{message}</p>}
    </div>
  );
};
