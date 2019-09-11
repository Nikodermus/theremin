import PropTypes from 'prop-types';
import React, { useEffect, useRef, useReducer, Fragment } from 'react';

import '../styles/Theremin.styl';
import { reducer, initialState } from '../utils/state';
import Note from './Note';
import AddNote from './AddNote';

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

    const onMouseMove = ({ pageX, pageY }) => {
        console.log(pageX, pageY, state.playing);
    };

    const addNote = ({ modifier, color }) => {
        setState({
            notes: [
                ...state.notes,
                {
                    modifier,
                    color,
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

    const { notes, audio, playing, volume } = state;

    return (
        <Fragment>
            <div
                {...rest}
                className={`${className} _th-theremin`}
                ref={thRef}
                onMouseMove={onMouseMove}
                onMouseEnter={() => setState({ playing: true })}
                onMouseLeave={() => setState({ playing: false })}
            />

            <AddNote addNote={addNote} notes={notes} />

            {notes.map((note) => (
                <Note
                    {...note}
                    key={note.modifier}
                    removeNote={removeNote}
                    audio={audio}
                    playing={playing}
                    volume={volume}
                />
            ))}
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
