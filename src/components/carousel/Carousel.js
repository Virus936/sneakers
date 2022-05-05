import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Product1 from '../../icons/image-product-1.jpg';
import Product2 from '../../icons/image-product-2.jpg';
import Product3 from '../../icons/image-product-3.jpg';
import Product4 from '../../icons/image-product-4.jpg';
import { ReactComponent as LeftArrow } from '../../icons/icon-previous.svg';
import { ReactComponent as RightArrow } from '../../icons/icon-next.svg';

const pictures = [Product1, Product2, Product3, Product4];

function Carouselle() {
  return (
    <Car
      useKeyboardArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      dynamicHeight={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label}>
            <LeftArrow />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} title={label}>
            <RightArrow />
          </button>
        )
      }
    >
      {pictures.map((pic) => {
        return (
          <div className="img">
            <img src={pic} alt="" />
          </div>
        );
      })}
    </Car>
  );
}

const Car = styled(Carousel)`
  button {
    position: absolute;
    z-index: 98;
    width: 3em;
    aspect-ratio: 1;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: white;
    border-radius: 50%;
    &:nth-of-type(1) {
      left: 20px;
    }
    &:nth-of-type(2) {
      right: 20px;
    }
  }

  .img {
    display: flex;
    align-items: flex-start;
    width: 100%;
    aspect-ratio: 9/7;
  }
`;

export default Carouselle;
