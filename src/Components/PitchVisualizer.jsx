import React, { useState, useEffect } from 'react';

import '../styles/PitchVisualizer.styl';

const PitchVisualizer = ({ tones, toneModifier, playing }) => {
    const [tonesAmount, setTonesAmount] = useState(Array(tones).fill(''));

    useEffect(() => {
        setTonesAmount(Array(tones).fill(''));
    }, [tones]);

    return (
        <div className="_pitch-visualizer">
            {tonesAmount.map((el, index) => {
                const visible = (toneModifier - 1.5) * tones;

                return (
                    <span
                        className={`_pitch-visualizer__tone ${
                            index <= visible && playing
                                ? '_pitch-visualizer__tone--active'
                                : ''
                        }`}
                        key={el}
                    />
                );
            })}
        </div>
    );
};

export default PitchVisualizer;
