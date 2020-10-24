import React from 'react';
import ReactDOM from 'react-dom';
import ListingView from './ListingView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListingView />, div);
  ReactDOM.unmountComponentAtNode(div);
});