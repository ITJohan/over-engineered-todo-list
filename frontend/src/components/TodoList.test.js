import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('renders', () => {
      render(<TodoList todos={[]} />)
  })

  test('renders a list of todos', () => {
    const todos = [
      {
        id: 1,
        content: 'Buy groceries'
      },
      {
        id: 2,
        content: 'Do laundry'
      },
      {
        id: 3,
        content: 'Go shopping'
      }
    ];

    render(<TodoList todos={todos} />);
    const todo1 = screen.getByText('Buy groceries');
    const todo2 = screen.getByText('Do laundry');
    const todo3 = screen.getByText('Go shopping');

    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
    expect(todo3).toBeInTheDocument();
  })
})