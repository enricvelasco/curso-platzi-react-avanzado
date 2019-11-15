import React from 'react';
import { PhotoCard } from '../photo-card';

export const ListOfPhotoCards = () => (
  <ul>
    {
      [1, 2, 3].map(card => <li id={card}><PhotoCard /></li>)
    }
  </ul>
);
