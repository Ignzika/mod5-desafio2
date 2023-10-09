import { GalleryContext } from "../assets/Context/GalleryContext";
import { useContext } from "react";

import "./Gallery.css";
import IconHeart from "../assets/icon/IconHeart";

const Gallery = () => {
  const { images, setImages } = useContext(GalleryContext);

  const selectedFavorite = (id) => {
    const favoritesLiked = images.map((favImage) => {
      if (favImage.id === id) {
        console.log(favImage.liked);
        return {
          ...favImage,
          isLiked: !favImage.isLiked,
          // aca nose podria usar el elemento Liked del objeto?
          // trate de hacerlo asi :  ...favImage.Liked = !Liked 
          //y no resutlo
        };
        
      }
      console.log(favImage.liked);
      return favImage;
      
    });
    setImages(favoritesLiked);
  };

  return (
    <>
      <div className="imagesGallery">
        {images.map((image, i) => (
          <div
            key={i}
            onClick={() => selectedFavorite(image.id)}
            className="imageCard"
            style={{
              backgroundImage: `url(${image.src.medium})`,
            }}
          >
            <p> {image.alt} </p>

            <wired-card
              Fill="#ffffffb0"
              className="likeIcon"
              style={{ backgroundColor: "transparent" }}
            >
              <IconHeart filled={image.isLiked} />
            </wired-card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
