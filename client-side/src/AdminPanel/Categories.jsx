export const Categories = () => {
  return (
    <div className="upload-image">
      <h2>Create Categories</h2>
      <p>Create Catogories And Change Too</p>
      <input
        type="text"
        list="categories"
        placeholder="Select category"
        className="Drop-Down-Menu"
      />
      <datalist id="categories">
        <option value="Thumbnail" />
        <option value="User" />
        <option value="Naruto" />
      </datalist>
      <h1>Change previos catogies Create too</h1>
      <input type="text" placeholder="Create and Change too"/>
      <button>Upload</button>
    </div>
  );
};
