"use client"
import { useState } from 'react';
import WordPlayer from "./WordPlayer";
import axios from 'axios';

const Paragraph = ({ text }) => {
    const [playing, setPlaying] = useState(false);

    const handleTTS = async () => {
        if (!text) {
            console.log("No text provided");
            return; 
        }
        
        setPlaying(true); 
        try {
            const response = await axios.post('http://localhost:3001/api/tts', { text });
            if (response.data && response.data.audioUrl) {
                const audio = new Audio(response.data.audioUrl);
                audio.play();
                audio.onended = () => setPlaying(false);
            } else {
                throw new Error('Audio URL not found');
            }
        } catch (error) {
            console.error('Error playing audio:', error);
            setPlaying(false);
        }
    };

    const renderText = () => {
        return text.split(' ').map((word, index) => {
            if (word.includes('r') || word.includes('R')) {
                return <WordPlayer key={index} word={word} />;
            } else {
                return <div style={{"display":"inline"}} key={index}>{word} </div>;
            }
        });
    };

    return (
        <div>
            {renderText()}
            <button onClick={handleTTS} disabled={playing} style={{"display":"block", "backgroundColor":"yellow"}}>
                {playing ? "Playing..." : "Read Aloud"}
            </button>
        </div>
    );
};

export default Paragraph;
