import React from 'react';
import ReactDOM from 'react-dom';
import DateInput from './DateInput';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});