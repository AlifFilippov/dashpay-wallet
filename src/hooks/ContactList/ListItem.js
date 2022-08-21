/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';

// Internal dependencies
import ContactCard from 'hooks/ContactCard';

const ListItem = React.memo(props => <ContactCard {...props} />);

export default ListItem;
