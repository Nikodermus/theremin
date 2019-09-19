import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import '../styles/Note.styl';

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
        <div className="_note">
            <span style={{ color }} className="_note__tone">
                ♬
            </span>
            <button
                className="_note__remove"
                onClick={() => removeNote(modifier)}
                type="button"
            >
                +
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
