const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

//handlebars 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

//handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes 
app.use(routes);

//add css stylesheet to app
app.use(express.static(path.join(__dirname, 'public')));


//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
