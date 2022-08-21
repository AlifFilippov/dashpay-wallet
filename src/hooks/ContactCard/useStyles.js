/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

function styles() {
  return {
    card: {
      marginBottom: 15,
      backgroundColor: '#fff',
      borderColor: '#fff',
      borderRadius: 6,
      borderStyle: 'solid',
      borderWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    header: {
      backgroundColor: '#fff',
      borderBottomColor: '#fff',
      borderBottomWidth: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginRight: -5,
      marginLeft: -5,
    },
    col: {
      paddingLeft: 5,
      paddingRight: 5,
    },
    body: {
      padding: 12,
      flex: 1,
    },
    underlined: {
      backgroundColor: '#EAEBEC',
      borderColor: '#EAEBEC',
      borderRadius: 5,
      padding: 12,
    },
    footer: {
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    underlinedText: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      color: '#999999',
      fontSize: 16,
    },
    metadata: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      color: '#999999',
      fontSize: 11,
      textAlign: 'center',
    },
  };
}

export default makeStyles(styles);
