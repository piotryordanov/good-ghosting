import React from 'react';
import ChoiceBox from './choice.box';
import Wrapper from './signup.wrapper';

export default (props) => (
  <Wrapper>
    <div className="font-heading font-bold my-8 text-3xl">
          Which pool do you prefer?
    </div>
    <div className="flex flex-row justify-center">
      <ChoiceBox
        onClick={() => props.update({key: 'pool', value: 'Safe'})}
        selected={props.form.pool}
        text="Safe"
        subtext="(0% to 7% APY)"
        svg="aave.svg"
      />
      <ChoiceBox
        onClick={() => props.update({key: 'pool', value: 'Risky'})}
        selected={props.form.pool}
        text="Risky"
        subtext="(0% to 50% APY)"
        svg="yearn.png"
      />
    </div>
  </Wrapper>
);
