import express from "express";
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 5000;

const baseUrl = 'https://dummyjson.com/quotes/';

app.use(cors({ origin: 'http://localhost:3000' }));
app.get('/api/quotes', (_, res) => {
    let randomNumber = Math.floor(Math.random() * 50) + 1;

    try {
        const fetchQuotes = async () => {
            const response = await axios.get(baseUrl + randomNumber);
            res.json(response.data)
        }
        fetchQuotes();
    } catch (err) {
        res.json(err);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
