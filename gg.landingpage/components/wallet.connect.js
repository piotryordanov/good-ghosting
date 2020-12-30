import React from 'react';
import {InjectedConnector} from '@web3-react/injected-connector';
import {useWeb3React} from '@web3-react/core';
import Link from 'next/link';


const button = (activate, currentConnector) => (
  <button
    className="text-xl font-bold bg-white p-4 rounded shadow-xs border-black border-2"
    onClick={() => {
      activate(currentConnector);
    }}
  >
    Connect your wallet
  </button>
);

const hasWallet = ({signup, wallet}) =>
  <div className="text-center">
    <div className="font-paragraph mb-8 text-base text-gray-800 text-center">
      Your wallet is:
      <br />
      <br />
      {wallet}
    </div>
    <Link href="/thank-you">
      <button
        onClick={signup}
        className="text-xl font-bold bg-white p-4 rounded shadow-xs border-black border-2">
        Sign me up
      </button>
    </Link>
  </div>;

export default (props) => {
  const context = useWeb3React();
  const {account, activate} = context;
  const currentConnector = new InjectedConnector({supportedChainIds: [1, 3, 4, 5, 42]});

  if (props.wallet == '' && account != null) {
    props.update({key: 'wallet', value: account});
  };

  return (
    <div className="mt-8 w-52 m-auto">
      {props.wallet == '' ? button(activate, currentConnector): hasWallet(props)}
    </div>
  );
};
