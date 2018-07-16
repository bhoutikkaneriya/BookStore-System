const express = require ('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema')
const PORT = 7000;
const app = express();

mongoose.connect("mongodb://bhoutik:aeroplane1234@ds231719.mlab.com:31719/graphql")
mongoose.connection.once('open',() => {
    console.log('Connection established')
})

app.use('/graphql',graphqlHTTP({
    // we need to pass scheme into this
        schema, // new ES6 syntax
        graphiql:true
    }))


app.listen(PORT,() => {
    console.log(`We are listening to PORT ${PORT}`)
});