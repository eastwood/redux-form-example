import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {StyledTextbox} from '@nib-components/textbox';
import DateTextbox from '@nib-components/date-textbox';

const renderField = (field) => (
  <div className="input-row">
    <StyledTextbox
      {...field.input}
      valid={field.meta.touched && (field.meta.error === undefined)}
      validated={field.meta.touched}
    />
  </div>
);

const renderDateField = (field) => (
  <div className="input-row">
    <DateTextbox
      {...field.input}
    />
    {field.meta.touched && field.meta.error &&
      <span className="error">{field.meta.error}</span>}
  </div>
);

const normalize = (event) => {
  return event && event.target && event.target.value;
};

const dateValidate = (value) => {
  console.log(value);
  return (value ? undefined : 'Required');
};

class MyForm extends React.Component {

  render() {
    return (
      <form>
        <Field
          name="name"
          validate={dateValidate}
          component={renderField}
        />
        <Field
          name="date"
          validate={dateValidate}
          component={renderDateField}
          normalize={normalize}
        />
      </form>
    );
  }

};

export default reduxForm({
  form: 'form'
})(MyForm);