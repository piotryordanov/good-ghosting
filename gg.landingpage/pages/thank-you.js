import React, {useState} from 'react';
import axios from 'axios';
import Link from 'next/link';

import {AnchorButton, Button, Classes, Dialog, Intent, Tooltip} from '@blueprintjs/core';


import Layout from '../components/layout';
import Email from '../components/signup.content.email';

const updateEmail = (email) => {
  const wallet = localStorage.getItem('wallet');
  axios.post('/api/add_email', {wallet: wallet, email: email})
      .then((response) => localStorage.clear());
};

export default (props) => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <Layout>
      <div className="container pt-0 md:pt-32 pb-8 flex flex-col sm:flex-col md:flex-row">
        <div className="box max-w-2xl m-auto">
          <div id="howitworks" className="container flex flex-col text-lg">
            <div className="font-heading font-semibold mb-8 text-3xl">
                Oopsy... We are not live yet!
            </div>
            <div>
              Thank you so much for taking the time to fill in the information!
              We would love to have you on board ASAP.
            </div>
            <br />
            <div>
              However our development team is working hard to craft a robust
              smart contract. We would like to invite to signup by email to be
              informed when we released the Beta version of the contract.
            </div>
            <Email
              update={(email) => {
                toggleOpen(true);
                updateEmail(email);
              }}
            />
            <Dialog
              icon="confirm"
              onClose={() => location.replace('/')}
              title="Thank you for signing up"
              autoFocus={true}
              canEscapeKeyClose={true}
              canOutsideClickClose={true}
              enforceFocus={true}
              isOpen={isOpen}
              usePortal={true}
            >
              <div className={Classes.DIALOG_BODY}>
                <p className="font-paragraph">
                  Thank you so much for your interested in Good Ghosting.
                  <br />
                  We have saved your email, and will contact you soon!
                </p>
              </div>
              <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                  <AnchorButton intent={Intent.PRIMARY} href="/">
                    Done
                  </AnchorButton>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </Layout>
  );
};
