import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { useNearScreen } from '../../hooks/useNearSceen'
import { Article, ImageWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/toggle-like-mutation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE}) => {
  const [show, element] = useNearScreen();
  //a Article se le poone una altura minima pq si no lo pone a 0 de salida y lo detecta como que lo está mostrando en el viewport
  return (
    <Article ref={element}>
      {
        show &&
          <Fragment>
            <Link to={`/detail/${id}`}>
              <ImageWrapper>
                <Img src={src} />
              </ImageWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToggleLikeMutation>
          </Fragment>
      }
    </Article>
  );
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propsValue = props[propName]

    if (propsValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propsValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
