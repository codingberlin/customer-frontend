const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

import React from 'react';
import {fireEvent, getByLabelText, render, screen} from '@testing-library/react';
import App from './App';
import CreateCustomer from "./CreateCustomer";

test('error message when first name got cleared', () => {
  render(<CreateCustomer />);
  fireEvent.change(screen.getByLabelText(/Vorname/i), {target: {value: 'Jane'}})
  expect(screen.queryAllByText(/Bitte Vornamen angeben/i)).toHaveLength(0)
  fireEvent.change(screen.getByLabelText(/Vorname/i), {target: {value: ''}})
  expect(screen.getByText(/Bitte Vornamen angeben/i)).toBeInTheDocument()
});
