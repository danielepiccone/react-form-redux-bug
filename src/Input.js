import React from 'react';
import { FormField } from 'react-form';
import { connect } from 'react-redux';


function Input(props) {
  return (
    <FormField field='foo'>
      {formApi => {
        const value = formApi.getValue() || 0;
        const onClick = () => formApi.setValue(value + 1);

        return (
          <div>
            <p>click me</p>
            <button onClick={onClick}>Clicked { value } times</button>
          </div>
        )
      }}
    </FormField>
  )
};


export default connect()(Input);
// Uncomment me
//export default Input;
