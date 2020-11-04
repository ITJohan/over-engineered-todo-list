import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo', () => {
  test('renders', () => {
    render(<Todo content='Buy groceries' />)
  })

  test('renders a todo with specified text', () => {
    render(<Todo content='Buy groceries' />)
    const todo = screen.getByText('Buy groceries');
    expect(todo).toBeInTheDocument();
  })

  test('renders a drag and drop icon', () => {
    render(<Todo content='Buy groceries' />);
    const dragBtn = screen.getByLabelText('Drag icon');
    expect(dragBtn).toBeInTheDocument();
  })
  
  test('renders a checkbox', () => {
    render(<Todo content='Buy groceries' />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  })
  
  test('renders a delete button', () => {
    render(<Todo content='Buy groceries' />);
    const deleteBtn = screen.getByLabelText('Delete button');
    expect(deleteBtn).toBeInTheDocument();
  });
});