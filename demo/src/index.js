/* eslint-disable react/jsx-filename-extension */
import { render } from 'react-dom';
import React from 'react';

import Theremin from '../../src';
import './index.styl';

const Demo = () => (
    <div className="th">
        <Theremin className="th__board" />
    </div>
);

render(<Demo />, document.querySelector('#demo'));
