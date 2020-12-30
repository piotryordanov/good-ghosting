import React from 'react';

import Coins from './signup.content.coin';
import Pool from './signup.content.pool';
import Amount from './signup.content.amount';
import Wallet from './signup.content.wallet';
import ETH from './signup.content.eth';
import Interval from './signup.content.interval';
import WhyAreYouSaving from './signup.content.whyareyousaving';

import Layout from './layout';

export default (props) => (
  <Layout>
    <div className="container pt-0 md:pt-32 pb-8 flex flex-col sm:flex-col md:flex-row">
      <div className="box max-w-2xl m-auto">
        <div className="font-heading font-bold text-4xl mb-4">
          Ready to start saving?
        </div>

        <Coins {...props} />
        <Interval {...props} />
        <Amount {...props} />
        <Pool {...props} />
        <ETH {...props} />
        <WhyAreYouSaving {...props} />
        <Wallet {...props} />
      </div>
    </div>
  </Layout>
);
