import { graphql } from '@apollo/react-hoc'
import { gql } from 'apollo-boost'//permite hacer las queries como si fuera un string

export const withPhotos = graphql(gql(`
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
`))
