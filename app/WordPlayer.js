"use client"
import { useState } from 'react';

function WordPlayer({ word }) {
    const [audioUrl, setAudioUrl] = useState('');

    const playAudio = async () => {
        try {
            console.log("Clicked");
            const response = await fetch(`http://localhost:3001/api/pronounce?word=${encodeURIComponent(word)}`);
            if (response.ok) {
                const data = await response.json();
                setAudioUrl(data.mp3Url);
                const audio = new Audio(data.mp3Url);
                audio.play();
            } else {
                throw new Error('Failed to fetch MP3');
            }
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    };

    return (
        <div onClick={playAudio} style={{ cursor: 'pointer' }}>
            {word}
            {audioUrl && <p>Now playing: {word}</p>}
        </div>
    );
}

export default WordPlayer;
