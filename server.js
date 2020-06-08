const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = process.env.MONOGODB_URI || 'mongodb+srv://ogi:NijeBitno1@cluster0-gnzzp.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//Data parsing
mongoose.connection.on('connected', () =>  {
	console.log('Mongoose is connected!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(morgan('tiny'));
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`))

