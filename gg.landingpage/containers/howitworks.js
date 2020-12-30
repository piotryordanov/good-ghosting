import React from 'react';
import Fade from 'react-reveal/Fade';
import howitworks from '../copy/howitworks.json';
import Button from '../components/button';

const items = howitworks.map((entry) => (
  <ul key={entry.title} className="mb-4">
    <li className="font-bold mb-1" key={entry.title}>
      {entry.title}
    </li>
    <li className="mb-1" key={entry.content}>
      {entry.content}
    </li>
  </ul>
));
export default () => (
  <div id="howitworks" className="container flex flex-col sm:flex-col md:flex-row">
    <div className="box md:w-8/12 w-full">

      <div>
       Our groundbreaking “savers take it all” mechanism, gives you the ultimate push to save. The opportunity to get higher interest rates, without risking your principal. If you are motivated  enough to make all deposits, you will earn more than you would by saving by yourself.   
      </div>

      <p className="text-4xl font-bold mb-4 mt-10 ">
        How it works
      </p>
      {items}
    </div>
    <div className="box md:w-4/12 w-full">
      <div className="text-center">
        <p className="text-2xl font-bold">
          Ready to start earning?
        </p>
        <Button>Signup</Button>
      </div>
    </div>
  </div>
);
