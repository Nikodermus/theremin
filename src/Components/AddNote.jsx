import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

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
        <Fragment>
            <label htmlFor="modifier">Modifier</label>
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
            />
            <label htmlFor="color">Color</label>
            <BlockPicker onChangeComplete={changeColor} color={color} />
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
