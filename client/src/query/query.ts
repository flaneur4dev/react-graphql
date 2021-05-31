import { gql } from '@apollo/client';

export const CARDS = gql`
  query Cards {
    cards {
      id
      title
      subtitle
      image
    }
  }
`
