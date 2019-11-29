import React from 'react'
import { ListOfCategories } from '../components/list-of-categories'
import { ListOfPhotoCards } from '../container/list-of-photocards'
import { Layout } from '../components/layout'

const HomePage = ({ categoryId }) => (
  <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
)

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
