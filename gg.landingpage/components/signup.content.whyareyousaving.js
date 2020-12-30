import React from 'react';
import ChoiceBox from './choice.box';
import Wrapper from './signup.wrapper';
import {Icon, Intent} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';


const choices = [
  {
    text: 'vacation',
    icon: IconNames.AIRPLANE,
  },
  {
    text: 'education',
    icon: IconNames.LEARNING,
  },
  {
    text: 'mortgage',
    icon: IconNames.HOME,
  },
  {
    text: 'for a rainy day',
    icon: IconNames.CALCULATOR,
  },
  {
    text: 'Would rather not say',
    icon: IconNames.BAN_CIRCLE,
  },
  {
    text: 'I do not know',
    icon: IconNames.HELP,
  },
  {
    text: 'other',
    icon: IconNames.NINJA,
  },
];


export default (props) => {
  const items = choices.map((entry) => (
    <ChoiceBox
      onClick={() => props.update({key: 'whyareyousaving', value: entry.text})}
      selected={props.form.whyareyousaving}
      text={entry.text}
      key={entry.text}
      icon={<Icon icon={entry.icon} iconSize={Icon.SIZE_LARGE} intent={Intent.NONE} />}
    />
  ));
  return (
    <Wrapper>
      <div className="font-heading font-bold my-8 text-3xl">
      Why are you saving?
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {items}
      </div>
    </Wrapper>
  );
};
