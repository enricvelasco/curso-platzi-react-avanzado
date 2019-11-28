import React from 'react'
import { FavsWithQuery } from '../container/get-favorites'
import { Layout } from '../components/layout'

export const Favs = () => (
  <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
