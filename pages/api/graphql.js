// pages/api/upload.js
import { ApolloServer } from '@apollo/server';
import resolvers from '../graphql/resolvers';
import typeDefs from '../graphql/schema';
import Cors from "micro-cors"

import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

const cors = Cors()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

const handler = startServerAndCreateNextHandler(apolloServer, {
    context: async (req, res) => ({ req, res }),
  })

export default cors(handler);