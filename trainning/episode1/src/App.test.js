import { render, screen } from '@testing-library/react';
import React from 'react';
import { ReactDOM } from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
