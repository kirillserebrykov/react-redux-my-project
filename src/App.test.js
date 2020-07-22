import React from 'react';
import { render } from '@testing-library/react';
import MyApp from './App';

test('renders learn react link', () => {
  
  const { getByText } = render(<MyApp />);
  
  expect(getByText).toBe(getByText);
});
