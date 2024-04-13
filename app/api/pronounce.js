export default function handler(req, res) {
    if (req.method === 'GET') {
        const { word } = req.query;
        if (word != null) {
            res.redirect(`https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`);
        } else {
            res.status(404).json({ error: 'File not found' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
