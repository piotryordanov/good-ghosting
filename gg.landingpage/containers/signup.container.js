import React, {useState} from 'react';
import axios from 'axios';

import SignupContent from '../components/signup.content';


const initialState = {
  coin: 'USDC',
  interval: 'Weekly',
  pool: 'Safe',
  email: '',
  wallet: '',
  date: '',
  amount: 50,
  eth: 0,
  whyareyousaving: 'vacation',
};

const createNewEntry = (form) => {
  form.date = new Date();
  localStorage.setItem('wallet', form.wallet);
  axios.post('/api/add_entry', form);
};

export default () => {
  const [form, updateForm] = useState(initialState);
  const update = (updates) => {
    const newState = {...form, [updates.key]: updates.value};
    updateForm(newState);
    if (updates.key == 'wallet') {
      createNewEntry(newState);
    }
  };
  const signup = () => createNewEntry(form);
  console.log(form);

  return <SignupContent form={form} update={update} signup={signup} />;
};
