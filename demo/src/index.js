/* eslint-disable react/jsx-filename-extension */
import { render } from 'react-dom';
import React from 'react';

import Theremin from '../../src';
import './index.styl';

const Demo = () => {
    return <Theremin className="my-theremin" />;
};

render(<Demo />, document.querySelector('#demo'));
