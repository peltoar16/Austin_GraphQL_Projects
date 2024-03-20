const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

// create express app
const app = express();

// cors settings
app.use(cors());

// mongo config
const mongoURI='mongodb+srv://peltoar-db-user:AustinPelto15!@cluster0.pr0lz.mongodb.net/peltoar-db';
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    app.listen(4000, () => {
        console.log("now listening for requests on port 4000");
    });
});

// graphql endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
