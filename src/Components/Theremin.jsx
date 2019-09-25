import PropTypes from 'prop-types';
import React, { useEffect, useRef, useReducer } from 'react';

import { reducer, initialState } from '../utils/state';

const Theremin = () => {
    const thRef = useRef(null);
    const [state, setState] = useReducer(reducer, initialState);

    useEffect(() => {
        // component did mount like
    }, []);

    useEffect(() => {}, [state.playing]);

    useEffect(() => {}, [state.volumeModifier, state.toneModifier]);

    const onMouseMove = ({ pageX, pageY }) => {};

    return (
        <div
            className="_th-theremin"
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            onMouseMove={onMouseMove}
            ref={thRef}
        />
    );
};

Theremin.propTypes = {};

Theremin.defaultProps = {};

export default Theremin;
