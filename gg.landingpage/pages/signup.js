import React from 'react';
import SignupContainer from '../containers/signup.container';
import {Web3ReactProvider} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';


const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};


export default (props) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <SignupContainer />
  </Web3ReactProvider>
);
