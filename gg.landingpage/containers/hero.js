import React from 'react';
import Fade from 'react-reveal/Fade';
import Countdown from './countdown.container';
import BuiltWith from './hero.builtwith';

import Button from '../components/button';

export default () => (
  <div>
    <div className="container pt-0 md:pt-32 pb-8 flex flex-col sm:flex-col md:flex-row">
      <div className="box md:w-1/2 w-full">
        <div className="font-heading font-semibold text-5xl">
          Saving is <div className="inline text-orange-500">fun</div>damental.
        </div>
        <div className="text-3xl">
            Join our pool, hit your goals and get rewarded.
        </div>
        <hr className="mt-8" />
    
        <div className="text-3xl">
          Interest rates of over 7% are possible. The more drop-outs, the higher the returns.
        </div>
      </div>
      <div className="box md:w-1/2 w-full text-center">
        <Countdown
          timeTillDate="08 16 2020 , 6:00 am"
          timeFormat="MM DD YYYY, h:mm a"
        />
        <div>
          <Button>Signup</Button>
        </div>
      </div>
    </div>
    <BuiltWith />
  </div>
);
