import { ReactComponent as ListIcon } from '../icons/list-black-18dp.svg';
import { ReactComponent as DeleteIcon } from '../icons/delete-black-18dp.svg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    marginLeft: '0.5rem'
  }
}

/**
 * Todo component with drag icon, checkbox, todo and delete button
 * @param {Object} props
 * @param {string} props.text - Todo text  
 */
const Todo = ({ text }) => {
  return (
    <div style={styles.container}>
      <ListIcon style={styles.item} aria-label='Drag icon' />
      <input style={styles.item} type='checkbox' />
      <p style={styles.item}>{text}</p>
      <DeleteIcon style={styles.item} aria-label='Delete button' />
    </div>
  );
};

export default Todo;