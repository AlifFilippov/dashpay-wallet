/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// External dependencies
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  transform, reduce, every, isArray, mergeWith,
} from 'lodash';

// Internal dependencies
import { useTheme } from 'hooks/Theme';
import themes from 'themes';
import parse from './parse';

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
  return objValue;
}

// This is temp solution for no-param-reassign error.
// https://github.com/airbnb/javascript/issues/1342
/* eslint no-param-reassign: "error" */
function makeStyles(componentStyles) {
  const allStyles = {};
  const transformedStyles = {};

  Object.keys(themes).forEach((themeName) => {
    const theme = themes[themeName];
    const styles = componentStyles(theme);
    allStyles[themeName] = StyleSheet.create(styles);
  });

  Object.keys(themes).forEach((themeName) => {
    transformedStyles[themeName] = transform(
      allStyles[themeName],
      (result, styleId, selector) => {
        const [block, modifier, state] = parse(selector);
        result[selector] = Object.assign(
          { block, styleId },
          modifier && { modifier },
          state && { state },
        );
        return result;
      },
      {},
    );
  });

  const useStyles = (props = {}) => {
    const { theme } = useTheme();
    const { styles } = props;
    const [groupedStyles] = useState(() => {
      const tmpStyles = reduce(
        transformedStyles[theme],
        (result, value) => {
          const { block, styleId, ...requredProps } = value;
          const propIsTrue = propKey => props[propKey] === true;
          const hasRequredProps = every(requredProps, propIsTrue);

          if (!hasRequredProps) {
            return result;
          }

          if (!result[block]) {
            result[block] = [];
          }

          result[block].push(styleId);
          return result;
        },
        {},
      );

      if (styles) {
        return mergeWith({}, tmpStyles, styles, customizer);
      }

      return tmpStyles;
    });

    // useEffect(
    //   () => {
    //     const newGroupedStyles = reduce(
    //       transformedStyles[theme],
    //       (result, value) => {
    //         const { block, styleId, ...requredProps } = value;
    //         const propIsTrue = propKey => props[propKey] === true;
    //         const hasRequredProps = every(requredProps, propIsTrue);
    //
    //         if (!hasRequredProps) {
    //           return result;
    //         }
    //
    //         if (!result[block]) {
    //           result[block] = [];
    //         }
    //
    //         result[block].push(styleId);
    //         return result;
    //       },
    //       {},
    //     );
    //     setGroupedStyles(newGroupedStyles);
    //   },
    //   [props.active],
    // );

    return groupedStyles;
  };

  return useStyles;
}

export default makeStyles;
