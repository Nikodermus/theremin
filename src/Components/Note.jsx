import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Note = ({ removeNote, modifier, color, audio, volume }) => {
    useEffect(() => {
        // component did mount like
        const newOscillator = audio.createOscillator();
        newOscillator.frequency.value = 440 * modifier;
        newOscillator.connect(volume);
        newOscillator.start();

        // component will unmount like
        return () => {
            newOscillator.disconnect(volume);
        };
    }, []);

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
