import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { setInRange } from '../utils/state';

import '../styles/PitchVisualizer.styl';

const PitchVisualizer = ({ tones, toneModifier, playing }) => {
    const tonesInRange = setInRange(tones, 10, 50);
    const [tonesAmount, setTonesAmount] = useState(
        Array(tonesInRange).fill('')
    );

    useEffect(() => {
        setTonesAmount(Array(tonesInRange).fill(''));
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
                        key={index}
                    />
                );
            })}
        </div>
    );
};

PitchVisualizer.propTypes = {
    tones: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string,
            modifier: PropTypes.number,
        })
    ).isRequired,
    toneModifier: PropTypes.number.isRequired,
    playing: PropTypes.bool.isRequired,
};

export default PitchVisualizer;
