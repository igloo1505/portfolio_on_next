import React, { useState, useEffect } from "react";
import MainCameraCardImage from "./MainCameraCardImage";
import { CameraCardImageArray as imageArray } from "./CameraCardImageClass";
// import { gsapCameraCardTransition } from "./gsapCameraCardTransition";
import { transitionToOpen } from "../../animations/cameraCardTransition";
import { gsap } from "gsap";
// import styled from "styled-components";

const CameraProductCard = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handlePhotoAlbumClick = (e, i) => {
    e.preventDefault();
    // setIsInitialRender(false);
    setCurrentImageIndex(i);
  };
  useEffect(() => {
    setCurrentImageIndex(0);
  }, []);

  const toggleOpenState = () => {
    // gsapCameraCardTransition(!isOpen);
    // setIsOpen(!isOpen);
    console.log("running toggle state here....");
    transitionToOpen(isOpen);
    setIsOpen(!isOpen);
    setIsInitialRender(false);
    // gsap.to("product", {
    //   duration: 0.2,
    //   transform: "rotateX(-20deg)",
    // });
  };

  return (
    <div className="gallerySection cameraProductCardSection">
      <div
        className="product"
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="product__photo">
          <div className="photo-container">
            <MainCameraCardImage
              index={currentImageIndex}
              isOpen={isOpen}
              toggleOpenState={toggleOpenState}
              isInitialRender={isInitialRender}
            />
            <div className="photo-album">
              <ul>
                {imageArray.map((c, index) => (
                  <li
                    className={
                      index === currentImageIndex
                        ? "imageInAlbum currentImageInAlbum"
                        : "imageInAlbum"
                    }
                    onClick={(e) => handlePhotoAlbumClick(e, index)}
                  >
                    <img src={imageArray[index].image} alt="Camera Gallery" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="product__info">
            <div className="title">
              <h1>Delicious Apples</h1>
              <span>COD: 45999</span>
            </div>
            <div className="price">
              $<span>7.93</span>
            </div>
            <div className="variant">
              <h3>SELECT A COLOR</h3>
              <ul>
                <li>
                  <img
                    src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                    alt="green apple"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                    alt="yellow apple"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                    alt="orange apple"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                    alt="red apple"
                  />
                </li>
              </ul>
            </div>
            <div className="description">
              <h3>BENEFITS</h3>
              <ul>
                <li>Apples are nutricious</li>
                <li>Apples may be good for weight loss</li>
                <li>Apples may be good for bone health</li>
                <li>They're linked to a lowest risk of diabetes</li>
              </ul>
            </div>
            <button className="buy--btn" onClick={toggleOpenState}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraProductCard;
