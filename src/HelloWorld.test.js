import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from './HelloWorld';

test('renders hello world', () => {
  const { getByText } = render(<HelloWorld />);
  const headingElement = getByText(/hello, world/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders without errors', () => {
  const { getByTestId } = render(<HelloWorld />);
  const componentElement = getByTestId('hello-world-component');
  expect(componentElement).toBeInTheDocument();
});

test('has the correct CSS class', () => {
  const { getByTestId } = render(<HelloWorld />);
  const componentElement = getByTestId('hello-world-component');
  expect(componentElement).toHaveClass('hello-world');
});

test('renders the correct heading text', () => {
  const { getByText } = render(<HelloWorld />);
  const headingElement = getByText(/hello, world/i);
  expect(headingElement).toBeInTheDocument();
});
