import React, { Fragment, useEffect, useRef, useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Article, Button, ImageWrapper, Img } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  const key = 'like-'+id;
  const [liked, setLiked] = useState(() => {
    try {
      return window.localStorage.getItem(key);
    }catch (e) {
      return false;
    }
  });

  //hace que solo lo muestre cuando están en el el viewport. Ejemplo básico LazyLoading
  //detecta si es compatible el IntersectionObserver, si no hace el import dinamico
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ?
        window.IntersectionObserver
        :
        import('intersection-observer')//import dinamico
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        //console.log(entries);
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.error(e);
    }
  }

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
            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size='32px' />{likes} likes!
            </Button>
          </Fragment>
      }
    </Article>
  );
}
