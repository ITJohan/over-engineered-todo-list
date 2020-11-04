const styles = {
  nav: {
    backgroundColor: 'SteelBlue',
    color: 'white',
    padding: '1rem'
  }
}

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h1>✔️Over-Engineered Todo List</h1>
    </nav>
  );
};

export default NavBar;