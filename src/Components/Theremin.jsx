import PropTypes from 'prop-types';
import React, { useEffect, useRef, useReducer, Fragment } from 'react';

import { reducer, initialState } from '../utils/state';
import AddNote from './AddNote';
import Note from './Note';
import PitchVisualizer from './PitchVisualizer';

import '../styles/Theremin.styl';

const Theremin = ({ className, ...rest }) => {
    const thRef = useRef(null);
    const [state, setState] = useReducer(reducer, initialState);

    useEffect(() => {
        const AudioApi = window.AudioContext || window.webkitAudioContext;
        const audio = new AudioApi();
        const volume = audio.createGain();

        setState({ audio, volume });
    }, []);

    useEffect(() => {
        const { volume, audio, playing } = state;

        if (!volume || !audio) return;

        if (playing) {
            volume.connect(audio.destination);
        } else {
            volume.disconnect(audio.destination);
        }
    }, [state.playing]);

    useEffect(() => {
        const { volume, volumeModifier } = state;

        if (!volume) return;

        volume.gain.value = 0.5 * volumeModifier;
    }, [state.volumeModifier]);

    const onMouseMove = ({ pageX, pageY }) => {
        const {
            offsetHeight,
            offsetLeft,
            offsetTop,
            offsetWidth,
        } = thRef.current;

        const xInBox = pageX - offsetLeft;
        const yInBox = pageY - offsetTop;

        const xFromCenter = xInBox - offsetWidth / 2;
        const yFromCenter = yInBox - offsetHeight / 2;

        const toneModifier = 1 + xFromCenter / offsetWidth;
        const volumeModifier = 1 + yFromCenter / offsetHeight;

        setState({
            toneModifier,
            volumeModifier,
        });
    };

    const addNote = ({ modifier, color }) => {
        setState({
            notes: [
                ...state.notes,
                {
                    color,
                    modifier: Number(modifier),
                },
            ],
        });
    };

    const removeNote = (modifier) => {
        const { notes } = state;

        setState({
            notes: notes.filter((note) => note.modifier !== modifier),
        });
    };

    const { notes, audio, playing, volume, toneModifier } = state;

    return (
        <Fragment>
            <PitchVisualizer tones={28} />

            <div className="_th-board">
                <span className="_th-volume" />
                <div
                    {...rest}
                    className={`${className} _th-theremin`}
                    onMouseEnter={() => setState({ playing: true })}
                    onMouseLeave={() => setState({ playing: false })}
                    onMouseMove={onMouseMove}
                    ref={thRef}
                />
            </div>

            <AddNote addNote={addNote} notes={notes} />

            <div className="_note__wrapper">
                {notes.map((note) => (
                    <Note
                        {...note}
                        audio={audio}
                        key={note.modifier}
                        playing={playing}
                        removeNote={removeNote}
                        toneModifier={toneModifier}
                        volume={volume}
                    />
                ))}
            </div>
        </Fragment>
    );
};

Theremin.propTypes = {
    className: PropTypes.string,
};

Theremin.defaultProps = {
    className: '',
};

export default Theremin;
