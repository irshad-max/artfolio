import "../AdminPanel/AdminPanel.css";
import "./AllImages.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const AllImages = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH ALL IMAGES
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/api/user/random/image",
        );
        console.log(response.data.designs[0].photo);
        setImages(
          Array.isArray(response.data.designs) ? response.data.designs : [],
        );
      } catch (e) {
        console.log("Error fetching images:", e.message);
        setError("Unable to load images. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);
  return (
    <div className="all-images-page">
      {/* HEADER */}
      <div className="gallery-header">
        <div>
          <span className="gallery-subtitle">YOUR CREATIVE SPACE</span>
          <h1>Image Gallery</h1>
          <p>Explore and manage all your uploaded graphics.</p>
        </div>

        <div className="gallery-total">
          <span>Total Images</span>
          <h2>{images.length}</h2>
        </div>
      </div>

      {/* SEARCH AND FILTER */}
      <div className="gallery-toolbar">
        <div className="gallery-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search images by description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {/* IMAGE COUNT */}
      <div className="gallery-result">
        <h3>All Collections</h3>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="gallery-message">
          <div className="gallery-spinner"></div>
          <p>Loading your gallery...</p>
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="gallery-message">
          <h3>Something went wrong!</h3>
          <p>{error}</p>
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && !error && images.length === 0 && (
        <div className="gallery-empty">
          <div>🖼️</div>
          <h2>No images found</h2>
          <p>
            {images.length === 0
              ? "Your gallery is empty. Upload your first image!"
              : "Try changing your search or category filter."}
          </p>
        </div>
      )}

      {/* IMAGE GRID */}
      {!loading && !error && images.length > 0 && (
        <div className="gallery-grid">
          {images.map((img) => {
            return (
              <div className="gallery-card" key={img._id}>
                <div
                  className="gallery-image-wrapper"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.photo}
                    alt={img.description || "Gallery image"}
                  />

                  <div className="gallery-overlay">
                    <span>View Image ↗</span>
                  </div>
                </div>

                <div className="gallery-card-info">
                  <div>
                    <h4>{img.category.category || "Untitled Image"}</h4>
                  </div>

                  <button
                    className="view-image-btn"
                    onClick={() => setSelectedImage(img)}
                    title="View image"
                  >
                    ↗
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* IMAGE PREVIEW POPUP */}
      {selectedImage && (
        <div
          className="image-preview-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="image-preview-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="preview-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage.photo}
              alt={selectedImage.description || "Preview"}
            />

            <div className="preview-details">
              <h2>{selectedImage.category.category || "Untitled Image"}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
