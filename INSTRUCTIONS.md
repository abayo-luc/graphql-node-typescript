### GETTING STARTED & SETUP
Create `index.ts` file for a Node.js app that uses `TypeScript` and `apollo-server-express` to implement a `GraphQL API`

```ts
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    user:{
      name: String!
      email: String!
      role: String
    }
  }
`;

const resolvers = {
  Query: {
    user: () => ({
      name: "John Doe",
      email:"john@example.com",
      role:"admin"
    }),
  },
};

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => app.listen({ port: 3000 }, resolve));
  console.log(`Server listening on http://localhost:3000${server.graphqlPath}`);
}

startApolloServer();

```

This example defines a simple GraphQL schema with a single query that returns the string "Hello world!". The schema is defined using the gql function from apollo-server-express.

The `resolvers` object defines the implementation of the `hello` query. In this case, it simply returns the string "Hello world!".

The startApolloServer function creates a new ApolloServer instance with the typeDefs and resolvers defined above. It then starts the server and creates a new express app.

The `server.applyMiddleware({ app })` line adds the ApolloServer middleware to the express app.

Finally, the app.listen line starts the express server and listens on port 3000. The console.log line prints a message to the console indicating that the server is running and what the GraphQL API endpoint is.


### RUNNING THE APP
To run this app, you can use the TypeScript compiler to compile the index.ts file into JavaScript, and then run the resulting JavaScript file using Node.js:
```bash
npx tsc index.ts
node index.js 
```

## The Query
```json
query {
  user {
    email
    firstName
    lastName
    role
  }
}
```