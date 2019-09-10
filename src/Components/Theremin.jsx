import PropTypes from 'prop-types';
import React, { useEffect, useRef, useReducer } from 'react';

import '../styles/Theremin.styl';
import { reducer, initialState } from '../utils/state';

const ThereminContext = React.createContext({});

const Theremin = ({ className, ...rest }) => {
    const thRef = useRef(null);
    const [state, setState] = useReducer(reducer, initialState);

    useEffect(() => {
        const AudioApi = window.AudioContext || window.webkitAudioContext;
        setState({ audio: new AudioApi() });
    }, []);

    const onMouseMove = ({ pageX, pageY }) => {
        console.log(pageX, pageY);
    };

    return (
        <ThereminContext.Provider value={state}>
            <div
                {...rest}
                className={`${className} _th-theremin`}
                ref={thRef}
                onMouseMove={onMouseMove}
            />
        </ThereminContext.Provider>
    );
};

Theremin.propTypes = {
    className: PropTypes.string,
};

Theremin.defaultProps = {
    className: '',
};

export { ThereminContext };
export default Theremin;
