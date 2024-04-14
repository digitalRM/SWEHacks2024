const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: "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"
});

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


app.post('/api/rewrite', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'No text provided for rewriting.' });
    }

    try {
        const r = "r"
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: `Rewrite this paragraph to contain more words containing the letters ${r} without changing the context of the story while making it readable at an elementary level. Paragraph: ${text}` }],
            model: "gpt-4-turbo",
        });
        
        //console.log(completion.choices);
        const rewrittenText = completion.choices[0].message.content.trim();

        res.status(200).json({ rewritten: rewrittenText });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: 'Failed to rewrite text due to server error.' });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

