/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";
import { transform } from "lodash";
import { reduce } from "lodash";
import { every } from "lodash";
import parse from "./parse";
import type { Props } from "./types";
import type { State } from "./types";

const withStyles = styles => WrappedComponent => {
  class WithStyles extends React.Component<Props, State> {
    constructor(props) {
      super(props);

      // TODO: transformStyles(styles)
      const transformedStyles = transform(
        styles,
        (result, styleId, selector) => {
          const [block, modifier, state] = parse(selector);
          result[selector] = Object.assign(
            { block, styleId },
            modifier && { modifier },
            state && { state }
          );
          return result;
        },
        {}
      );
      this.state = {
        transformedStyles
      };
    }

    static getDerivedStateFromProps(props: Props, state: State): State {
      const { transformedStyles } = state;
      // TODO: groupStyles(transformedStyles)
      // Prevents the component from unnecessary updating.
      const groupedStyles = reduce(
        transformedStyles,
        (result, value, key) => {
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
        {}
      );
      return {
        transformedStyles,
        groupedStyles
      };
    }

    render(): React.Element<any> {
      return (
        <WrappedComponent {...this.props} styles={this.state.groupedStyles} />
      );
    }
  }

  return WithStyles;
};

export default withStyles;
