import { GalleryContext } from "../assets/Context/GalleryContext";
import { useContext } from "react";
import IconHeart from "../assets/icon/IconHeart";

const FavoritesSelected = () => {
  const { images, setImages } = useContext(GalleryContext);

  const disLike = (id) => {
    const favoritesLiked = images.map((favImage) => {
      if (favImage.id === id) {
        console.log(favImage.liked);
        return {
          ...favImage,
          isLiked: false,
        };
      }
      return favImage;
    });
    setImages(favoritesLiked);
  };

  return (
    <div className="imagesGallery favGallery">
      {images
        .filter((imageLiked) => (imageLiked.isLiked == true))
        .map((imageLiked, i) => (
          <div
            key={i+imageLiked.id}
            onClick={() => disLike(imageLiked.id)}
            className="imageCard"
            style={{
              backgroundImage: `url(${imageLiked.src.large2x})`,
            }}
          >
            <p> {imageLiked.alt} </p>

            <wired-card
              Fill="#ffffffb0"
              className="likeIcon"
              style={{ backgroundColor: "transparent" }}
            >
              <IconHeart filled={!imageLiked.liked} />
            </wired-card>
            <p>{imageLiked.photographer}</p>
          </div>
        ))}
    </div>
  );
};

export default FavoritesSelected;
