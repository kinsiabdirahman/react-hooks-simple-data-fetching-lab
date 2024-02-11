import React, { useState, useEffect } from "react";
import { data } from "../mocks/data";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const images = [data.message];

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          images.length > 0 && (
            <img
              src={images[currentImageIndex]}
              alt="A Random Dog"
              style={{ width: "100%", height: "auto" }}
            />
          )
        )}

        
     </div>
      <button onClick={handleNextImage}>Next</button>
          </div> 
  );
}

export default App;
