import { ReactComponent as DoneIcon } from '../icons/done_outline-white-18dp.svg';

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'SteelBlue',
    color: 'white',
    padding: '1rem'
  },
  icon: {
    width: '2rem',
    height: '2rem'
  }
}

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <DoneIcon style={styles.icon} /><h1>Over-Engineered Todo List</h1>
    </nav>
  );
};

export default NavBar;