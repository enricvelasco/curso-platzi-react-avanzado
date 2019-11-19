import React, { Fragment } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearSceen';
import { Article, Button, ImageWrapper, Img } from './styles';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
  const [show, element] = useNearScreen();
  const key = 'like-' + id;
  const [liked, setLiked] = useLocalStorage(key, false);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  //a Article se le poone una altura minima pq si no lo pone a 0 de salida y lo detecta como que lo está mostrando en el viewport
  return (
    <Article ref={element}>
      {
        show &&
          <Fragment>
            <a href={`/?detail=${id}`}>
              <ImageWrapper>
                <Img src={src} />
              </ImageWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' />{likes} likes!
            </Button>
          </Fragment>
      }
    </Article>
  );
}
