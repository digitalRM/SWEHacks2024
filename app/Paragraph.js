import WordPlayer from "./WordPlayer";
const Paragraph = ({ text }) => {
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
        </div>
    );
};

export default Paragraph;
