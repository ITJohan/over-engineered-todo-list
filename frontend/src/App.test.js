import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders', () => {
    render(<App />);
  });

  test('renders navbar', () => {
    render(<App />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  })

  test('renders todo list', () => {
    render(<App />);
    const todoList = screen.getByLabelText('Todo list');
    expect(todoList).toBeInTheDocument();
  })
})
