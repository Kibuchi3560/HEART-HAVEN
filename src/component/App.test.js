import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Heart Haven Adoption Center/i); // Replace with actual text in your Header
  expect(headerElement).toBeInTheDocument();
});

test('renders details component', () => {
  render(<App />);
  const detailsElement = screen.getByText(/Overview/i); // Replace with actual text in your Details component
  expect(detailsElement).toBeInTheDocument();
});

test('renders footer component', () => {
  render(<App />);
  const footerElement = screen.getByText(/Adoption Center Location/i); // Replace with actual text in your Footer component
  expect(footerElement).toBeInTheDocument();
});
