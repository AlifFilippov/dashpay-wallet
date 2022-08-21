import React from 'react';
import { Text as TextRN } from 'react-native';

function Text(props) {
  return <TextRN {...props} numberOfLines={1} />;
}

export default Text;
