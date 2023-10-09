import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  
  const fetchImages = async () => {
    const URL = "/photos.json"; //in public
    try {
      const response = await axios.get(URL);
      console.log(response);

      if (!response.status) {
        throw new Error("no data");
      }
      const { photos: imagePost } = response.data;
      setImages(imagePost);
      console.log(imagePost);

    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  // otra forma
  // axios
  //   .get(URL)
  //   .then((response) => {
  //     console.log(response.data)
  //     console.log(response.data.photos)
  //     setImages(response.data.photos)
  //   })
  //   .cath((error) => { console.log(error.message) });
  // };
  // useEffect(() => {
  //   fetchImages();
  // }, []);

  return (
    <GalleryContext.Provider
      value={{
        images,

        setImages,

      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
