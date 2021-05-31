const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const data = require('./data.json');

const PORT = 5000;
const app = express();

const schema = buildSchema(`
  type Card {
    id: String!
    title: String!
    subtitle: String!
    image: String!
  }  
  type Query {
    cards: [Card]
  }
`);

const root = {
  cards: () => data
}

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Referrer-Policy': 'no-referrer'
  });
  next()
});

app.options('*', (req, res) => res.status(200).end());

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

// app.use((err, req, res, next) => {
//   res.status(500).send({ message: 'Problem with server' })
// });

app.listen(PORT, () => console.log(`App listening on port ${PORT}...`))
