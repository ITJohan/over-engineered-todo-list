import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo', () => {
  test('renders', () => {
    render(<Todo text='Buy groceries' />)
  })

  test('renders a todo with specified text', () => {
    render(<Todo text='Buy groceries' />)
    const todo = screen.getByText('Buy groceries');
    expect(todo).toBeInTheDocument();
  })

  test('renders a drag and drop icon', () => {
    render(<Todo text='Buy groceries' />);
    const dragBtn = screen.getByLabelText('Drag icon');
    expect(dragBtn).toBeInTheDocument();
  })
  
  test('renders a checkbox', () => {
    render(<Todo text='Buy groceries' />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  })
  
  test('renders a delete button', () => {
    render(<Todo text='Buy groceries' />);
    const deleteBtn = screen.getByLabelText('Delete button');
    expect(deleteBtn).toBeInTheDocument();
  });
});