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
      borderRadius: 8,
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
      marginRight: -5,
      marginLeft: -5,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    col: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 5,
      paddingRight: 5,
    },
    body: {
      padding: 12,
      flex: 1,
    },
    inner: {
      backgroundColor: '#efefef',
      borderColor: '#efefef',
      borderRadius: 7,
      padding: 12,
    },
    title: {
      color: '#333333',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      textAlign: 'center',
    },
    subtitle: {
      color: '#666666',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '300',
      textAlign: 'center',
    },
    underlinedText: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      color: '#999999',
      fontSize: 16,
    },
    inline: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginRight: 0,
      marginLeft: 0,
    },
    footer: {
      flexDirection: 'row',
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    address: {
      color: '#999999',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textAlign: 'center',
      flex: -1,
    },
    timestamp: {
      color: '#999999',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textAlign: 'center',
    },
    icon: {
      color: '#797979',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textAlign: 'center',
      width: 24,
    },
    text: {
      color: '#797979',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textAlign: 'center',
    },
    divider: {
      alignSelf: 'stretch',
      backgroundColor: '#ddd',
      marginLeft: 7.5,
      marginRight: 7.5,
      width: 1,
    },
  };
}

export default makeStyles(styles);
