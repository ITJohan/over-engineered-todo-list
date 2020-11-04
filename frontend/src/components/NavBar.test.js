import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  test('renders', () => {
    render(<NavBar />);
  })

  test('renders logo', () => {
    render(<NavBar />);
    const logo = screen.getByText('✔️Over-Engineered Todo List');
    expect(logo).toBeInTheDocument();
  })
});