const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList,
    GraphQLID, GraphQLInt, GraphQLSchema } = graphql;


// fake data
const fakeBookDatabase = [
    { name: "Book 1", pages: 432, id: 1 },
    { name: "Book 2", pages: 32, id: 2 },
    { name: "Book 3", pages: 532, id: 3 }
]

// book type
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        pages: { type: GraphQLInt }
    })
});



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            description: "get a book by id",
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return fakeBookDatabase.find((item) => { return item.id == args.id });
            }
        },
        books: {
            description: "get all books",
            type: new GraphQLList(BookType),
            resolve: () => fakeBookDatabase 
        }
    }
});

//export querys

module.exports = new GraphQLSchema({
    query: RootQuery
});