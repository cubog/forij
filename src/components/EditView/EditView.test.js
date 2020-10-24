import React from 'react';
import ReactDOM from 'react-dom';
import EditView from './EditView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditView />, div);
  ReactDOM.unmountComponentAtNode(div);
});