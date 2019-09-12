import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Note = ({ removeNote, modifier, color, audio, volume, toneModifier }) => {
    const [oscillator, setOscillator] = useState(null);

    useEffect(() => {
        // component did mount like
        const newOscillator = audio.createOscillator();
        newOscillator.frequency.value = 440 * toneModifier;
        newOscillator.connect(volume);
        newOscillator.start();

        setOscillator(newOscillator);

        // component will unmount like
        return () => {
            newOscillator.disconnect(volume);
        };
    }, []);

    useEffect(() => {
        if (!oscillator) return;

        oscillator.frequency.setValueAtTime(
            600 * toneModifier + modifier,
            audio.currentTime
        );
    }, [toneModifier]);

    return (
        <div>
            <p>
                {modifier} {color}
            </p>
            <button type="button" onClick={() => removeNote(modifier)}>
                -
            </button>
        </div>
    );
};

Note.propTypes = {
    audio: PropTypes.instanceOf(
        window.AudioContext || window.webkitAudioContext
    ).isRequired,
    color: PropTypes.string.isRequired,
    modifier: PropTypes.number.isRequired,
    removeNote: PropTypes.func.isRequired,
    volume: PropTypes.instanceOf(GainNode).isRequired,
};

export default Note;
