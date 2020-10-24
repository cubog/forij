import React from 'react';
import ReactDOM from 'react-dom';
import FeedView from './FeedView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeedView />, div);
  ReactDOM.unmountComponentAtNode(div);
});