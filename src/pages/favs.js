import React from 'react'
import { FavsWithQuery } from '../container/get-favorites'
import { Layout } from '../components/layout'

export default () => (
  <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
