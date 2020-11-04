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
 * @param {{
 *  content: string
 * }}
 */
const Todo = ({ content }) => {
  return (
    <div style={styles.container}>
      <ListIcon style={styles.item} aria-label='Drag icon' />
      <input style={styles.item} type='checkbox' />
      <p style={styles.item}>{content}</p>
      <DeleteIcon style={styles.item} aria-label='Delete button' />
    </div>
  );
};

export default Todo;