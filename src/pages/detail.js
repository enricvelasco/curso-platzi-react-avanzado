import React from 'react';
import { PhotoCardWithQuery } from '../container/photo-card-with-query'
import { Layout } from '../components/layout'

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
