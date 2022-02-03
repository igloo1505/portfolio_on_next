import React, { useEffect, useState } from "react";
import { animated, useTransition, config } from "react-spring";
import {
  CameraCardImageArray as imageArray,
  cameraImageArrayAsComponents,
} from "./CameraCardImageClass";
import { BsFillHeartFill } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";
const MainCameraCardImage = ({
  index,
  isOpen,
  toggleOpenState,
  isInitialRender,
}) => {
  return (
    <div
      className={isOpen ? "photo-main" : "photo-main"}
      onClick={toggleOpenState}
    >
      <div className={isOpen ? "controls" : "controls"}>
        <i className="material-icons">
          <IoMdShare />
        </i>
        <i className="material-icons">
          <BsFillHeartFill />
        </i>
      </div>
      <ExtractedSubView
        index={index}
        imageArray={imageArray}
        isOpen={isOpen}
        isInitialRender={isInitialRender}
      />
    </div>
  );
};

export default MainCameraCardImage;

const ExtractedSubView = ({ index, isOpen, isInitialRender }) => {
  const [internal, setInternal] = useState(0);
  useEffect(() => {
    setInternal(index);
  }, [index]);

  const transition = useTransition(internal, (item) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    delay: 500,
  });

  return (
    <div className="imageWrapper">
      {transition.map(({ item, key, props }) => {
        const ImageComponent = cameraImageArrayAsComponents[item];
        return (
          <ImageComponent
            key={key}
            style={props}
            isOpen={isOpen}
            isInitialRender={isInitialRender}
          />
        );
      })}
    </div>
  );
};
