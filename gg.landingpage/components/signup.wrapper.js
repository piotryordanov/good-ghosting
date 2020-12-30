import React from 'react';

const HR = () => <hr className="mt-16 border-gray-400" />;

export default (props) => (
  <div className="mt-16">
    {props.children}
    <HR/>
  </div>
);
