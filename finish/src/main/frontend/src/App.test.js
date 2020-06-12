import React from 'react';
import { render } from '@testing-library/react';
import App from './Components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Artist Web Service/i);
  expect(linkElement).toBeInTheDocument();
});
