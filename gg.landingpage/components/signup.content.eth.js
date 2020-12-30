import React from 'react';
import Slider from './slider';
import Wrapper from './signup.wrapper';

export default (props) => (
  <Wrapper>
    <div className="font-heading font-bold mt-8 text-3xl">
      Add a portion of volatile ETH (%)
    </div>
    <div className="flex flex-row mt-8">
      <Slider
        labelRenderer={(val) => `${val}%`}
        min={0}
        max={30}
        stepSize={5}
        labelStepSize={5}
        value={props.form.eth}
        onChange={(value) =>
          props.update({key: 'eth', value: value})
        }
      />
    </div>
  </Wrapper>
);
