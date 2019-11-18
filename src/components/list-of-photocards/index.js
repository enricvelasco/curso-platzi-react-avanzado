import React from 'react';
import { PhotoCard } from '../photo-card';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost'; //permite hacer las queries como si fuera un string

const withPhotos = graphql(gql(`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`))

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => (
  <ul>
    {
      photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
    }
  </ul>
);

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
