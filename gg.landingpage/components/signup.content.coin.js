import React from 'react';
import ChoiceBox from './choice.box';
import Wrapper from './signup.wrapper';

export default (props) => (
  <Wrapper>
    <div className="font-heading font-bold my-8 text-3xl">
          Which currency will you deposit?
    </div>
    <div className="flex flex-col md:flex-row justify-center">
      <ChoiceBox
        onClick={() => props.update({key: 'coin', value: 'USDC'})}
        selected={props.form.coin}
        text="USDC"
      />
      <ChoiceBox
        onClick={() => props.update({key: 'coin', value: 'DAI'})}
        selected={props.form.coin}
        text="DAI"
      />
    </div>
  </Wrapper>
);
