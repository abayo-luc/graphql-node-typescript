"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const fs_1 = require("fs");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const typeDefs = (0, fs_1.readFileSync)('./src/graphql/schema.gql', {
    encoding: 'utf-8',
});
/**
 * @description The startApolloServer function creates a new ApolloServer instance with the typeDefs and resolvers defined above.
 * It then starts the server and creates a new express app.
 */
async function startApolloServer() {
    const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers: resolvers_1.default });
    await server.start();
    const app = (0, express_1.default)();
    server.applyMiddleware({ app });
    const PORT = process.env.PORT || 3000;
    await new Promise((resolve) => app.listen({ port: PORT }, resolve));
    console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
}
startApolloServer();
//# sourceMappingURL=index.js.map