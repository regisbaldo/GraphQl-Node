const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const fakeBook = require('./schema/fakeBook')
//create app
const app = express()

// route /graphql
// all queries will go there
app.use('/graphql', graphqlHTTP({
    fakeBook,
    graphiql: true
}))

// listening to port 3000
app.listen('3000', () =>{
    console.log('listening  on port 3000');
})