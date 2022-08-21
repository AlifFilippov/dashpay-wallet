/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

import * as main from './main';

// Registration of the theme should be done through a static method.
// The code below should be refactored.
export default {
  blue: {
    avatarContainerBackgroundColor: '#088BE2',
    avatarContainerBorderColor: '#088BE2',
    avatarIconColor: '#fff',
    avatarTextColor: '#fff',
    avatarTitleColor: '#222',
    btnContainerBackgroundColor: '#088BE2',
    btnTextColor: '#fff',
    cardContainerBackgroundColor: '#fff',
    cardContainerBorderColor: 'rgba(0, 0, 0, 0.125)',
    cardHighlightedBackgroundColor: '#088BE2',
    cardHighlightedBorderColor: '#088BE2',
    cardIconColor: '#fff',
    cardSmallColor: 'rgba(0, 0, 0, 0.50)',
    cardSubtitleColor: 'rgba(0, 0, 0, 0.50)',
    cardTextColor: '#fff',
    cardTitleColor: 'rgba(0, 0, 0, 0.75)',
    containerBackgroundColor: '#fff',
    containerBorderColor: '#fff',
    fieldContainerBackgroundColor: '#fff',
    fieldContainerBorderColor: '#fff',
    fieldIconColor: '#222',
    fieldInputBackgroundColor: '#fff',
    fieldInputBorderColor: '#fff',
    fieldInputColor: '#222',
    fieldSeparatorBackgroundColor: '#ccc',
    fieldSeparatorBorderColor: '#ccc',
    navbarContainerBackgroundColor: '#088BE2',
    navbarContainerBorderColor: '#088BE2',
    navbarContainerBorderWidth: 0,
    navbarContainerHeight: 56,
    navbarIconColor: '#fff',
    navbarIconFontSize: 16,
    navbarIconFontWeight: '500',
    navbarIconLineHeight: 18,
    navbarTextColor: '#fff',
    navbarTextFontSize: 13,
    navbarTextFontWeight: '400',
    navbarTextLineHeight: 15,
    navbarTitleColor: '#fff',
    navbarTitleFontSize: 17,
    navbarTitleFontWeight: '500',
    navbarTitleLineHeight: 19,
    ...main,
  },
};
