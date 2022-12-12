import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers/index.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const server = new GraphQLServer ({
    typeDefs : path.join(__dirname, "graphql/schema.graphql"),
    resolvers
})



