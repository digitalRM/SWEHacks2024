const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');

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

const publicDir = path.resolve("public");
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir, { recursive: true });
}

app.use('/audio', express.static('public'));
app.post('/api/tts', async (req, res) => {
    
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'No text provided' });
    }
  
    const speechFile = path.resolve("public", `${Date.now()}.mp3`);
  
    try {
      const response = await openai.audio.speech.create({
        model: "tts-1",
        voice: "nova",
        input: text,
      });
  
      const buffer = Buffer.from(await response.arrayBuffer());
      await fs.promises.writeFile(speechFile, buffer);
      const audioUrl = `${req.protocol}://${req.get('host')}/audio/${path.basename(speechFile)}`;
      res.json({ audioUrl });
    } catch (error) {
      console.error('Failed to generate speech:', error);
      res.status(500).json({ error: 'Failed to generate speech' });
    }
  });


app.post('/api/rewrite', async (req, res) => {
    const { text, particles } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'No text provided for rewriting.' });
    }

    const letters = `${particles[0]===true?"s, ":""}${particles[1]===true?"r, ":""}${particles[2]===true?"th, ":""}${particles[3]===true?"z":""}`

    try {
        
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: `Rewrite this paragraph to contain more words containing the phonemes ${letters} without changing the context of the story while making it readable at an elementary level. Paragraph: ${text}` }],
            model: "gpt-4-turbo",
        });
        
        //console.log(completion.choices);
        const rewrittenText = completion.choices[0].message.content.trim();

        res.status(200).json({ rewritten: rewrittenText, letters: letters });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: 'Failed to rewrite text due to server error.' });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

