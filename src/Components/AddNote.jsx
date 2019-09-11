import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const AddNote = ({ addNote, notes }) => {
    const [note, setNote] = useState({
        modifier: 1,
        color: '#fff',
    });

    const changeNote = ({ target }) => {
        const { value, name } = target;
        setNote({ [name]: value });
    };

    const { modifier, color } = note;
    const disabled = notes.some(
        (activeNote) => activeNote.modifier === modifier
    );

    return (
        <Fragment>
            <label htmlFor="modifier">Modifier</label>
            <input
                onChange={changeNote}
                type="text"
                name="modifier"
                value={modifier}
                placeholder="modifier"
            />
            <label htmlFor="color">Color</label>
            <input
                onChange={changeNote}
                type="text"
                name="color"
                value={color}
                placeholder="color"
            />
            <button
                type="button"
                onClick={() => addNote(note)}
                disabled={disabled}
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
            modifier: PropTypes.number,
            color: PropTypes.string.isRequired,
        })
    ),
};

export default AddNote;
