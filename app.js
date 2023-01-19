const path = require('path');
const express = require('express');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
    // app.use(express.static(path.join(__dirname, 'public')));
});
app.get('/contacts', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'contacts.html'));
    res.render('contacts', {text: 'This is contacts page text added dynamicly', pagetitle: 'sumting sumting'});
});

app.get('/home', (req, res) => {
    res.render('home', {text: 'This is home page text added dynamicly', pagetitle: 'HOME HOME HOME'});
    // app.use(express.static(path.join(__dirname, 'public')));
});
app.get('/api/restaurants', (req, res) => {
    res.send({ name: "Martynas restaurant"}) /// JSON api bakcendinis
})

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))