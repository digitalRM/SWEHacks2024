const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/pronounce', (req, res) => {
    console.log(`Received ${req.method} request for ${req.originalUrl}`);
    const { word } = req.query;
    if (word && word.trim() !== '') {
        const mp3Url = `https://api.dictionaryapi.dev/media/pronunciations/en/${word.toLowerCase()}-us.mp3`;
        res.status(200).json({ mp3Url });
    } else {
        res.status(404).json({ error: 'File not found' });
    }
});


app.get('/api/rewrite', (req, res) => {

});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

