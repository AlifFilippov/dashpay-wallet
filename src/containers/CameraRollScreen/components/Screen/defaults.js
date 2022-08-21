/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  selected: yup
    .array()
    .min(1, 'Please select photos')
});

export default {
  validationSchema,
  initialValues: {
    selected: []
  },
}
