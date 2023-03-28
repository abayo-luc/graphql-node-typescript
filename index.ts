import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { readFileSync } from 'fs';
import resolvers from './src/resolvers';

const typeDefs = readFileSync('./src/schema.gql', {
  encoding: 'utf-8',
});

/**
 * @description The startApolloServer function creates a new ApolloServer instance with the typeDefs and resolvers defined above.
 * It then starts the server and creates a new express app.
 */
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });
  const PORT = process.env.PORT || 3000;
  await new Promise<void>((resolve) =>
    app.listen({ port: PORT }, resolve)
  );
  console.log(
    `Server listening on http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer();
