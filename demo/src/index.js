/* eslint-disable react/jsx-filename-extension */
import { render } from 'react-dom';
import React, { Fragment } from 'react';

import Theremin from '../../src';
import './styles/index.styl';

const Demo = () => {
    return (
        <Fragment>
            <Theremin />

            <a
                className="watermark"
                href="https://github.com/Nikodermus/"
                rel="noopener noreferrer"
                target="_blank"
            >
                @nikodermus
            </a>
        </Fragment>
    );
};

render(<Demo />, document.querySelector('#demo'));
