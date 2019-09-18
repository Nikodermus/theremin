import React, { useState, useEffect } from 'react';
import '../styles/PitchVisualizer.styl';

const PitchVisualizer = ({ tones }) => {
    const [tonesAmount, setTonesAmount] = useState(Array(tones).fill(''));

    useEffect(() => {
        setTonesAmount(Array(tones).fill(''));
    }, [tones]);

    return (
        <div className="_pitch-visualizer">
            {tonesAmount.map((el) => (
                <span className="_pitch-visualizer__tone" key={el} />
            ))}
        </div>
    );
};

export default PitchVisualizer;
