import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  recipient: Yup.string()
    .required('The recipient field is required.')
    .length(34, 'The recipient field is required.'),
});

function selector(state, props) {
  const recipient = props.navigation.getParam('recipient', '');

  const initialValues = { recipient };
  const formProps = { validationSchema, initialValues };

  return {
    formProps,
  };
}

export default selector;
