import React from 'react';
import { PhotoCardWithQuery } from '../container/photo-card-with-query'

export const Detail = ({ detailId }) => (
  <PhotoCardWithQuery id={detailId} />
);
