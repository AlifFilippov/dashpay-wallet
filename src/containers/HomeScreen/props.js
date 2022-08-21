/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export default {
  elementId: '__logo:origin__',
  routeName: 'HomeScreen',
  routeParams: {
    animations: {
      push: {
        waitForRender: true,
        content: {
          alpha: {
            from: 0, // Mandatory, initial value
            to: 1, // Mandatory, end value
            duration: 150, // Default value is 300 ms
            startDelay: 0, // Default value is 0
            interpolation: 'decelerate' // Optional
          }
        }
      }
    },
    customTransition: {
      animations: [
        {
          type: 'sharedElement',
          fromId: '__logo:origin__',
          toId: '__logo:destination__',
          startDelay: 0,
          duration: 1
        }
      ]
    }
  }
};
