/* eslint-disable react/jsx-filename-extension */
import { render } from 'react-dom';
import React, { Fragment, useState } from 'react';

import Theremin from '../../src';
import './index.styl';

const DefaultTheremin = () => <Theremin />;

const MinimalTheremin = () => (
    <Theremin
        notes={[{ modifier: 1 }]}
        withAdd={false}
        withNotes={false}
        withPitch={false}
        withVolume={false}
    />
);

const ControlledTheremin = () => <Theremin />;

const theremins = {
    controlled: ControlledTheremin,
    default: DefaultTheremin,
    minimal: MinimalTheremin,
};

const Demo = () => {
    const [active, setActive] = useState('minimal');
    const ActiveTheremin = theremins[active];

    return (
        <Fragment>
            <ActiveTheremin />

            <div className="change-active">
                {Object.keys(theremins).map((el) => (
                    <button
                        className={`change-active__btn ${
                            el === active ? 'change-active__btn--active' : ''
                        }`}
                        type="button"
                        key={el}
                        onClick={() => setActive(el)}
                    >
                        {el}
                    </button>
                ))}
            </div>

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
