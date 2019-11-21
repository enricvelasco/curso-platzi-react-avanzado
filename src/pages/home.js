import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/list-of-categories'
import { ListOfPhotoCards } from '../container/list-of-photocards'

export const Home = ({ categoryId }) => (
  <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Fragment>
)
