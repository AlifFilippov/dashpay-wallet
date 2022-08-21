/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as yup from "yup";

export default {
  mapPropsToValues: props => ({
    selected: []
  }),
  validateOnChange: true,
  validationSchema: yup.object().shape({
    selected: yup.array().min(1, "Please select photos")
  }),
  handleSubmit: (values, props) => {
    // const { selected } = values;
    // props.onSubmit(selected);
  }
};
