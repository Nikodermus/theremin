import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const AddNote = ({ addNote, notes }) => {
    const [note, setNote] = useState({
        modifier: 1,
        color: '#fff',
    });

    const changeNote = ({ target }) => {
        const { value, name } = target;
        setNote((prevState) => ({ ...prevState, [name]: value }));
    };

    const { modifier, color } = note;
    const disabled = notes.some(
        (activeNote) => activeNote.modifier === Number(modifier)
    );

    return (
        <Fragment>
            <label htmlFor="modifier">Modifier</label>
            <input
                id="cowbell"
                max="1.5"
                min="0.5"
                name="modifier"
                onChange={changeNote}
                placeholder="modifier"
                step="0.1"
                type="range"
                value={modifier}
            />
            <label htmlFor="color">Color</label>
            <input
                name="color"
                onChange={changeNote}
                placeholder="color"
                type="text"
                value={color}
            />
            <button
                disabled={disabled}
                onClick={() => addNote(note)}
                type="button"
            >
                Add
            </button>
        </Fragment>
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
