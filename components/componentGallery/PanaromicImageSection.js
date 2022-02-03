import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import PanaromicImageCard from "./PanaromicImageCard";
import frontImageOne from "../../assets/slicedImages/frontOfCard/image_part_001.jpg";
import frontImageTwo from "../../assets/slicedImages/frontOfCard/image_part_002.jpg";
import frontImageThree from "../../assets/slicedImages/frontOfCard/image_part_003.jpg";
import frontImageFour from "../../assets/slicedImages/frontOfCard/image_part_004.jpg";
import frontImageFive from "../../assets/slicedImages/frontOfCard/image_part_005.jpg";
import frontImageSix from "../../assets/slicedImages/frontOfCard/image_part_006.jpg";
import frontImageSeven from "../../assets/slicedImages/frontOfCard/image_part_007.jpg";
import frontImageEight from "../../assets/slicedImages/frontOfCard/image_part_008.jpg";
import backImageOne from "../../assets/slicedImages/backOfCard/image_part_001.jpg";
import backImageTwo from "../../assets/slicedImages/backOfCard/image_part_002.jpg";
import backImageThree from "../../assets/slicedImages/backOfCard/image_part_003.jpg";
import backImageFour from "../../assets/slicedImages/backOfCard/image_part_004.jpg";
import backImageFive from "../../assets/slicedImages/backOfCard/image_part_005.jpg";
import backImageSix from "../../assets/slicedImages/backOfCard/image_part_006.jpg";
import backImageSeven from "../../assets/slicedImages/backOfCard/image_part_007.jpg";
import backImageEight from "../../assets/slicedImages/backOfCard/image_part_008.jpg";
import thirdImageOne from "../../assets/slicedImages/thirdCardFace/image_part_001.jpg";
import thirdImageTwo from "../../assets/slicedImages/thirdCardFace/image_part_002.jpg";
import thirdImageThree from "../../assets/slicedImages/thirdCardFace/image_part_003.jpg";
import thirdImageFour from "../../assets/slicedImages/thirdCardFace/image_part_004.jpg";
import thirdImageFive from "../../assets/slicedImages/thirdCardFace/image_part_005.jpg";
import thirdImageSix from "../../assets/slicedImages/thirdCardFace/image_part_006.jpg";
import thirdImageSeven from "../../assets/slicedImages/thirdCardFace/image_part_007.jpg";
import thirdImageEight from "../../assets/slicedImages/thirdCardFace/image_part_008.jpg";
import fourthImageOne from "../../assets/slicedImages/fourthCardFace/image_part_001.jpg";
import fourthImageTwo from "../../assets/slicedImages/fourthCardFace/image_part_002.jpg";
import fourthImageThree from "../../assets/slicedImages/fourthCardFace/image_part_003.jpg";
import fourthImageFour from "../../assets/slicedImages/fourthCardFace/image_part_004.jpg";
import fourthImageFive from "../../assets/slicedImages/fourthCardFace/image_part_005.jpg";
import fourthImageSix from "../../assets/slicedImages/fourthCardFace/image_part_006.jpg";
import fourthImageSeven from "../../assets/slicedImages/fourthCardFace/image_part_007.jpg";
import fourthImageEight from "../../assets/slicedImages/fourthCardFace/image_part_008.jpg";
import { moveToSectionBelow, getNavbarHeight } from "../../utilityFunctions";

const PanaromicImageSection = ({
  setGallerySectionToDisplay,
  isInitialView,
  setIsInitialView,
  gallerySectionToDisplay,
}) => {
  const [animationPhase, setAnimationPhase] = useState(1);
  const [style, setStyle] = useState({});
  useEffect(() => {
    let styles = getNavbarHeight();
    setStyle(styles);
    // console.log(styles)
    if (isInitialView === false) {
      moveToSectionBelow();
    }
  }, []);
  const cardArray = [
    new ImageCard(
      frontImageOne,
      backImageOne,
      thirdImageOne,
      fourthImageOne,
      1
    ),
    new ImageCard(
      frontImageTwo,
      backImageTwo,
      thirdImageTwo,
      fourthImageTwo,
      2
    ),
    new ImageCard(
      frontImageThree,
      backImageThree,
      thirdImageThree,
      fourthImageThree,
      3
    ),
    new ImageCard(
      frontImageFour,
      backImageFour,
      thirdImageFour,
      fourthImageFour,
      4
    ),
    new ImageCard(
      frontImageFive,
      backImageFive,
      thirdImageFive,
      fourthImageFive,
      5
    ),
    new ImageCard(
      frontImageSix,
      backImageSix,
      thirdImageSix,
      fourthImageSix,
      6
    ),
    new ImageCard(
      frontImageSeven,
      backImageSeven,
      thirdImageSeven,
      fourthImageSeven,
      7
    ),
    new ImageCard(
      frontImageEight,
      backImageEight,
      thirdImageEight,
      fourthImageEight,
      8
    ),
  ];

  return (
    <div className="gallerySection panoramicImageSection" style={style}>
      <div className="horizontalCardStack">
        {cardArray.map((im, index) => (
          <PanaromicImageCard
            key={index}
            frontImage={im.frontImage}
            thirdImage={im.thirdImage}
            fourthImage={im.fourthImage}
            backImage={im.backImage}
            index={im.index}
            animationPhase={animationPhase}
            setAnimationPhase={setAnimationPhase}
            setGallerySectionToDisplay={setGallerySectionToDisplay}
          />
        ))}
      </div>
    </div>
  );
};

class ImageCard {
  constructor(frontImage, backImage, thirdImage, fourthImage, index) {
    this.thirdImage = thirdImage;
    this.fourthImage = fourthImage;
    this.frontImage = frontImage;
    this.backImage = backImage;
    this.index = index;
  }
}

export default PanaromicImageSection;
