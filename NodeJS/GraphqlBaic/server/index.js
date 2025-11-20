const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

async function startServer() {
  const typeDefs = `
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => "Hello from Apollo v4!",
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer();