import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { GithubPicker } from 'react-color';

import '../styles/AddNote.styl';

const AddNote = ({ addNote, notes }) => {
    const [note, setNote] = useState({
        modifier: 0,
        color: '#fff',
    });

    const changeNote = ({ target }) => {
        const { value, name } = target;
        setNote((prevState) => ({ ...prevState, [name]: value }));
    };

    const changeColor = ({ hex }) => {
        setNote((prevState) => ({ ...prevState, color: hex }));
    };

    const { modifier, color } = note;
    const disabled = notes.some(
        (activeNote) => activeNote.modifier === Number(modifier)
    );

    return (
        <div className="_add-note">
            <input
                id="cowbell"
                max="0.5"
                min="-0.5"
                name="modifier"
                onChange={changeNote}
                placeholder="modifier"
                step="0.1"
                type="range"
                value={modifier}
                className="_add-note__modifier"
            />
            <div className="_color-picker">
                <span
                    className="_color-picker__swatch"
                    style={{ background: color }}
                />
                <GithubPicker
                    onChangeComplete={changeColor}
                    color={color}
                    className="_color-picker__sample"
                />
            </div>

            <button
                className="_add-note__add"
                disabled={disabled}
                onClick={() => addNote(note)}
                type="button"
            >
                +
            </button>
        </div>
    );
};

AddNote.propTypes = {
    addNote: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            modifier: PropTypes.number,
        })
    ),
};

export default AddNote;
