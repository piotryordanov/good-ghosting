import React from 'react';

const drawIcon = (props) => {
  if (props.icon) {
    return props.icon;
  } else if (props.svg) {
    return <img src={props.svg} className="w-8 h-8" />;
  }
};

export default (props) => (
  <div onClick={props.onClick}>
    <div
      className={`font-paragraph mr-4 mb-4  p-4 pr-8 rounded shadow-xs bg-white border-2 
        ${props.selected == props.text ? 'border-teal-500 ' : ''}`}
    >
      <div className="cursor-pointer flex flex-row items-center">
        {drawIcon(props)}
        <div className="ml-4 flex flex-col align-middle justify-center">
          <div className="text-xl font-bold">{props.text}</div>
          <div className="text-sm">{props.subtext}</div>
        </div>
      </div>
    </div>
  </div>
);
