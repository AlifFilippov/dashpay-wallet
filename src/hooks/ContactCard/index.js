/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';

// Internal dependencies
import ContactRequestAccepted from './ContactRequestAccepted';
import ContactRequestReceived from './ContactRequestReceived';
import ContactRequestRejected from './ContactRequestRejected';
import ContactRequestSent from './ContactRequestSent';

type Props = {
  status: string,
  type: string,
};

function ContactCard({ status, type, ...rest }: Props) {
  if (status === 'ACCEPTED') {
    return <ContactRequestAccepted {...rest} />;
  }

  if (status === 'REJECTED') {
    return <ContactRequestRejected {...rest} />;
  }

  if (status === 'PENDING' && type === 'RECEIVED') {
    return <ContactRequestReceived {...rest} />;
  }

  if (status === 'PENDING' && type === 'SENT') {
    return <ContactRequestSent {...rest} />;
  }

  return null;
}

export default ContactCard;
