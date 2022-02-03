import React, { Fragment } from "react";
import { gsap } from "gsap";

const PanaromicImageCard = ({
  frontImage,
  backImage,
  thirdImage, 
  fourthImage,
  index,
  animationPhase,
  setAnimationPhase,
  setGallerySectionToDisplay
}) => {
  const initialAnimationDelay = 1000;
  const flipCardHorizontally = () => {
    gsap.to(`.innerCardDiv${index}`, {
      duration: 0.2,
      rotateY: 180,
    });
    if (index === 8 && animationPhase === 1) {
      setTimeout(() => {
        setAnimationPhase(2);
        gsap.to(".cardBack", {
          duration: 0,
          rotateY: 0,
        });
        gsap.to(".horizontalStackedCardPhaseOne", {
          duration: 0,
          display: "none",
        });
        gsap.to(".horizontalStackedCardPhaseTwo", {
          duration: 0,
          zIndex: 0,
          display: "block",
        });
      }, 1000);
    }
  };



  const flyOffAnimation = () => {
    let internalDelay = 200
    let initialDelay = 500
      setTimeout(()=> {
      gsap.to(".innerCardDivFinal8", {
        duration: 0.5,
        transform: 'translate3d(0, -5000px, -5000px)',
        // transform: 'rotateY(180deg)',
        // transform: 'translateZ(-5000px)',
      })
      }, initialDelay)
      setTimeout(()=> {
      gsap.to(".innerCardDivFinal7", {
        duration: 0.5,
transform: 'translate3d(0, -5000px, -5000px)',
      })
      }, initialDelay + internalDelay)
      setTimeout(()=> {
      gsap.to(".innerCardDivFinal6", {
        duration: 0.5,
transform: 'translate3d(0, -5000px, -5000px)',
      })
      }, initialDelay + (internalDelay * 2))
      setTimeout(()=> {
      gsap.to(".innerCardDivFinal5", {
        duration: 0.5,
transform: 'translate3d(0, -5000px, -5000px)',
      })
      }, initialDelay + (internalDelay * 3))
      setTimeout(()=> {
      gsap.to(".innerCardDivFinal4", {
        duration: 0.5,
transform: 'translate3d(0, -5000px, -5000px)',
      })
      }, initialDelay + (internalDelay * 4))
      setTimeout(()=> {
      gsap.to(".innerCardDivFinal3", {
        duration: 0.5,
transform: 'translate3d(0, -5000px, -5000px)',
      })
      }, initialDelay + (internalDelay * 5))
      setTimeout(()=> {
      gsap.to(".innerCardDivFinal2", {
        duration: 0.5,
transform: 'translate3d(0, -5000px, -5000px)',
      })
      }, initialDelay + (internalDelay * 6))
      setTimeout(()=> {
      gsap.to(".innerCardDivFinal1", {
        duration: 0.5,
        transform: 'translate3d(0, -5000px, -5000px)',
      })
      }, initialDelay + (internalDelay * 7))
      setTimeout(()=> {
        gsap.to(".innerCardDivA", {
        duration: 0.0,
        display: 'none',
      })
        setGallerySectionToDisplay(2)
      }, initialDelay + (internalDelay * 8))
  }

const flipToLogo = () => {
  let indexOffset = 9 - index
  gsap.to(`.innerCardDivFinal${indexOffset}`, {
    duration: 0.2,
    transform: "rotateY(-180deg)"
  })
  if(indexOffset === 1){
    setTimeout(()=> {
      flyOffAnimation()
    }, 1500)
  }
}


    const flipAlongXAxis = () => {
    gsap.to(`.innerCardDiv${index}`, {
      duration: 0.2,
      transform: "rotateX(180deg)",
      ease: "bounce.out",
    });
    if(index === 8){
      let dropToCenter = getDropToCenter()
      setTimeout(()=> {
        setAnimationPhase(4)
         gsap.to(".horizontalStackedCardPhaseTwo", {
          duration: 0,
          display: "none"
        });
     gsap.to(".horizontalStackedCardPhaseThree", {
          duration: 0,
          display: "none",
        });
        gsap.to(".innerCardDiv", {
          duration: 0,
          transform: "rotateX(0deg)",
        });
        gsap.to(".horizontalStackedCardPhaseFour", {
          duration: 0,
          transform: `translateY(${dropToCenter}px)`,
          // zIndex: -2,
          display: "inline-block",
        });
      }, 1500)
    }
  };

const getDropToCenter = () => {
let dropToCenter;
let cardStack = document.getElementsByClassName("horizontalCardStack");
    cardStack = cardStack[0];
    const style = getComputedStyle(cardStack);
    let emHeight = style.height.slice(0, style.height.length - 2);
    emHeight = parseInt(emHeight);
    let verticalOffset = cardStack.getBoundingClientRect()
    verticalOffset = verticalOffset.y
    const vh = Math.max(document.documentElement.clientHeight);
     dropToCenter = ((vh - verticalOffset * 2 - emHeight) / 2)
     return dropToCenter
}
  

  const jiggleAnimation = () => {
    let dropToCenter = getDropToCenter()
    gsap.to(`.horizontalStackedCard${index}`, {
      duration: 0.5,
      transform: `translateY(${dropToCenter}px)`,
      ease: "bounce.out",
    });
    if(index === 8){
      setAnimationPhase(3)
    }
  };

  let delay;
  if (index === 1) {
    delay = initialAnimationDelay;
  } else {
    delay = initialAnimationDelay + index * 200;
  }
  if (animationPhase === 1) {
    setTimeout(() => {
      flipCardHorizontally();
    }, delay);
  }
  if (animationPhase === 2) {
    setTimeout(() => {
      jiggleAnimation();
    }, delay);
  }
if (animationPhase === 3) {
    setTimeout(() => {
      flipAlongXAxis()
    }, delay);
  }
  if(animationPhase === 4){
  setTimeout(() => {
        flipToLogo()
      }, delay);
  }



  const styles = {
    phaseTwo: {
      transform: "rotateY(0deg)",
      transition: "transform 0.0s",
    },
  };

  return animationPhaseOneContent(
    frontImage,
    backImage,
    thirdImage,
    fourthImage,
    animationPhase,
    styles,
    index
  );
};

