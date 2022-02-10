import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link to git repo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Link to git repository/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header text', () => {
  render(<App />);
  const HeaderText = screen.getByText(/Events timeline/i);
  expect(HeaderText).toBeInTheDocument();
});
