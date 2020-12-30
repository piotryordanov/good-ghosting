import React from 'react';
import WalletConnect from './wallet.connect';
import Wrapper from './signup.wrapper';

export default (props) => (
  <Wrapper>
    <div className="font-heading font-bold mt-8 text-3xl">
      Connect your wallet and get started
    </div>
    <div className="flex flex-row">
      <WalletConnect wallet={props.form.wallet} update={props.update} />
    </div>
  </Wrapper>
);
