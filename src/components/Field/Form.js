/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { isEqual } from 'lodash';
import { FormProvider } from './context';
import { isFunction } from './utilities';
import { validateYupSchema } from './utilities';
import { yupToFormErrors } from './utilities';
import { setIn } from './utilities';

type Props = {};
type State = {};

const defaultProps = {
  initialErrors: {},
  initialValues: {},
  enableReinitialize: false,
  isInitialValid: false,
  validateOnBlur: true,
  validateOnChange: true
};

const noop = () => {};

// TODO:
// 1. next feature - jump to next input.
// 2. the code should be properly organized and cleaned

class Form extends React.Component<Props, State> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    (this: any).registerField = this.registerField.bind(this);
    (this: any).unregisterField = this.unregisterField.bind(this);
    (this: any).resetForm = this.resetForm.bind(this);
    (this: any).submitForm = this.submitForm.bind(this);
    (this: any).validateForm = this.validateForm.bind(this);
    (this: any).setFieldError = this.setFieldError.bind(this);
    (this: any).setFieldFocused = this.setFieldFocused.bind(this);
    (this: any).setFieldTouched = this.setFieldTouched.bind(this);
    (this: any).setFieldValue = this.setFieldValue.bind(this);
    (this: any).setFieldFocus = this.setFieldFocus.bind(this);
    (this: any).setFormState = this.setFormState.bind(this);
    (this: any).handleSubmit = this.handleSubmit.bind(this);
    (this: any).reinitializeForm = this.reinitializeForm.bind(this);
    (this: any).setValues = this.setValues.bind(this);

    this.state = {
      values: props.initialValues || {},
      errors: {},
      touched: {},
      focused: {},
      isSubmitting: false,
      isValidating: false,
      submitCount: 0,
      state: {}
    };

    this.actions = {
      registerField: this.registerField,
      unregisterField: this.unregisterField,
      resetForm: this.resetForm,
      submitForm: this.submitForm,
      validateForm: this.validateForm,
      setFieldError: this.setFieldError,
      setFieldFocused: this.setFieldFocused,
      setFieldTouched: this.setFieldTouched,
      setFieldValue: this.setFieldValue,
      setFieldFocus: this.setFieldFocus,
      setState: this.setFormState,
      handleSubmit: this.handleSubmit,
      reinitialize: this.reinitializeForm,
      setValues: this.setValues
    };

    this.fields = {};
    this.didMount = false;
  }

  componentDidMount() {
    this.didMount = true;
    this.setFormState(this.props.initialState);
  }

  componentWillUnmount() {
    this.didMount = false;
  }

  componentDidUpdate(prevProps: Props) {
    if (!isEqual(prevProps.initialValues, this.props.initialValues)) {
      this.resetForm(this.props.initialValues);
    }
  }

  registerField(name, Component) {
    this.fields[name] = Component;
  }

  unregisterField(name: string) {
    delete this.fields[name];
  }

  runValidation(values: Object = this.state.values) {
    const { validationSchema } = this.props;
    const schema = isFunction(validationSchema)
      ? validationSchema(this.props)
      : validationSchema;

    this.setState({ isValidating: true });

    return validateYupSchema(values, schema).then(
      (response: any = {}) => {
        const errors = {}; // remove errors
        this.setState({ isValidating: false, errors });
        return true;
      },
      (errors: any = {}) => {
        errors = yupToFormErrors(errors);
        this.setState({ isValidating: false, errors });
        return false;
      }
    );
  }

  setFieldFocus(field: string) {
    if (this.fields[field]) {
      this.fields[field].focus();
    }
  }

  setFieldFocused(field: string, focused: boolean = true) {
    // Set focused field by name
    this.setState(
      prevState => ({
        ...prevState,
        focused: setIn(prevState.focused, field, focused)
      }),
      () => {
        if (this.props.validateOnBlur) {
          this.runValidation(this.state.values);
        }
      }
    );
  }

  setFieldTouched(field: string, touched: boolean = true) {
    // Set touched field by name
    this.setState(
      prevState => ({
        ...prevState,
        touched: setIn(prevState.touched, field, touched)
      }),
      () => {
        if (this.props.validateOnBlur) {
          this.runValidation(this.state.values);
        }
      }
    );
  }

  setFieldValue(field: string, value: any) {
    if (this.didMount) {
      // Set form field by name
      this.setState(
        prevState => ({
          ...prevState,
          values: setIn(prevState.values, field, value)
        }),
        () => {
          if (this.props.validateOnChange) {
            this.runValidation(this.state.values);
          }
        }
      );
    }
  }

  setFieldError(field: string, error: string) {
    // Set form field by name
    this.setState(prevState => ({
      ...prevState,
      errors: setIn(prevState.errors, field, error)
    }));
  }

  setFormState(newState, cb = () => {}) {
    if (this.didMount) {
      const state = {
        ...this.state.state,
        ...newState
      };
      this.setState({ state }, cb);
    }
  }

  validateForm(values: Values) {
    this.setState({ isValidating: true });
    return this.runValidation(values);
  }

  resetForm(nextValues, callback) {
    const { initialValues } = this.props;
    const values = nextValues ? nextValues : initialValues;

    this.setState(
      {
        isSubmitting: false,
        isValidating: false,
        errors: {},
        touched: {},
        error: undefined,
        status: undefined,
        values,
        submitCount: 0,
        state: {}
      },
      callback
    );
  }

  submitForm() {
    this.setState(prevState => ({
      isSubmitting: true,
      isValidating: true,
      submitCount: prevState.submitCount + 1
    }));

    return this.runValidation(this.state.values).then(isValid => {
      if (isValid) {
        this.props.onSubmit(this.state.values, this.actions);
      } else if (this.didMount) {
        this.setState({
          isSubmitting: false,
          isValidating: false
        });
      }
    });
  }

  setValues(values) {
    this.setState({ values }, () => {
      if (this.props.validateOnChange) {
        this.runValidation(values);
      }
    });
  }

  reinitializeForm(values = this.state.values, callback) {
    this.props.onReinitialize(values, this.actions, callback);
  }

  handleSubmit(event: Object) {
    // TODO: stop validation
    this.submitForm();
  }

  render(): React.Element<any> {
    const { children, ...props } = this.props;
    const form = {
      ...props,
      ...this.state,
      ...this.actions
    };
    return (
      <FormProvider value={form}>
        {isFunction(children) ? children(form) : children}
      </FormProvider>
    );
  }
}

export default Form;
