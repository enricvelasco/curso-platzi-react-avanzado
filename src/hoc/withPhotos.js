import { graphql } from '@apollo/react-hoc'
import { gql } from 'apollo-boost'//permite hacer las queries como si fuera un string

const GET_PHOTOS = gql(`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)

export const withPhotos = graphql(GET_PHOTOS)
