import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Luis Donis link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Luis Donis/i);
  expect(linkElement).toBeInTheDocument();
});