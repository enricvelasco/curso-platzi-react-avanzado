import React, { Fragment, useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { ImageWrapper, Img, Button, Article } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  //hace que solo lo muestre cuando están en el el viewport. Ejemplo básico LazyLoading
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      //console.log(entries);
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  //a Article se le poone una altura minima pq si no lo pone a 0 de salida y lo detecta como que lo está mostrando en el viewport
  return (
    <Article ref={element}>
      {
        show &&
          <Fragment>
            <a href={`/detail/${id}`}>
              <ImageWrapper>
                <Img src={src} />
              </ImageWrapper>
            </a>
            <Button>
              <MdFavoriteBorder size='32px' />{likes} likes!
            </Button>
          </Fragment>
      }
    </Article>
  );
}
