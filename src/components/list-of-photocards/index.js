import React from 'react';
import { PhotoCard } from '../photo-card';

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => (
  <ul>
    {
      photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
    }
  </ul>
);
