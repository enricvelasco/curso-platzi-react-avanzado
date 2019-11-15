import React from 'react';
import { PhotoCard } from '../photo-card';

export const ListOfPhotoCards = () => (
  <ul>
    {
      [1, 2, 3, 4, 5, 6, 7].map(() => <PhotoCard />)
    }
  </ul>
);
