import { GithubPicker } from 'react-color';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';

import '../styles/AddNote.styl';

const AddNote = ({ addNote, notes }) => {
    const [note, setNote] = useState({
        color: '#75ffff',
        modifier: 0,
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
            <button
                className="_add-note__add"
                disabled={disabled}
                onClick={() => addNote(note)}
                type="button"
            >
                +
            </button>

            <input
                className="_add-note__modifier"
                id="cowbell"
                max="0.5"
                min="-0.5"
                name="modifier"
                onChange={changeNote}
                placeholder="modifier"
                step="0.1"
                type="range"
                value={modifier}
            />
            <div className="_color-picker">
                <span
                    className="_color-picker__swatch"
                    style={{ background: color }}
                />
                <div className="_color-picker__sample">
                    <GithubPicker
                        color={color}
                        onChangeComplete={changeColor}
                        colors={[
                            '#004dcf',
                            '#006b76',
                            '#008b02',
                            '#5300eb',
                            '#75ffff',
                            '#b80000',
                            '#bedadc',
                            '#c1e1c5',
                            '#c4def6',
                            '#db3e00',
                            '#eb9694',
                            '#fad0c3',
                            '#fccb00',
                            '#fef3bd',
                        ]}
                    />
                </div>
            </div>
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
