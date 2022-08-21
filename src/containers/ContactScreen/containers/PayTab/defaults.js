// @flow

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  recipient: Yup.string().required('The recipient field is required.'),
});

export default {
  validationSchema,
  initialValues: {
    recipient: '',
  },
};
