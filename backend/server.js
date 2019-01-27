import express from 'express';
// Mongoose
import mongoose from 'mongoose';
//Cors
import cors from 'cors';
// Imports: GraphQL
import SERVER from './graphql/schema.js';

const app = express();

app.use(cors());
// app.get('/', (req, res) => res.send('Hello world!'));

mongoose.connect('mongodb://localhost/graphqlserver', {useCreateIndex: true, useNewUrlParser: true});
mongoose.set('debug', true);

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
    // we're connected!
});

// Middleware: GraphQL
SERVER.applyMiddleware({
    app: app
});

app.listen(4000, () => console.log('Express server running on port 4000'));
