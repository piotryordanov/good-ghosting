import React from 'react';
import Slider from './slider';
import Wrapper from './signup.wrapper';

export default (props) => (
  <Wrapper>
    <div className="font-heading font-bold mt-8 text-3xl">
      How much will you save per time?
    </div>
    <div className="flex flex-row mt-8">
      <Slider
        labelRenderer={(val) => `${val}$`}
        min={20}
        max={500}
        stepSize={5}
        labelStepSize={50}
        value={props.form.amount}
        onChange={(value) => props.update({key: 'amount', value: value})}
      />
    </div>
  </Wrapper>
);