const animationPhaseOneContent = (
  frontImage,
  backImage,
  thirdImage,
  fourthImage,
  animationPhase,
  styles,
  index
) => {
  return (
    <Fragment>
      <div className="horizontalStackedCard horizontalStackedCardPhaseOne">
        <div
          className={`innerCardDiv innerCardDiv${index}`}
          style={animationPhase === 2 ? styles.phaseTwo : {}}
        >
          <div className="cardFront">
            <img className="cardImage" src={frontImage} alt="front of card" />
          </div>
          <div className="cardBack">
            <img className="cardImage" src={backImage} alt="back of card" />
          </div>
        </div>
      </div>
      <div
        className={`horizontalStackedCard horizontalStackedCardPhaseTwo horizontalStackedCard${index}`}
      >
        <div
          className={`innerCardDiv innerCardDiv${index}`}
          style={animationPhase === 2 ? styles.phaseTwo : {}}
        >
          <div className="cardBackPhaseTwo">
            <img className="cardImage" src={backImage} alt="back of card" />
          </div>
          <div className="cardBackPhaseThree">
            <img className="cardImage" src={thirdImage} alt="back of card" style={{transform: "rotateX(180deg)"}}/>
          </div>
        </div>
      </div>
      <div
        className={`horizontalStackedCard horizontalStackedCardPhaseThree horizontalStackedCardThree${index}`}
      >
        <div
          className={`innerCardDiv innerCardDiv${index}`}
          style={animationPhase === 2 ? styles.phaseTwo : {}}
        >
          <div className="cardFrontLastPhase">
            <img className="cardImage" src={thirdImage} alt="back of card" style={{transform: "rotateX(180deg)"}}/>
          </div>
        </div>
      </div>
       <div
        className={`horizontalStackedCardA horizontalStackedCardPhaseFour horizontalStackedCardFour${index}`}
      >
        <div
          className={`innerCardDivA innerCardDivFinal${index}`}
          style={animationPhase === 2 ? styles.phaseTwo : {}}
        >
          <div className="cardBackPhaseFour">
            <img className="cardImage" src={thirdImage} alt="back of card" />
          </div>
          <div className="cardBackLastPhase">
            <img className="cardImage" src={fourthImage} alt="back of card"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};


export default PanaromicImageCard;
