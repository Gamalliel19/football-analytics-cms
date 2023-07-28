import { gql } from "apollo-server"

const typeDefs = gql`
  type ArtPiece {
    id: ID!
    image_url: String!
    description: String!
  }

  type Query {
    artPieces: [ArtPiece]!
  }

  input ArtPieceInput {
    id: ID!
    image_url: String!
    description: String!
  }

  type Mutation {
    addArtPiece(id:ID!, image_url:String!, description:String!): ArtPiece!
  }
`;

export default typeDefs