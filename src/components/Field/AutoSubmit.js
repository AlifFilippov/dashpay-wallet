// @flow
import * as React from 'react';
import { debounce, isEqual } from 'lodash';
import connect from './connect';

class AutoSubmit extends React.Component<any> {
  static defaultProps = {
    debounceTimeout: 300,
  };

  constructor(props) {
    super(props);
    const { debounceTimeout } = this.props;
    (this: any).submitForm = debounce(
      this.submitForm.bind(this),
      debounceTimeout,
    );
  }

  componentDidUpdate(prevProps) {
    const { form } = this.props;
    const { values: prevValues } = prevProps.form;
    const { values: nextValues } = form;
    if (!isEqual(prevValues, nextValues)) {
      this.submitForm(prevValues, nextValues);
    }
  }

  submitForm(prevValues, nextValues) {
    const { form, onSubmit } = this.props;
    form.submitForm();
    if (onSubmit) {
      onSubmit(prevValues, nextValues);
    }
  }

  render(): React.Element<any> {
    return null;
  }
}

export default connect(AutoSubmit);
