import { gql } from 'apollo-server';

const typeDefs = gql`
  type Content {
    id: ID!
    title: String!
    image_url: String!
    description: String!
    likes: Int!
    created_at: String!
    updated_at: String!
  }

  type InputContent {
    id: ID!
    title: String!
    image_url: String!
    description: String!
  }

  type Query {
    contents: [Content]!
  }

  type Mutation {
    addContent(
      id: ID!
      title: String!
      image_url: String!
      description: String!
    ): Content!
    addLike(id: ID!): Content!
  }
`;

export default typeDefs;
