import { animated } from "react-spring";
import camera from "../../assets/cameraProductCard/cameraTransparentBackground.png";
import cameraTwo from "../../assets/cameraProductCard/cameraTwoTransparentBackground.png";
import cameraThree from "../../assets/cameraProductCard/cameraThreeTransparentBackground.png";
import cameraFour from "../../assets/cameraProductCard/cameraFourTransparentBackground.png";
import cameraFive from "../../assets/cameraProductCard/cameraFiveTransparentBackground.png";

export class CameraCardImage {
  constructor(image, index) {
    this.image = image;
    this.key = index;
  }
}

export const CameraCardImageArray = [
  new CameraCardImage(camera, 1),
  new CameraCardImage(cameraTwo, 2),
  new CameraCardImage(cameraThree, 3),
  new CameraCardImage(cameraFour, 4),
  new CameraCardImage(cameraFive, 5),
];

const styles = {
  //   transform: "translate3d(-100px, -20px, 0px) scale(1.2)",
  border: "4px solid red",
};
export const cameraImageArrayAsComponents = [
  ({ style, key, isOpen, isInitialRender }) => (
    <animated.img
      src={camera}
      alt="Camera Gear"
      className={
        isOpen && isInitialRender
          ? "currentCameraCardImageIsOpen test"
          : "currentCameraCardImage"
      }
      style={isOpen ? { ...style, styles } : { ...style }}
      key={key}
    />
  ),
  ({ style, key, isOpen, isInitialRender }) => (
    <animated.img
      src={cameraTwo}
      alt="Camera Gear"
      className={
        isOpen ? "currentCameraCardImageIsOpen" : "currentCameraCardImage"
      }
      style={{ ...style }}
      key={key}
    />
  ),
  ({ style, key, isOpen, isInitialRender }) => (
    <animated.img
      src={cameraThree}
      alt="Camera Gear"
      className={
        isOpen && !isInitialRender
          ? "currentCameraCardImageIsOpen"
          : "currentCameraCardImage"
      }
      style={{ ...style }}
      key={key}
    />
  ),
  ({ style, key, isOpen, isInitialRender }) => (
    <animated.img
      src={cameraFour}
      alt="Camera Gear"
      className={
        isOpen ? "currentCameraCardImageIsOpen" : "currentCameraCardImage"
      }
      style={{ ...style }}
      key={key}
    />
  ),
  ({ style, key, isOpen, isInitialRender }) => (
    <animated.img
      src={cameraFive}
      alt="Camera Gear"
      className={
        isOpen ? "currentCameraCardImageIsOpen" : "currentCameraCardImage"
      }
      style={{ ...style }}
      key={key}
    />
  ),
];
