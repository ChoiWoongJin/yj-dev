import { resolvers } from './databaseResolver';
const { importSchema } = require('graphql-import');
const { ApolloServer } = require('apollo-server');
// importGraphQL : import 하기위한 모듈
// ApolloServer : GraphQL 서버 인스턴스 생성자

// const resolvers = {
//     Query: {
//         ping: () => 'pong'
//     }
// };

const server = new ApolloServer({
    typeDefs: importSchema('schema.graphql'),
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Listening at ${url}`);
});