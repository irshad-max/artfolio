import "../AdminPanel/AdminPanel.css";
export const UploadImage = () => {
  const upload = async () => {
    const image = document.getElementById("file");
    console.log(image.files[0]);
  };

  return (
    <div className="upload-image">
      <h2>Upload Image</h2>
      <p>Add new image to your gallory with category</p>
      <label htmlFor="file">🏞️</label>
      <input type="file" id="file" accept="image/*" className="Image-accept" />
      <input type="text" placeholder="DESCRIPTION" className="Desription" />

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
      <button onClick={upload}>Upload</button>
    </div>
  );
};
