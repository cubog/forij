import React from 'react';
import ReactDOM from 'react-dom';
import CardView from './CardView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardView />, div);
  ReactDOM.unmountComponentAtNode(div);
});