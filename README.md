## Setup Node/Typescript/GraphQL/Postgres and docker

1. Set up a new Node.js project: You can do this by creating a new folder and running `npm init` to initialize a new package.json file.

2. Install the required packages: To use TypeScript with Node.js, you'll need to install the `typescript` package, along with the `@types/node` package. You'll also need to install the `pg` package to interact with your PostgreSQL database, and the `graphql`, `express`, and `apollo-server-express` packages to implement your GraphQL API. Finally, you'll need the `dotenv` package to manage your environment variables.

3. Set up your TypeScript configuration: Create a `tsconfig.json` file in the root of your project and add the necessary configuration options to use TypeScript with Node.js.

4. Write your GraphQL schema: Define your GraphQL schema using the graphql package. This will define the types and fields that your API will expose.

5. Set up your PostgreSQL database: Install PostgreSQL and create a new database. Then, use the pg package to interact with the database from your Node.js code. This can be done with `docker-compose` configuration.

6. Write your resolvers: Define the resolvers for your GraphQL schema using the graphql package. These resolvers will implement the actual logic for your API.

7. Set up your Express server: Use the `apollo-server-express` package to create an Express server that will handle requests to your GraphQL API.

8. Use Docker to containerize your application: Write a Dockerfile that defines how to build a Docker image of your Node.js application. You can then use docker-compose to start up your application and PostgreSQL database in containers.

## Get Started

To start the containers, you can run docker-compose up in the directory containing the `docker-compose.yml` file. This will start the containers in the foreground, and you can see the output from the containers in the terminal. To start the containers in the background, you can use `docker-compose up -d`.