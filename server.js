const express = require('express');
const app = express();

function main() {
    console.log("Hello node js 8080");
}
app.listen(8080, main);

function get_main(requst, answer) {
    answer.sendFile(__dirname + '/index.html');
}
app.get('/', get_main);

function get_stock_list(requst, answer) {
    answer.send('send stock list');
}
app.get('/stock', get_stock_list);