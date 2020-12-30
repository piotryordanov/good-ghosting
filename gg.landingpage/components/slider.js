import React from 'react';
import {Slider} from '@blueprintjs/core';

export default (props) => (
  <Slider
    {...props}
    onChange={(value) => props.onChange(value)}
    value={props.value}
    vertical={false}
  />
)
;
