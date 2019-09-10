/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { render } from 'react-dom'

import Theremin from '../../src'

const Demo = () => {
  return (<Theremin />);
}

export default Demo;

render(<Demo />, document.querySelector('#demo'))
