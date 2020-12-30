import React from 'react';
import Wrapper from './signup.wrapper';
import ChoiceBox from './choice.box';
import {Icon, Intent} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

const icon = <Icon icon={IconNames.CALENDAR} iconSize={Icon.SIZE_LARGE} intent={Intent.NONE} />;

export default (props) => (
  <Wrapper>
    <div className="font-heading font-bold my-8 text-3xl">
      How often would you like to save?
    </div>
    <div className="flex flex-col md:flex-row justify-center">
      <ChoiceBox
        onClick={() => props.update({key: 'interval', value: 'Weekly'})}
        selected={props.form.interval}
        text="Weekly"
        icon={icon}
      />
      <ChoiceBox
        onClick={() => props.update({key: 'interval', value: 'Monthly'})}
        selected={props.form.interval}
        text="Monthly"
        icon={icon}
      />
    </div>
  </Wrapper>
);
