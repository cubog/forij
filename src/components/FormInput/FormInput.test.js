import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from './FormInput';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});