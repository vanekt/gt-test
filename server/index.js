const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const { ApolloServer, gql } = require('apollo-server');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const items = [];
for (let id = 1; id < 10; id++) {
  items.push({
    id,
    title: `Heading ${id}`,
    text: lorem.generateParagraphs(2),
    image: `https://loremflickr.com/640/480?${id}`,
  });
}

const typeDefs = gql`
  type ListItem {
    id: Int
    title: String
    text: String
    image: String
  }

  type Query {
    items: [ListItem]
  }
`;

const resolvers = {
  Query: {
    items: () => items,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
