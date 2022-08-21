// External dependencies
import * as React from 'react';

// Internal dependencies
import { TextInput } from 'react-native';

function Input(props) {
  return (
    <TextInput
      {...props}
      ref={ref => {
        if (props.getRef) {
          props.getRef(ref);
        }
      }}
    />
  );
}

export default Input;
